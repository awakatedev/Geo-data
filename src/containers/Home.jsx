import "../assets/styles/components/Home.scss";
import { useState, useEffect } from "react";
// import ip from "../routes/api.js";

const Home = () => {
  // const [error, setError] = useState(null);
  // const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  // const IP = async () => {
  //   try {
  //     const response = await fetch(`https://api64.ipify.org?format=json`);
  //     const ip = await response.json();
  //     console.log(ip);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };
  // useEffect(() => {
  //   IP();
  // }, []);
  useEffect(() => {
    fetch("https://api64.ipify.org?format=json")
      .then((res) => res.json())
      .then(
        (result) => {
          // setIsLoaded(true);
          setItems(result);
          console.log(result);
        }
        // (error) => {
        //   setIsLoaded(true);
        //   setError(error);
        // }
      );
  }, []);
  return (
    <div>
      <section className="hero">
        <h1>h</h1>
        {items.ip}
      </section>
    </div>
  );
};
export default Home;
