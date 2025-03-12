// import React from "react";
// import { useParams } from "react-router-dom";
// import {CardData} from "../Constants/data";     // Import the card data
// const MovieDetail=()=> {
//   const { id } = useParams();
//   console.log("MovieDetail", id);

//   const movie = CardData[id];
//   console.log("Movie", movie);

//   if (!movie) {
//     return <h2 className="text-center text-red-500">Movie Not Found</h2>;
//   }

//   return (
//     <div className="flex flex-col items-center p-10 w-screen">
//       <h1 className="text-2xl font-bold">{movie.title}</h1>
//       <img className="w-1/2 my-4 rounded-lg" src={movie.image} alt={movie.title} />
//       <p className="text-gray-600">Tags: {movie.tags.join(", ")}</p>
//       <p className="text-yellow-500 font-bold">⭐ {movie.rating} / 10</p>
//     </div>
//   );
// }

// export default MovieDetail;

// 2nd try
// import React from 'react'

// const MovieDetail = () => {
//   return (
//     <div>

//       <div class="bg-gray-100 dark:bg-gray-800 py-8">
//     <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div class="flex flex-col md:flex-row -mx-4">
//             <div class="md:flex-1 px-4">
//                 <div class="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
//                     <img class="w-full h-full object-cover" src="https://cdn.pixabay.com/photo/2020/05/22/17/53/mockup-5206355_960_720.jpg" alt="Product Image" />
//                 </div>
//                 <div class="flex -mx-2 mb-4">
//                     <div class="w-1/2 px-2">
//                         <button class="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">Download</button>
//                     </div>
//                     <div class="w-1/2 px-2">
//                         <button class="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">Add to Wishlist</button>
//                     </div>
//                 </div>
//             </div>
//             <div class="md:flex-1 px-4">
//                 <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-2">Movie name</h2>

//                 <div>
//                     <span class="font-bold text-gray-700 dark:text-gray-300"> Plot/Description:</span>
//                     <p class="text-gray-600 dark:text-gray-300 text-sm mt-2">
//                         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
//                         sed ante justo. Integer euismod libero id mauris malesuada tincidunt. Vivamus commodo nulla ut
//                         lorem rhoncus aliquet. Duis dapibus augue vel ipsum pretium, et venenatis sem blandit. Quisque
//                         ut erat vitae nisi ultrices placerat non eget velit. Integer ornare mi sed ipsum lacinia, non
//                         sagittis mauris blandit. Morbi fermentum libero vel nisl suscipit, nec tincidunt mi consectetur.
//                     </p>
//                 </div>

//                 {/* <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
//                     ante justo. Integer euismod libero id mauris malesuada tincidunt.
//                 </p> */}
//                 <div class="flex mb-4">
//                     <div class="mr-4">
//                         <span class="font-bold text-gray-700 dark:text-gray-300">Runtime:</span>
//                         <span class="text-gray-600 dark:text-gray-300">3h 29m</span>
//                     </div>
//                     <div>
//                         <span class="font-bold text-gray-700 dark:text-gray-300">Type:</span>
//                         <span class="text-gray-600 dark:text-gray-300">UA+</span>
//                     </div>
//                 </div>
//                 <div class="mb-4">
//                     <span class="font-bold text-gray-700 dark:text-gray-300">Actor</span>
//                     <div class="flex items-center mt-2">
//                        <p>lmdnfv,fve,verv,erve,er</p>
//                     </div>
//                 </div>
//                 <div class="mb-4">
//                     <span class="font-bold text-gray-700 dark:text-gray-300">Tag</span>
//                     <div class="flex items-center mt-2">
//                         <button class="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">#scifi</button>
//                         <button class="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">#cool</button>
//                         <button class="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">#Latin</button>
//                         {/* <button class="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">#comedy</button>
//                         <button class="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">#drama</button> */}
//                     </div>
//                 </div>

//             </div>
//         </div>
//     </div>
// </div>

//     </div>
//   )
// }

// export default MovieDetail

// --------------------------------------------------------------------------------------//

// final merging - final without API
// import React from "react";
// import { useParams } from "react-router-dom";
// import { CardData } from "../Constants/data"; // Import the card data

// const MovieDetail = () => {
//   const { id } = useParams();
//   console.log("MovieDetail", id);

//   const movie = CardData[id];
//   console.log("Movie", movie);

//   if (!movie) {
//     return <h2 className="text-center text-red-500">Movie Not Found</h2>;
//   }
//   return (
//     <div className="bg-gray-100 dark:bg-gray-800 py-8">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex flex-col md:flex-row -mx-4">
//           <div className="md:flex-1 px-4">
//             <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
//               <img
//                 className="w-full h-full object-cover"
//                 src={movie.image}
//                 alt={movie.title}
//               />
//             </div>
//             <div className="flex -mx-2 mb-4">
//               <div className="w-1/2 px-2">
//                 <button className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">
//                   Download
//                 </button>
//               </div>
//               <div className="w-1/2 px-2">
//                 <button className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">
//                   Add to Wishlist
//                 </button>
//               </div>
//             </div>
//           </div>
//           <div className="md:flex-1 px-4">
//             <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
//               {movie.title}
//             </h2>

//             <div>
//               <span className="font-bold text-gray-700 dark:text-gray-300">
//                 {" "}
//                 Plot :
//               </span>
//               <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
//                 {movie.plot}
//               </p>
//             </div>

//             <div className="flex flex-wrap mb-4 mt-2">
//               <div className="mr-4">
//                 <span className="font-bold text-gray-700 dark:text-gray-300">
//                   Runtime:
//                 </span>
//                 <span className="text-gray-600 dark:text-gray-300">
//                   {movie.runtime}
//                 </span>
//               </div>
//               <div>
//                 <span className="font-bold text-gray-700 dark:text-gray-300">
//                   Type:
//                 </span>
//                 <span className="text-gray-600 dark:text-gray-300">
//                   {movie.ratingCategory}
//                 </span>
//               </div>
//             </div>
//             <div className="mb-4">
//               <span className="font-bold text-gray-700 dark:text-gray-300">
//                 Cast :{" "}
//               </span>
//               <div className="flex items-center mt-2">
//                 <p>{movie.cast.join(", ")}</p>
//               </div>
//             </div>
//             <div className="mb-4">
//               <span className="font-bold text-gray-700 dark:text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl">
//                 Tag
//               </span>

//               {/* <span class="font-bold text-gray-700 dark:text-gray-300">
//                   Tag
//                 </span> */}
//               <div className="flex flex-wrap sm:flex-row items-center mt-2 p-2 sm:p-4 lg:p-6">
//                 {movie.tags.map((mov) => {
//                   return (
//                     <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
//                       {mov}
//                     </button>
//                   );
//                 })}
//                 {/* <p>****</p> */}
//                 {/* <button class="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
//                     {movie.tags[0]}
//                   </button>
//                   <button class="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
//                     {movie.tags[1]}
//                   </button>
//                   <button class="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
//                     {movie.tags[2]}
//                   </button> */}
//               </div>
//             </div>
//             <p className="text-yellow-500 mt-2 font-bold">
//               ⭐ {movie.rating} / 10
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MovieDetail;

// -----------------------------------------------------------------------------------------//

// try new API
import React, { useState ,useEffect} from "react";
import { useParams } from "react-router-dom";
// import { CardData } from "../Constants/data"; // Import the card data
import axios from "axios";

const MovieDetail = ({ }) => {
  const { id } = useParams();
  const [movieData, setMovieData] = useState({}); // Store the full response data

console.log("work to execute 1",id);

  useEffect(() => {
    // if (!imdbID) return; // Ensure imdbID is available before fetching

    console.log("work to execute 2");

    //axios.get(" https://www.omdbapi.com/?i=tt1640571&apikey=753b4e2c")
    axios
      .get(`https://www.omdbapi.com/?i=${id}&apikey=753b4e2c`)
      .then(response => {
        console.log("Response check",response);
        setMovieData(response.data); // Store full movie data
        console.log("Response is :",response);
        // console.log("imbdId",imdbID);
        console.log("id",movieData);
         })
         .catch(error => console.error("Error fetching data:", error));
  }, [id]);

  // console.log("id (after state update)", id); // This will now reflect updated state correctly


 
  // const movie = CardData[imdbID];

  if (!movieData) {
    console.log("MovieData", movieData);
    
    return <h2 className="text-center text-red-500">Movie Not Found</h2>;
  }
  return (
    <div className="bg-gray-100 dark:bg-gray-800 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4">
          <div className="md:flex-1 px-4">
            <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
              <img
                className="w-full h-full object-cover"
                src={movieData.Poster}
                alt={movieData.Poster}
              />
            </div>
            <div className="flex -mx-2 mb-4">
              <div className="w-1/2 px-2">
                <button className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">
                  Download
                </button>
              </div>
              <div className="w-1/2 px-2">
                <button className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">
                  Add to Wishlist
                </button>
              </div>
            </div>
          </div>
          <div className="md:flex-1 px-4">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
             Movie :  {movieData.Title}
            </h2>

            <div>
              <span className="font-bold text-gray-700 dark:text-gray-300">
                {" "}
                Plot :
              </span>
              <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                {movieData.Plot}
              </p>
            </div>

            <div className="flex flex-wrap mb-4 mt-2">
              <div className="mr-4">
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Runtime:
                </span>
                <span className="text-gray-600 dark:text-gray-300">
                  {movieData.Runtime}
                </span>
              </div>
              <div>
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Type:
                </span>
                <span className="text-gray-600 dark:text-gray-300">
                  {movieData.Type}
                </span>
              </div>
            </div>
            <div className="mb-4">
              <span className="font-bold text-gray-700 dark:text-gray-300">
                Cast :{" "}
              </span>
              <div className="flex items-center mt-2">
                <p>{movieData?.Actors}</p>
              </div>
            </div>
            <div className="mb-4">
              <span className="font-bold text-gray-700 dark:text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl">
                Tag
              </span>

              <div className="flex flex-wrap sm:flex-row items-center mt-2 p-2 sm:p-4 lg:p-6"> 
                <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                {movieData.Genre} 
                    </button>
                {/* .map((mov) => {
                  return (
                    <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                      {mov}
                    </button>
                  );
                })} */}
                </div>
            </div>
            
            <p className="text-yellow-500 mt-2 font-bold">
              ⭐ {movieData.Rated} / 10
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
