
const Cartpage = () => {
    let vitearray = JSON.parse(localStorage.getItem('vitecart')) || []


  function increase(ele){
    ele.quantity++
    console.log(ele.quantity);
    updatecart(vitearray)    
  } 

  let qbtn = document.querySelector('.q-btn')
  function decrease(ele){
    
    console.log(ele.quantity);
    if(ele.quantity >1){
      ele.quantity--      
    }    
    updatecart(vitearray)    
  } 

  function updatecart(ele){
    localStorage.setItem('vitecart', JSON.stringify(ele))
    window.location.reload()
  }
 
  function ProductOverview(item) {
    localStorage.setItem('Shopitems', JSON.stringify(item));
    window.location.href = "./Productpage";
  }
  
  return (
    <>    
    <p className='text-center text-3xl pt-10 '>Cart Items</p>
    <section className="main lg:px-80 md:px-10 sm:px-2mx-20"  > 
 
    { vitearray.map((ele, index)=>{  
      
      if(!ele.quantity){
        ele.quantity = 1
        console.log(ele);
      }
    return(
      
    
      <div className=' flex justify-between  place-items-center item-div col-auto p-2 shadow-0 px-28' key={index}>
      <div className='overflow-hidden'>
      <img src={ele.image} alt="hello"  onClick={() => ProductOverview(ele)}  className='w-full group-hover:scale-110  duration-1000 border' 
      style={{width: "120px"}}/>
      </div>
      <div className="name-price  m-2">
      <h1 className=' group-hover:text-red-950 font-bold mt-2 	   '  >{ele.brand}</h1>
      <h2 className=' group-hover:text-red-950 font-bold mt-2 	   '  >Price &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Rs. {ele.price*ele.quantity}</h2>

      </div>     
      <div className="btn-div flex gap-2   [&>*]:text-gray [&>*]:w-12  [&>*]:border [&>*]:h-11  [&>*]:text-2xl" >
      <button className='' onClick={() => decrease(ele,index)} >-</button>
      <button className='q-btn'  >{ele.quantity}</button>
      <button className='' onClick={() => increase(ele)}  >+</button>
      </div>
    </div>
    
    )
    })}
      </section>
      </>
  )
}
export default Cartpage

