import React from "react";
import data from "../backend/Data";
import Cards from "../components/Cards";
import "./Home.css";

const Home = () => {
  return (
    <div className="container-fluid">
      <h3 className="text-center mt-3 text-uppercase">Shop Wandei</h3>
      <div className="container py-4">
        <div className="row">
          {data.products.map((item, index) => {
            return (
              <Cards
                key={index}
                img={item.img}
                title={item.title}
                desc={item.desc}
                price={item.price}
                item={item}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
