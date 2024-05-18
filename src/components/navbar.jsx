import React from 'react'
import { useLocation,Link } from 'react-router-dom';
import { Navdata } from '../data/navdet';
import styles from './navbar.module.css'

function Navbar() {
    const location = useLocation();

  return (
    <nav className='flex sm:justify-center space-x-4 mt-4'>
    {Navdata.map(([title, url, bg]) => (
      <Link
        to={url}
        key={url}
         //className={`px-4 font-medium py-2  ${'bg-'+bg+' border-'+bg+' hover:bg-'+bg+' text-'+bg}  font-medium rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm  border hover:text-slate-900 ${location.pathname === url ?  'text-slate-900' : 'bg-opacity-20'}`}
        //className={`px-4 font-medium py-2 bg-${bg} border-${bg} text-${bg} font-medium rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm border hover:text-slate-900 ${location.pathname === url ?  'text-slate-900' : 'bg-opacity-20 hover:bg-opacity-100'}`}
        className={`px-4 font-medium py-2 ${styles[bg]} ${styles[bg+':hover']} text-${bg} font-medium rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm border hover:text-slate-900 ${
            location.pathname === url ? `${styles[bg + '-active']}  ${styles['tab-active']}` : 'bg-opacity-20 hover:bg-opacity-100'}`}
        
      >
        {title}
      </Link>
    ))}
  </nav>
  
  )
}

export default Navbar

