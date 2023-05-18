// import React from "react";
// import { auth } from "../auth/firebase";
// import { signOut } from "firebase/auth";
// import { Button } from "./Button";
// import { Link } from "react-router-dom";
// import Dropdown from "./Dropdown";
// import App from "../App";

// export const Header = () => {
//   const [click, setClick] = useState(false);
//   const [dropdown, setDropdown] = useState(false);

//   const handleClick = () => setClick(!click);
//   const closeMobileMenu = () => setClick(false);

//   const onMouseEnter = () => {
//     if (window.innerWidth < 960) {
//       setDropdown(false);
//     } else {
//       setDropdown(true);
//     }
//   };

//   const onMouseLeave = () => {
//     if (window.innerWidth < 960) {
//       setDropdown(false);
//     } else {
//       setDropdown(false);
//     }
//   };

//   const user = JSON.parse(localStorage.getItem("user"));
//   console.log(user);

//   const Logout = (event) => {
//     event.preventDefault();
//     localStorage.clear();
//     signOut(auth)
//       .then(() => {
//         console.log("logged out");
//         window.location.pathname = "Login";
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   return (
//     <div>
//       <div className="mobile-sticky-header-overlay"></div>
//       <header id="pageTop" className="header">
//         <nav className="navbar navbar-expand-md main-nav bg-dark-navy">
//           <div className="container">
//             <button className="navbar-toggler navbar-toggler-right">
//               <span className="burger-menu icon-toggle">
//                 <i className="fa fa-bars"></i>
//               </span>
//             </button>
//             <a className="navbar-brand" href="index.html">
//               <img src="assets/img/logoDA.png" alt="365degsol" />
//             </a>
//             <div className="navbar-collapse">
//               <ul className="navbar-nav ml-auto">
//                 <li className="nav-item active">
//                   <Link to="/" className="nav-link">
//                     <span className="sr-only">(current)</span>Home
//                   </Link>
//                 </li>

//                 <li className="nav-item dropdown drop_single">
//                   <Link to="/Portfolio" className="nav-link">
//                     Portfolio
//                   </Link>
//                 </li>

//                 <li className="nav-item dropdown drop_single">
//                   <Link to="/Aboutus" className="nav-link">
//                     About Us
//                   </Link>
//                 </li>

//                 <li className="nav-item">
//                   <Link to="/Contactus" className="nav-link">
//                     Contact Us
//                   </Link>
//                 </li>

//                 {localStorage.getItem("user") ? (
//                   <li className="nav-item" id="logoutli">
//                     <Link to="/Login" className="nav-link" onClick={Logout}>
//                       Logout
//                     </Link>
//                   </li>
//                 ) : (
//                   <li className="nav-item">
//                     <Link to="/Login" className="nav-link">
//                       Login
//                     </Link>
//                   </li>
//                 )}
//               </ul>
//             </div>
//           </div>
//         </nav>
//       </header>
//     </div>
//   );
// };
