// // import { Link } from "react-router-dom";
// import React from "react";

// const cardData = [
//   {
//     title: "The Finding Nemo",
//     image:
//       "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p31890_p_v10_bb.jpg",
//     tags: ["comedy", "drama", "magic"],
//     rating: 7.9,
//   },

//   {
//     title: "Harry Potter and the Goblet of Fire",
//     image: "https://wallpapercave.com/wp/fmb9gAQ.jpg",
//     tags: ["drama", "action", "magic"],
//     rating: 8.7,
//   },

//   {
//     title: "Bhediya",
//     image: "https://static.india.com/wp-content/uploads/2022/12/bhediya.jpg",
//     tags: ["horror", "fantasy", "comedy"],
//     rating: 6.8,
//   },

//   {
//     title: "Venom",
//     image:
//       "https://movie.webindia123.com/movie/2018/hollywood/april/venom/venom.jpg",
//     tags: ["action", "thriller", "sci-fi"],
//     rating: 9.2,
//   },
// ];

// const Cards = () => {
//   return (
//     <div>

{
  /* {cardData.map(( card, index) =>
       ( <div key={index}>
            <div >  Item is: {card.title}</div> 
            <img src={card.image} alt="" className="h-[20%]"/>
       </div> )
      )} */
}

//       <div class="max-w-sm rounded overflow-hidden shadow-lg">
//   <img class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains" />
//   <div class="px-6 py-4">

//     <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
//     <p class="text-gray-700 text-base">
//       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
//     </p>
//   </div>
//   <div class="px-6 pt-4 pb-2">
//     <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
//     <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
//     <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
//   </div>
// </div>

//     </div>
//   );
// };

// export default Cards;

// 2nd try --- final
// import React from "react";
// import { Link } from "react-router-dom";
// import { CardData } from "../Constants/data";
// import Slider from "./Slider";
// import axios from "axios";

// const Card = ({ title, image, description, tags, rating }) => (

//   // <Link to={`/movie/${movie.index}`} key={movie.index} className="card">

//      // h-screen added
//       <div className="max-w-sm rounded h-full overflow-hidden shadow-lg bg-white">

//     {/* change the height below in the image */}
//     <img className="w-full h-2/3" src={image} alt={title} />
//     <div className="px-6 py-4">
//       <div className="font-bold text-xl mb-2">{title}</div>
//       {description && <p className="text-gray-700 text-base">{description}</p>}
//     </div>
//     <div className="px-6 pt-4 pb-2">
//       {tags.map((tag, index) => (
//         <span
//           key={index}
//           className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
//         >
//           #{tag}
//         </span>
//       ))}

//     </div>
//     {rating && (
//       <div className="flex justify-start px-7  bg-white p-1">
//         <span className="text-yellow-500 font-medium">⭐ {rating} / 10</span>
//       </div>
//     )}
//       </div>

//   // </Link>
// );

// const Cards = () => {
//   return (
//     <>
//      <Slider />
//     <div className="flex flex-wrap gap-4 justify-evenly  my-6">
//       {CardData.map((card, index) => (
//           <Link to={`/movie/${index}`} key={index} className="card">
//         <Card {...card} />
//          </Link>
//       ))}
//     </div>
//     </>
//   );
// };

// export default Cards;

// 3rd try
// import React from "react";
// import { Link } from "react-router-dom";

// const movies = [
//   { id: 1, title: "Inception", image: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p31890_p_v10_bb.jpg" },
//   { id: 2, title: "Interstellar", image: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p31890_p_v10_bb.jpg" }
// ];

// function Cards() {
//   return (
//     <div>
//       {/* <h2>Movies</h2> */}
//       <div className="movies-grid">
//         {movies.map((movie) => (
//           // <Link to={`/movie/${movie.id}`} key={movie.id} className="card">
//            <div> <img src={movie.image} alt={movie.title} className="h-11" />
//             <h3>{movie.title}</h3>     </div>
//           // </Link>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Cards;

// 4th try
// import React from 'react'

// const Cards = () => {
//   return (

//       <div class="max-w-sm rounded overflow-hidden shadow-lg">
//   <img class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains" />
//   <div class="px-6 py-4">
//     <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
//     <p class="text-gray-700 text-base">
//       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
//     </p>
//   </div>
//   <div class="px-6 pt-4 pb-2">
//     <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
//     <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
//     <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
//   </div>
// </div>

//   )
// }

// export default Cards

// try with axios only one place -2nd final 25 Feb
// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { CardData } from "../Constants/data";
// import Slider from "./Slider";
// import axios from "axios";
// const Card = ({ Title:title,Poster: image, description, tags, rating ,Year}) => (

//      // h-screen added
//       <div className="max-w-sm rounded h-full overflow-hidden shadow-lg bg-white">

//     {/* change the height below in the image */}
//     <img className="w-full h-2/3" src={image} alt={title} />
//     <div className="px-6 py-4">
//       <div className="font-bold text-xl mb-2">{title}</div>
//       {/* {description && <p className="text-gray-700 text-base">{description}</p>} */}
//             {Year && <p className="text-gray-700 text-base">{Year}</p>}

//     </div>
//     {/* <div className="px-6 pt-4 pb-2">
//       {tags?.map((tag, index) => (
//         <span
//           key={index}
//           className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
//         >
//           #{tag}
//         </span>
//       ))}

//     </div> */}
//     {/* {rating && (
//       <div className="flex justify-start px-7  bg-white p-1">
//         <span className="text-yellow-500 font-medium">⭐ {rating} / 10</span>
//       </div>
//     )} */}
//       </div>

//   // </Link>
// );
// const Cards = () => {
//   const [data,setData]=useState([]);

//   useEffect(() => {
//     axios.get(" https://www.omdbapi.com/?s=titanic&apikey=753b4e2c")
//     .then(response => {
//       // console.log(response.data.Search);

//       setData(response.data.Search)})
//     .catch(error => console.error(error));
//   }, []);

//   console.log(data);

//   return (
//     <>
//      <Slider />
//     <div className="flex flex-wrap gap-4 justify-evenly  my-6">
//     {Array.isArray(data) && data.length>0 && data?.map((item, index) => (
//           <Link to={`/movie/${index}`} key={index} className="card">
//             {item.title}
//         <Card {...item} />
//          </Link>
//         // <Card/>
//       ))}
//     </div>
//     </>
//   );
// };

// export default Cards;

// try with axios in id
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { CardData } from "../Constants/data";
import MovieDetail from "./MovieDetail";
import Slider from "./Slider";
import axios from "axios";

const Card = ({
  Title: title,
  Poster: image,
  imdbID,
  description,
  tags,
  rating,
  Year,
}) => {
  const [itemId, setItemId] = useState();

  useEffect(() => {
    //axios.get(" https://www.omdbapi.com/?i=tt1640571&apikey=753b4e2c")
    axios
      .get(`https://www.omdbapi.com/?i=${imdbID}&apikey=753b4e2c`)
      .then((response) => {
        setItemId(response.data.imdbID);
        // console.log(response.data);
      });
  }, []);

  return (
    <div className="max-w-sm rounded h-full overflow-hidden shadow-lg bg-white">
      <img className="w-full h-2/3" src={image} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        {Year && <p className="text-gray-700 text-base">{Year}</p>}
      </div>
    </div>
  );
};

const Cards = ({searchQuery}) => {
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState("you");
  // console.log("abb",searchText);
  console.log("search on cards ",searchQuery);
  
  

  useEffect(() => {
    axios
      .get(`https://www.omdbapi.com/?s=${searchQuery}&apikey=753b4e2c`)
      .then((response) => {
        // console.log(response.data.Search);

        setData(response.data.Search);
      })
      .catch((error) => console.error(error));
  }, [searchQuery]);

  // console.log(data);

  return (
    <>
      <Slider />
      <div className="flex flex-wrap gap-4 justify-evenly  my-6">
        {Array.isArray(data) &&
          data.length > 0 &&
          data?.map((item, index) => (
            <Link to={`/movie/${item.imdbID}`} key={index} className="card">
              {item.title}
              <Card {...item} />
            </Link>
          ))}
      </div>
      {/* <MovieDetail receivedId={imdbID}/> */}
    </>
  );
};

export default Cards;
