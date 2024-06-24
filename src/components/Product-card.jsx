import reactLogo from "../assets/react.svg";
function ProductCard(){
    return <>
    
    {/* new project */}
    <h2>Card Flip with Text</h2>
    <h3>Hover over the image below:</h3>
    <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front">
                <img src="public/img/Rakib.jpg" alt="" />

            </div>
            <div className="flip-card-back">
                <h1>John Doe</h1>
                <p>Architect & Engineer</p>
                <p>We love that guy</p>

            </div>

        </div>

    </div>
   
    
    
    
    Rakib</>

}
export default ProductCard

// function ProductCard(){
//     return <></>

// }
// export default ProductCard






