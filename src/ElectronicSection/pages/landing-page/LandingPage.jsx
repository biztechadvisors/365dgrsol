import React from "react";
import { useGetAllProductsQuery } from "../../../store/servicesGadgets";
import CategorySlider from "../../components/categorySlider/CategorySlider";
import ProdSlider from "../../components/slider/ProdSlider";
import PauseOnHover from "../../components/slider";
import "./LandingPage.css";

/**
 * The landing page of the website, displaying different categories and products.
 */
function LandingPage() {
  const { data, isFetching, error } = useGetAllProductsQuery();

  console.log(data);
  if (isFetching) return <div>Loading...</div>;
  if (error) return <div>An error occurred: {error.message}</div>; // display a user-friendly error message
  if (!data) return <div>Loading...</div>;

  return (
    <div className="Landing__page">
      <div className="landing-page-hero">
        <PauseOnHover /> {/* make sure to import PauseOnHover properly */}
        <CategorySlider />
      </div>
      <div className="landing-page-categories">
        {[
          "phone",
          "Electronics",
          "Sports",
          "Fashion",
          "Beauty and Cosmetics",
          "Televisions",
          "AirConditioners",
          "Refrigerators",
          "KitchenAppliances",
          "WashingMachines",
          "Grooming",
          "Audio",
          "SmartWatches",
        ].map((category) => (
          <div className="landing-page-category" id={category} key={category} style={{marginBottom: "2rem"}}>
            <h1 className="landing-page-heading" style={{fontSize: "2rem", fontWeight: "bold"}}>{category}</h1>
            <ProdSlider
              data={data.filter((item) => item.categories === category)} // fix spelling of "categories"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default LandingPage;
