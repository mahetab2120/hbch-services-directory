import React from 'react'


function Searchbox({searchOnChange}) {
    const handleSearchChange = (e) => {
        searchOnChange(e.target.value)
    }
  return (
    <div className="relative m-2 w-1/2 mx-auto">
    <div className="absolute inset-y-0 left-0 flex items-center pl-3">
        <svg className="h-5 w-5 text-slate-400" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
        </svg>
    </div>
    <input type="text" onChange={handleSearchChange} placeholder="Search" className="block w-full pl-10 pr-4 py-2 bg-slate-800 text-white rounded-md placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-500" />
</div>
  )
}

export default Searchbox