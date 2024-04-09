import React from "react";





const Productpage = () => {
  let cartarray = JSON.parse(localStorage.getItem("Shopitems")) || [];
  let cart = [];
  cart.push(cartarray);
  console.log(cartarray);


  return (
    <>
      <section className="main grid lg:grid-cols-2 md:grid-cols-2 gap-10 lg:px-40 md:px-10 sm:px-2  mx-10 h-screen ">
        {cart.map((ele, index) => {
          return (
            <div className=" group item-div col-auto p-5  " key={index}>
              <div className="overflow-hidden  flex justify-center align-middle" title="hello">
                <img
                  src={ele.image}
                  alt=""
                  className=" group-hover:scale-110  duration-1000"
                />
              </div>      
            </div>
          );
        })}

        {cart.map((ele, index) => {
          return (
            <div className=" group item-div col-auto p-5 flex flex-col justify-between  " key={index}>
            
            <div key={index} className="product-info my-auto  p-20  ">
              <div className="info f flex flex-col gap-10  " >
              <div className="item-ifo flex ">
                <div className="t-name">Brand -</div>
                <div className="desc">{ele.brand} </div>
              </div>
              <div className="item-ifo flex">
                <div className="t-name">Desc. -</div>
                <div className="desc">{ele.product}</div>
              </div>
              <div className="item-ifo flex">
                <div className="t-name">Category -</div>
                <div className="desc">{ele.gender}</div>
              </div>
              <div className="item-ifo flex">
                <div className="t-name"> Price -</div>
                <div className="desc"> Rs. {ele.strikedOffPrice}</div>
              </div>

              </div>
            </div>
              <div className="btns-div flex justify-between mt-10 gap-8">
                <button title="Add to cart"  >Add to Cart</button>
                <button>Buy Now</button>
              </div>
            </div>

          );
        })}
      </section>
    </>
  );
};

export default Productpage;
