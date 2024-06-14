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

<button class="button button1">10px</button>
<button class="button button2">12px</button>
<button class="button button3">16px</button>
<button class="button button4">20px</button>
<button class="button button5">24px</button>


           <h1> button size</h1>

           <p> Change the font size of a button with the font-size property</p>
           <div>
           <button className="button button1">10px</button>
           <button className="button button2">10px</button>
           <button className="button button3">10px</button>
           <button className="button button4">10px</button>
           <button className="button button5">10px</button>

           </div>
           
           
     <h1 className='heading1'>Md.Nurul islam Nahid</h1>
     <h2 style={{color:"red",fontSize:"10px",fontStyle:"oblique"}}>Md.Nurul islam Nahid</h2>
     <h3>Md.Nurul islam Nahid</h3>
     <h4  className='heading4'>Md.Nurul islam Nahid</h4>
     <h5>Md.Nurul islam Nahid</h5>
     <h6>Md.Nurul islam Nahid</h6>
     <p>Lorem ipsum dolor sit amet consectetur  adipisicing elit. <b> Nemo voluptas aperiam beatae!</b> Iure obcaecati qui nulla! Natus inventore libero corporis incidunt deleniti esse ut. Molestiae voluptatibus tempora ipsum magnam ipsa.
     
   

<h2>Vertical Button Group</h2>

 <p className='btn-group'>
 <button className="button">Button</button>
  <button className="button">Button</button>
  <button className="button">Button</button>
  <button className="button">Button</button>
 </p>
  


<body>


</body>
 
     <ul>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>
<ol>
<li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ol>

           <strong className='strong'> bangladesh is a small county</strong> <br />
           <i>bangladesh is a small county </i> <br />
           <em> bangladesh is a small county </em> <br />
           <b>Bangladesh is a small city</b> <br />
           <small> bangladesh is a small county</small>  <br />
           <del> Bangladesh is a small county</del> <br />
           <ins> bangladesh is a small county</ins> <br />
           <sub> bangladesh is a small county</sub> <br />
           <sup> bangladesh is a small county</sup>
           

           <table>

            <tr>
              <th> Person 1</th>
              <th> Person 2</th>
              <th> Person 3</th>
            </tr>
            <tr>
              <td> Emil</td>
              <td>Tobias</td>
              <td>Linus</td>
            </tr>
            <tr>
              <td> 30</td>
              <td>40</td>
              <td>50</td>
            </tr>
           </table>
     </p>
    </>
  )
} 

export default App
