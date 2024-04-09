import React from 'react';
import { Link } from 'react-router-dom'; 
import { array } from './Objectdata';
import { BrowserRouter as Router } from "react-router-dom";
const Homes = () => {
  let vitearray = JSON.parse(localStorage.getItem('vitecart')) || [];

  function addToCart(item, index) {
    vitearray.unshift(item);
    localStorage.setItem('vitecart', JSON.stringify(vitearray));   
  }

  function ProductOverview(item) {
    localStorage.setItem('Shopitems', JSON.stringify(item));
    window.location.href = "./Productpage";
  }

  return (
    <div>
      <section className="main grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-10 lg:px-40 md:px-10 sm:px-2">
        {array.map((ele, index) => {
          return (
            <div className="group item-div col-auto p-5 shadow-l" key={index}>
              <div className="overflow-hidden">            
            
                <Link to="/productpage" onClick={() => ProductOverview(ele)}>
                  <img src={ele.image} alt="hello" className="w-full group-hover:scale-110 duration-1000" />
                </Link>
             
              </div>
              <div className="name-price flex justify-between m-2">
                <h1 className="group-hover:text-red-950 font-bold mt-2">{ele.brand}</h1>
                <h2 className="group-hover:text-red-950 font-bold mt-2">$ {ele.price}</h2>
              </div>
              <div className="btn-div [&>*]:bg-slate-700 [&>*]:text-white flex justify-between gap-6">
                <button className="group font-bold py-2 px-4 mt-2 rounded-lg hover:bg-slate-900 hover:shadow w-1/2">Buy Now</button>
                <button className="btn2 group font-bold py-2 px-4 mt-2 rounded-lg hover:bg-slate-900 hover:shadow w-1/2" onClick={() => addToCart(ele, index)}>Add to Cart</button>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Homes;
