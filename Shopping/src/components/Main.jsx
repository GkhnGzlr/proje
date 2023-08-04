import { useEffect } from "react";
const Main = () => {
  const URL = "https://fakestoreapi.com/products";
  const productGet = async () => {
    try {
      const data = await fetch(URL);
      console.log(data);
      const data1 = await data.json();
      console.log(data1);
    } catch (error) {}
  };
  useEffect(() => {
    productGet();
  }, []);
  console.log();
  return <div>Main</div>;
};
export default Main;