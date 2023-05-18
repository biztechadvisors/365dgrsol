import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

// Main Component---------------------------
import Login from "./auth/Login.js";
import Activities from "./components/Activities.js";
import WeddingFrom from "./components/WeddingFrom.js";
import ProductionForm from "./components/ProductionForm.js";
import DigitalMark from "./components/DigitalMark.js";
import DesignerJewelry from "./components/DesignerJewelry.js";

import Home from "./devpages/Home.js";
import { Portfolio } from "./devpages/Portfolio.js";
import { Aboutus } from "./devpages/Aboutus.js";
import Contactus from "./devpages/Contactus.js";
import Navbar from "./devpages/Navbar.js";
import Footer from "./devpages/Footer.js";

import store from "./store/store.js";

// interior-improt-------------------------------

import Kitchen from "./interiorDesign/components/interiorTypes/Kitchen";
import InteriorDesign from "./interiorDesign/components/InteriorDesign";
import KidsBedroom from "./interiorDesign/components/interiorTypes/KidsBedroom";
import FalseCeiling from "./interiorDesign/components/interiorTypes/FalseCeiling";
import Bathroom from "./interiorDesign/components/interiorTypes/Bathroom";
import TVUnits from "./interiorDesign/components/interiorTypes/TVUnits";
import FoyerDesigns from "./interiorDesign/components/interiorTypes/FoyerDesigns";
import DiningRoom from "./interiorDesign/components/interiorTypes/DiningRoom";
import GuestBedroom from "./interiorDesign/components/interiorTypes/GuestBedroom";
import HomeOffice from "./interiorDesign/components/interiorTypes/HomeOffice";
import Livingroom from "./interiorDesign/components/interiorTypes/Livingroom";
import MasterBedroom from "./interiorDesign/components/interiorTypes/MasterBedroom";
import PoojaRoom from "./interiorDesign/components/interiorTypes/PoojaRoom";
import WallPaintDesigns from "./interiorDesign/components/interiorTypes/WallPaintDesigns";
import Wardrobe from "./interiorDesign/components/interiorTypes/Wardrobe";
import Balcony from "./interiorDesign/components/interiorTypes/Balcony";
import TileDesigns from "./interiorDesign/components/interiorTypes/TileDesigns";
import WallpaperDesigns from "./interiorDesign/components/interiorTypes/WallpaperDesigns";
import WallDecorIdeas from "./interiorDesign/components/interiorTypes/WallDecorIdeas";
import FlooringDesigns from "./interiorDesign/components/interiorTypes/FlooringDesigns";
import WindowDesigns from "./interiorDesign/components/interiorTypes/WindowDesigns";

// Electronics-import-------------------------------
// import ProductList from "./eCart/components/ProductList.js";
// import Products from "./eCart/components/Products.js";
// import Product from "./eCart/components/Product.js";
// import Cart from "./eCart/pages/Cart.js";

// Dashboard----------------------------------------------
import EventInquiry from "./AdminDashboard/inqueryCom/EventInquiry.js";

import Admin from "./auth/Admin.js";
import CustomiseJewelDesign from "./AdminDashboard/activity/CustomiseJewelDesign.js";
import DigitalMarketing from "./AdminDashboard/activity/DigitalMarketing.js";
import InteriorDesigning from "./AdminDashboard/activity/InteriorDesigning.js";
import ProductionHouse from "./AdminDashboard/activity/ProductionHouse.js";
import TechElectronics from "./AdminDashboard/activity/TechElectronics.js";
import AdminDashboad from "./AdminDashboard/AdminDashboad.js";
import EventOrganiser from "./AdminDashboard/activity/EventOrganiser.js";

// import HomeProducts from "./eCart/components/HeaderBar.js";
// import ImgSlider from "./eCart/components/eshopRecent/ImgSlider.js";

import EappShop from "./ElectronicSection/EappShop.js";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Navbar />
          <Switch>
            {/* Navbar start */}
            <Route path="/" exact component={Home} />
            <Route path="/Portfolio" exact component={Portfolio} />
            <Route path="/Aboutus" exact component={Aboutus} />
            <Route path="/Contactus" exact component={Contactus} />
            <Route path="/Login" exact component={Login} />

            {/* Navbar */}

            <Route path="/Activities" exact component={Activities} />
            <Route
              path="/WeddingFrom/:activities"
              exact
              component={WeddingFrom}
            />

            <Route path="/ProductionForm" exact component={ProductionForm} />
            <Route path="/DigitalMark" exact component={DigitalMark} />
            <Route path="/DesignerJewelry" exact component={DesignerJewelry} />

            {/* Interior design Routing */}
            <Route exact path="/InteriorDesign" component={InteriorDesign} />
            <Route exact path="/Kitchen" component={Kitchen} />
            <Route exact path="/Livingroom" component={Livingroom} />
            <Route exact path="/MasterBedroom" component={MasterBedroom} />
            <Route exact path="/TVUnits" component={TVUnits} />
            <Route exact path="/FalseCeiling" component={FalseCeiling} />
            <Route exact path="/Wardrobe" component={Wardrobe} />
            <Route exact path="/KidsBedroom" component={KidsBedroom} />
            <Route exact path="/PoojaRoom" component={PoojaRoom} />
            <Route exact path="/Bathroom" component={Bathroom} />
            <Route exact path="/DiningRoom" component={DiningRoom} />
            <Route exact path="/FoyerDesigns" component={FoyerDesigns} />
            <Route exact path="/GuestBedroom" component={GuestBedroom} />
            <Route exact path="/HomeOffice" component={HomeOffice} />
            <Route exact path="/Balcony" component={Balcony} />
            <Route exact path="/TileDesigns" component={TileDesigns} />
            <Route
              exact
              path="/WallpaperDesigns"
              component={WallpaperDesigns}
            />
            <Route
              exact
              path="/WallPaintDesigns"
              component={WallPaintDesigns}
            />
            <Route exact path="/WallDecorIdeas" component={WallDecorIdeas} />
            <Route exact path="/FlooringDesigns" component={FlooringDesigns} />
            <Route exact path="/WindowDesigns" component={WindowDesigns} />

            {/* Electronics section */}

            <Route path="/EappShop" exact component={EappShop} />

            {/* Dashboard */}
            <Route path="/Admin" exact component={Admin} />
            <Route path="/AdminDashboad" exact component={AdminDashboad} />
            <Route
              path="/CustomiseJewelDesign"
              exact
              component={CustomiseJewelDesign}
            />
            <Route
              path="/DigitalMarketing"
              exact
              component={DigitalMarketing}
            />
            <Route path="/EventOrganiser" exact component={EventOrganiser} />
            <Route
              path="/InteriorDesigning"
              exact
              component={InteriorDesigning}
            />
            <Route path="/ProductionHouse" exact component={ProductionHouse} />
            <Route path="/TechElectronics" exact component={TechElectronics} />

            {/* Dashboard Inquery */}
            <Route path="/EventInquiry" exact component={EventInquiry} />
          </Switch>
        </Router>
        <Footer />
      </Provider>
    </div>
  );
}

export default App;
