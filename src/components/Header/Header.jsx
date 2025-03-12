// perfect without dynamic
// import React, { useState } from 'react';
// import { Menu, X, Search } from 'lucide-react';

// const Header = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <header className="sticky top-0 bg-slate-800 text-white py-4 px-6 md:px-9 flex items-center justify-between z-50"
// >
//       {/* Logo */}
//       <div className='text-2xl font-bold text-red-500'>Netlify</div>
      
//       {/* Search Bar (hidden on small screens) */}
//       <div className='hidden md:flex items-center bg-gray-700 px-4 py-2 rounded-lg'>
//         <Search className='w-5 h-5 text-gray-300 mr-2' />
//         <input type='search' placeholder='Search...' className='bg-transparent focus:outline-none text-white' />
//       </div>
      
//       {/* Mobile Menu Button */}
//       <button className='md:hidden' onClick={() => setMenuOpen(!menuOpen)}>
//         {menuOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
//       </button>

//       {/* Mobile Dropdown Menu */}
//       {menuOpen && (
//         <div className='absolute top-16 left-0 w-full bg-slate-900 text-white flex flex-col items-center py-4 space-y-4 md:hidden'>
//           <div className='flex items-center bg-gray-700 px-4 py-2 rounded-lg w-3/4'>
//             <Search className='w-5 h-5 text-gray-300 mr-2' />
//             <input type='search' placeholder='Search...' className='bg-transparent focus:outline-none text-white w-full' />
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;




// -----------------------------------------------------------------------//

// trying dynamic with passing the value
// import React, { useState } from 'react';
// import { Menu, X, Search } from 'lucide-react';

// // import { useParams } from "react-router-dom";

// const Header = ({onSearchChange}) => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [query, setQuery] = useState("");
//     // const { id } = useParams();
//     const handleClick = (e) => {
//       e.preventDefault();
//       setQuery(e.target.value);
//       onSearchChange(e.target.value)
//       // console.log(e.target.value);
//     };

//   return (
//     <header className="sticky top-0 bg-slate-800 text-white py-4 px-6 md:px-9 flex items-center justify-between z-50"
// >
//       {/* Logo */}
//       <div className='text-2xl font-bold text-red-500'>Netlify</div>
      
//       {/* Search Bar (hidden on small screens) */}
//       <div className='hidden md:flex items-center bg-gray-700 px-4 py-2 rounded-lg'>
//         <Search className='w-5 h-5 text-gray-300 mr-2' />
//         <input id="abc" type='search' value={query}  onChange={handleClick} placeholder='Search...' className='bg-transparent focus:outline-none text-white' />
//       </div>
      
//       {/* Mobile Menu Button */}
//       <button className='md:hidden' onClick={() => setMenuOpen(!menuOpen)}>
//         {menuOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
//       </button>

//       {/* Mobile Dropdown Menu */}
//       {menuOpen && (
//         <div className='absolute top-16 left-0 w-full bg-slate-900 text-white flex flex-col items-center py-4 space-y-4 md:hidden'>
//           <div className='flex items-center bg-gray-700 px-4 py-2 rounded-lg w-3/4'>
//             <Search className='w-5 h-5 text-gray-300 mr-2' />
//             <input type='search' placeholder='Search...' className='bg-transparent focus:outline-none text-white w-full' />
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;




// ------------------------  28 Feb,2025 -------------------------------------------------
import React, { useState } from 'react';
import { Menu, X, Search } from 'lucide-react';
import _ from "lodash";
// import { useParams } from "react-router-dom";

const Header = ({onSearchChange}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState("");
    // const { id } = useParams();
    const handleClick = (e) => {
      e.preventDefault();
      setQuery(e.target.value);
      onSearchChange(e.target.value)
      // console.log(e.target.value);
    };

  return (
    <header className="sticky top-0 bg-slate-800 text-white py-4 px-6 md:px-9 flex items-center justify-between z-50"
>
      {/* Logo */}
      <div className='text-2xl font-bold text-red-500'>Netlify</div>
      
      {/* Search Bar (hidden on small screens) */}
      <div className='hidden md:flex items-center bg-gray-700 px-4 py-2 rounded-lg'>
        <Search className='w-5 h-5 text-gray-300 mr-2' />
        <input id="abc" type='search' value={query}  onChange={handleClick} placeholder='Search...' className='bg-transparent focus:outline-none text-white' />
      </div>
      
      {/* Mobile Menu Button */}
      <button className='md:hidden' onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
      </button>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className='absolute top-16 left-0 w-full bg-slate-900 text-white flex flex-col items-center py-4 space-y-4 md:hidden'>
          <div className='flex items-center bg-gray-700 px-4 py-2 rounded-lg w-3/4'>
            <Search className='w-5 h-5 text-gray-300 mr-2' />
            <input type='search' placeholder='Search...' className='bg-transparent focus:outline-none text-white w-full' />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
