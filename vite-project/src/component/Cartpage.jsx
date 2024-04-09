import React from 'react'
import { array } from './Objectdata';


 const Cartpage = () => {
    let vitearray = JSON.parse(localStorage.getItem('vitecart'))|| [] 
    const remove = (index)=>{
        vitearray.splice(index,1)
        localStorage.setItem('vitecart', JSON.stringify(vitearray));
    }
   
    function ProductOverview(item) {
      localStorage.setItem('Shopitems', JSON.stringify(item));
      window.location.href = "./Productpage";
    }

  return (

    <>    
    <p className='text-center text-3xl pt-10 '>Cart Items</p>
    <section className="main grid lg:grid-cols-4 md:grid-cols-2 gap-10 lg:px-40 md:px-10 sm:px-2mx-20"  > 
    { vitearray.map((ele, index)=>{  
    return(
      <div className=' group item-div col-auto p-5 shadow-l  ' key={index}>
        <div className='overflow-hidden'>
      <img src={ele.image} alt="hello"  onClick={() => ProductOverview(ele)}  className='w-full group-hover:scale-110  duration-1000' />
      </div>
      <div className="name-price flex justify-between m-2">
      <h1 className=' group-hover:text-red-950 font-bold mt-2 	   '  >{ele.brand}</h1>
      <h2 className=' group-hover:text-red-950 font-bold mt-2 	   '  >$ {ele.price}</h2>

      </div>
      <div className="btn-div  [&>*]:bg-slate-700  [&>*]:text-white  flex justify-between gap-6">
      <button className='group   font-bold py-2 px-4 mt-2 rounded-lg hover:bg-slate-900 hover:shadow w-1/2' onClick={() => remove(index)} >Delete</button>
      {/* <button className=' group  font-bold py-2 px-4  mt-2 rounded-lg hover:bg-slate-900 hover:shadow w-1/2' onClick={addToCart(array)}>Buy Now</button> */}
      <button className='group font-bold py-2 px-4 mt-2 rounded-lg hover:bg-slate-900 hover:shadow w-1/2'  >Buy Now</button>
      </div>
    </div>
    )
    })}
      </section>
      </>
  )
}
export default Cartpage

