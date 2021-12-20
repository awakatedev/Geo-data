import "../assets/styles/components/Home.scss";
import { useState, useEffect } from "react";
//import ip from "../routes/api.js";

const Home = () => {
  const IP = async () => {
    try {
      const response = await fetch(`https://api64.ipify.org?format=json`);
      const ip = await response.json();
      console.log(ip);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    IP();
  }, []);
  /* useEffect(() => {
    fetch("https://api64.ipify.org?format=json")
    .then(response => response.json())
    .then(data => console.log(data))
  },[]);*/
  return (
    <div>
      <section className="hero">
        <h1>h</h1>
      </section>
    </div>
  );
};
export default Home;
