// import React from "react";
// import OwlCarousel from "react-owl-carousel";
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";
// import { banner_1, banner_2, banner_3, banner_4, banner_5 } from "../../assets";
// // import "./Banner.scss"

// const Banner = () => {
//   const [banner, setBanner] = React.useState([
//     {
//       id: 1,
//       imageURL: banner_1,
//     },
//     {
//       id: 2,
//       imageURL: banner_2,
//     },
//     {
//       id: 3,
//       imageURL: banner_3,
//     },
//     {
//       id: 4,
//       imageURL: banner_4,
//     },
//     {
//       id: 5,
//       imageURL: banner_5,
//     },
//   ]);
//   return (
//     <>
//       <h1>Test</h1>
//       <OwlCarousel className="owl-theme" items={3} nav dots loop center>
//         {banner.map((data: any, index: number) => {
//           return (
//             <div key={index} className="item card-carousel">
//               <img src={data.imageURL} alt="image" />
//             </div>
//           );
//         })}
//       </OwlCarousel>
//     </>
//   );
// };

// export default Banner;
