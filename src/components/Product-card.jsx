import reactLogo from "../assets/react.svg";
function ProductCard() {
   return <>

      {/* new project */}

      <div className="main-card">
      {/* <i class="fa-duotone fa-caret-down"></i> */}

           <div className="navbar">
            <a href="#">HOME</a>
            <div className="subnav">
             <button className="subnavbtn">About <i class="fa-duotone fa-caret-down"></i></button>
             <div className="subnav-content">
               <a href="#">Company</a>
               <a href="#">Team</a>
               <a href="#">Careers</a>

             </div>
            </div>

               <div className="subnav">
                  <button className="subnavbtn">Services <i class="fa-duotone fa-caret-down"></i> </button>
                <div className="subnav-content">
                  <a href="#">Bring</a>
                  <a href="#">Deliver</a>
                  <a href="#">Package</a>
                  <a href="#">Express</a>
                  </div>    
               </div>
                 
                 <div className="subnav">
                  <button className="subnavbtn">Partners <i class="fa-duotone fa-caret-down"></i></button>
                     <div className="subnav-content">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                        <a href="#">Link 4</a>

                     </div>
                 </div>

               <a href="#">Contact</a>

            </div>  
            <div className="text">
             <h3>Subnav / dropdown menu inside a 
               Navigation Bar
             </h3>
             <p>hover over the About
               servics or partners link to see the navigation menu
             </p>
            </div>

      </div>




   </>

}
export default ProductCard

// function ProductCard(){
//     return <></>

// }
// export default ProductCard






