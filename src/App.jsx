import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      

      <h2>Button Sizes</h2>

<p>Change the font size of a button with the font-size property:</p>



           
           
           
     <h1 className='heading1'>Md.Nurul islam Nahid</h1>
     <h2 style={{color:"red",fontSize:"10px",fontStyle:"oblique"}}>Md.Nurul islam Nahid</h2>
     <h3>Md.Nurul islam Nahid</h3>
     <h4  className='heading4'>Md.Nurul islam Nahid</h4>
     <h5>Md.Nurul islam Nahid</h5>
     <h6>Md.Nurul islam Nahid</h6>
     <p>Lorem ipsum dolor sit amet consectetur  adipisicing elit. <b> Nemo voluptas aperiam beatae!</b> Iure obcaecati qui nulla! Natus inventore libero corporis incidunt deleniti esse ut. Molestiae voluptatibus tempora ipsum magnam ipsa.
     
   
     <h1> HTML DIV Example</h1>
          <div className='div div1'>
            <h2> london</h2>
            <p className='paragraph paragraph1'>london is the capital city of england.</p>
            <p className='paragraph paragraph2'>london has over 13 million inhabitants.</p>
          </div>
          <p>the yellow background is added to demonstrate the footprint of the DIV element</p>
          <h1>card</h1>
         <div className='card'>
         <img src="https://res.cloudinary.com/dnhpk5q85/image/upload/v1716914477/social%20icons/lvvx1nqo7wwabm9t9wog.png" alt="avater"
          />
          <div className='container'>
            <h4><b>john Done</b></h4>
            <p>Architect & Engineer</p>

          </div>
                   
         </div>
        
         
        <h1 className='heading heading7'>Text-shadow effect</h1>


          <h1 className='heading heading1'>Using Letter-spacing</h1>
          <h2 className='heading heading2'>This is heading 1</h2>
          <h3 className='heading heading3'>This is heading 2</h3>
          <h4 className='heading heading4'>bangladesh is a small county</h4>
          <h5 className='heading heading5'>bangla is a capital city</h5>

         <h2 className='heading heading2'>Add a border to a table :</h2>

         <table>
          <tr>
            <th className='header header1'>firstname</th>
            <th className='header header1'>lastname</th>
          </tr>
          <tr className='table row'>
            <td>peter</td>
            <td>griffin</td>
          </tr>
          <tr>
            <td>lois</td>
            <td>griffin</td>
          </tr>
         </table>
       
      {/* html */}
      <h1>show Checkboxes</h1>
      <form action="/action page.php">
        <input type="checkbox"
        id='vehicle1' name='vehicle1'
        value="bike" />
        <label for="vehicle1"> I have a bike</label> <br />

        <input type="checkbox"
        id='vehicle2' name='vehicle2'
        value="bike" />
        <label for="vehicle2"> I have a Car</label> <br />

        <input type="checkbox"
        id='vehicle3' name='vehicle3'
        value="bike" />
        <label for="vehicle3"> I have a boat</label> <br /> <br />
        <input type="Submit" 
        value="submit" />



      </form>

       {/* html */}
       <h1>Show Checkboxes</h1>
        <form action="/action page.php">
        <input type="checkbox" id='vehicle1' name='vehicle1' value="bike" />
        <label for="vehicle1">I have a bike</label> <br />

        <input type="checkbox" id='vehicle2' name='vehicle2' value="Car" />
        <label for="vehicle2">I have a Car</label> <br />
        
        <input type="checkbox" id='vehicle3' name='vehicle3' value="boat" />
        <label for="vehicle3">I have a boat</label> <br /> <br />

        <input type="submit" value="Submit" />
        
        
        
        
        
        </form>




     </p>


    </>
  )
} 

export default App
