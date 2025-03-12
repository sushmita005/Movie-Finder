// import React, { useState, useEffect } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';

// const images = [
// 'https://cdn.wallpapersafari.com/55/63/20SVkK.jpg',
//   'https://w0.peakpx.com/wallpaper/505/269/HD-wallpaper-movie-call-me-by-your-name.jpg',
//   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdusfSPzT1k_X8xfS6dcoBy-3rAheuq4DlkA&s'
// ];

// const Slider = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const prevSlide = () => {
//     setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
//   };

//   const nextSlide = () => {
//     setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
//   };

//   useEffect(() => {
//     const interval = setInterval(nextSlide, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="max-w-full mx-auto relative overflow-hidden shadow-lg">
//       <div className="relative h-96 flex transition-transform duration-700 ease-in-out w-full" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
//         {images.map((img, index) => (
//           <div key={index} className="w-full flex-shrink-0">
//             <img src={img} className="object-cover w-full h-full" alt={`Slide ${index + 1}`} />
//           </div>
//         ))}
//       </div>
      
//       {/* Indicators */}
//       <div className="flex absolute bottom-5 left-1/2 z-30 -translate-x-1/2 space-x-2">
//         {images.map((_, index) => (
//           <button key={index} onClick={() => setCurrentIndex(index)} className={`w-3 h-3 rounded-full transition ${currentIndex === index ? 'bg-gray-400' : 'bg-gray-300 hover:bg-gray-400'}`}></button>
//         ))}
//       </div>

//       {/* Slider controls */}
//       <button onClick={prevSlide} className="absolute left-3 top-1/2 z-40 bg-gray-200/50 p-2 rounded-full hover:bg-gray-300">
//         <ChevronLeft className="text-gray-600" />
//       </button>
//       <button onClick={nextSlide} className="absolute right-3 top-1/2 z-40 bg-gray-200/50 p-2 rounded-full hover:bg-gray-300">
//         <ChevronRight className="text-gray-600" />
//       </button>
//     </div>
//   );
// };

// export default Slider;



// import React, { useState, useEffect } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';

// const images = [
//   'https://w0.peakpx.com/wallpaper/505/269/HD-wallpaper-movie-call-me-by-your-name.jpg',
//   'https://cdn.wallpapersafari.com/55/63/20SVkK.jpg',
//   'https://www.pixelstalk.net/wp-content/uploads/2016/07/1080p-Movie-Wallpapers-Free-Download.jpg',
//   'https://wallpapercave.com/wp/fmb9gAQ.jpg',
//   'https://www.pixelstalk.net/wp-content/uploads/2016/07/1080p-Movie-Wallpapers-Free-Download.jpg'
// ];

// const Slider = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const prevSlide = () => {
//     setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
//   };

//   const nextSlide = () => {
//     setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
//   };

//   useEffect(() => {
//     const interval = setInterval(nextSlide, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="max-w-full mx-auto relative overflow-hidden shadow-lg">
//       <div className="relative max-h-82 flex transition-transform duration-700 ease-in-out w-full" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
//         {images.map((img, index) => (
//           <div key={index} className="w-full flex-shrink-0 h-69">
//             <img src={img} className="object-cover w-full " alt={`Slide ${index + 1}`} />
//           </div>
//         ))}
//       </div>
      
//       {/* Indicators */}
//       <div className="flex absolute bottom-5 left-1/2 z-30 -translate-x-1/2 space-x-2">
//         {images.map((_, index) => (
//           <button key={index} onClick={() => setCurrentIndex(index)} className={`w-3 h-3 rounded-full transition ${currentIndex === index ? 'bg-gray-400' : 'bg-gray-300 hover:bg-gray-400'}`}></button>
//         ))}
//       </div>

//       {/* Slider controls */}
//       <button onClick={prevSlide} className="absolute left-3 top-1/2 z-40 bg-gray-200/50 p-2 rounded-full hover:bg-gray-300">
//         <ChevronLeft className="text-gray-600" />
//       </button>
//       <button onClick={nextSlide} className="absolute right-3 top-1/2 z-40 bg-gray-200/50 p-2 rounded-full hover:bg-gray-300">
//         <ChevronRight className="text-gray-600" />
//       </button>
//     </div>
//   );
// };

// export default Slider;





// new and optimized Slider
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  'https://w0.peakpx.com/wallpaper/505/269/HD-wallpaper-movie-call-me-by-your-name.jpg',
  'https://cdn.wallpapersafari.com/55/63/20SVkK.jpg',
  'https://www.pixelstalk.net/wp-content/uploads/2016/07/1080p-Movie-Wallpapers-Free-Download.jpg',
  'https://wallpapercave.com/wp/fmb9gAQ.jpg',
  'https://www.pixelstalk.net/wp-content/uploads/2016/07/1080p-Movie-Wallpapers-Free-Download.jpg'
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-full mx-auto relative overflow-hidden shadow-lg h-96"> {/* Fixed height */}
      <div className="relative flex w-full h-full transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((img, index) => (
          <div key={index} className="w-full flex-shrink-0 h-full">
            <img src={img} className="object-cover w-full h-full" alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      
      {/* Indicators */}
      <div className="flex absolute bottom-5 left-1/2 z-30 -translate-x-1/2 space-x-2">
        {images.map((_, index) => (
          <button 
            key={index} 
            onClick={() => setCurrentIndex(index)} 
            className={`w-3 h-3 rounded-full transition ${currentIndex === index ? 'bg-gray-400' : 'bg-gray-300 hover:bg-gray-400'}`}
          ></button>
        ))}
      </div>

      {/* Slider controls */}
      <button onClick={prevSlide} className="absolute left-3 top-1/2 z-40 bg-gray-200/50 p-2 rounded-full hover:bg-gray-300">
        <ChevronLeft className="text-gray-600" />
      </button>
      <button onClick={nextSlide} className="absolute right-3 top-1/2 z-40 bg-gray-200/50 p-2 rounded-full hover:bg-gray-300">
        <ChevronRight className="text-gray-600" />
      </button>
    </div>
  );
};

export default Slider;


