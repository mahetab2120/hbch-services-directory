import React from 'react'
import { useLocation,Link } from 'react-router-dom';

function Navbar() {
    const location = useLocation();
  return (
    <nav className='flex sm:justify-center space-x-4 mt-4'>
    {[
      ['BIOCHEMISTRY', '/', 'bg-[#dc2f2f] border-[#dc2f2f] hover:bg-[#dc2f2f] text-[#dc2f2f]','bg-[#dc2f2f] text-slate-900 bg-opacity-100'],
      ['CYTOPATHOLOGY', '/CYTOPATHOLOGY', 'bg-[#00bbf0] border-[#00bbf0] hover:bg-[#00bbf0] text-[#00bbf0]','bg-[#00bbf0] text-slate-900 bg-opacity-100'],
      ['PATHOLOGY', '/PATHOLOGY', 'bg-[#f5dc9a] border-[#f5dc9a] hover:bg-[#f5dc9a] text-[#f5dc9a]','bg-[#f5dc9a] text-slate-900 bg-opacity-100'],
      ['HAEMATOPATHOLOGY', '/HAEMATOPATHOLOGY', 'bg-[#22c55e] border-[#22c55e] hover:bg-[#22c55e] text-[#22c55e]','bg-[#22c55e] text-slate-900 bg-opacity-100'],
      ['MICROBIOLOGY', '/MICROBIOLOGY', 'bg-[#8971d0] border-[#8971d0] hover:bg-[#8971d0] text-[#8971d0]','bg-[#8971d0] text-slate-900 bg-opacity-100'],
      ['MOLECULAR PATHOLOGY', '/MOLECULAR-PATHOLOGY', 'bg-[#ec407a] border-[#ec407a] hover:bg-[#ec407a] text-[#ec407a]','bg-[#ec407a] text-slate-900 bg-opacity-100'],
      ['TRANSFUSION MEDICINE', '/TRANSFUSION-MEDICINE', 'bg-[#ff8f00] border-[#ff8f00] hover:bg-[#ff8f00] text-[#ff8f00]','bg-[#ff8f00] text-slate-900 bg-opacity-100'],
    ].map(([title, url, color,act]) => (
      <Link
        to={url}
        key={url}
        className={`px-4 font-medium py-2 ${color} font-medium bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border hover:text-slate-900 ${location.pathname === url ? act : ''}`}
      >
        {title}
      </Link>
    ))}
  </nav>
  
  )
}

export default Navbar