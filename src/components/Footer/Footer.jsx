import React from 'react'

const Footer = () => {
  return (
  

<footer className="flex flex-col space-y-10 justify-center m-10">

    <nav className="flex justify-center flex-wrap gap-6 text-gray-500 font-medium">
        <a className="hover:text-gray-900" href="#">Home</a>
        <a className="hover:text-gray-900" href="#">About</a>
        <a className="hover:text-gray-900" href="#">Services</a>
        <a className="hover:text-gray-900" href="#">Media</a>
        <a className="hover:text-gray-900" href="#">Gallery</a>
        <a className="hover:text-gray-900" href="#">Contact</a>
    </nav>

    <div className="flex justify-center space-x-5">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/facebook-new.png" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/linkedin-2.png" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/instagram-new.png" />
        </a>
        <a href="https://messenger.com" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/facebook-messenger--v2.png" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/twitter.png" />
        </a>
    </div>
    <p className="text-center text-gray-700 font-medium">&copy; 2022 Company Ltd. All rights reservered.</p>
</footer>

   
  )
}

export default Footer





// 2nd footer
// import React from "react";

// const Footer = () => {
//   return (
//     <div className="bg-blue-950 text-white">
//       <div className="max-w-screen-xl py-10 px-4 sm:px-6 mx-auto sm:flex justify-between">
//         {/* Left Section */}
//         <div className="p-5 sm:w-8/12">
//           <h3 className="font-bold text-3xl text-white mb-4">Componentity</h3>

//           <div className="flex uppercase text-sm">
//             <a href="#" className="mr-4 hover:text-blue-300 transition">Home</a>
//             <a href="#" className="mr-4 hover:text-blue-300 transition">About Us</a>
//             <a href="#" className="mr-4 hover:text-blue-300 transition">Contact Us</a>
//             <a href="#" className="hover:text-blue-300 transition">Support Us</a>
//           </div>
//         </div>

//         {/* Right Section - Newsletter */}
//         <div className="p-5 sm:w-4/12">
//           <h3 className="font-medium text-lg text-white mb-4">Subscribe to our Newsletter</h3>
//           <form className="mt-4">
//             <input 
//               className="border border-blue-400 rounded w-full px-4 py-3 text-gray-800 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400"
//               type="email"
//               placeholder="username@email.com"
//             />
//           </form>
//         </div>
//       </div>

//       {/* Copyright Section */}
//       <div className="flex py-5 mx-auto text-gray-300 text-sm flex-col items-center border-t border-blue-700 max-w-screen-xl">
//         <p>© Copyright 2024. All Rights Reserved.</p>
//       </div>
//     </div>
//   );
// };

// export default Footer;
