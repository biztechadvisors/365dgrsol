import { Axios } from "axios";
import { useEffect, useState } from "react";
 function useProduct() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:5005/api/item")
      .then((response) => {
        setProduct(response.data);
        // console.log(response.data)
      })
      .catch(function (error) {
        setProduct(error.message + " Please try again later");
        console.log(
          "There has been a problem with your fetch operation: " + error.message
        );
      });
  }, []);
  return { product };
}
export default useProduct;
