import './header.css'

function Header() {

  return (
    <>
      
    <div className='Mobail_screen'>


         <div header>
          <p>Admission Office: 01992887317,01968774933, 01968774931,01867346283(Director),01867328936</p>

           <div className='header_content'>
            <a href="#">Jobs at EUB</a>
            <a href="#"> IQAC</a>
            <a href="#">i-EMS</a>
           </div>

         </div>

         <div className='header_2'>

         <div className='logo_bere'>
         <img src="public/img/Eub.png" alt="" />

        
         </div>

         <div className='uni'>

         
         <div className='text_2'>
         <a href="#">Emergency Contact</a>
         </div>
          <div className='text_2'>
          <a href="#">Degree Verification</a>
          </div>
         <div className='text_2'>
         <a href="#">Student Portal</a>
         </div>
          <div className='text_2'>
          <a href="#">Apply for Certificate</a>
          </div>
         </div>
         </div>


     {/* new item */}
          
          

          <div className='Dropdown'>

           <div className='bers'>
           <label className='dropbtn' htmlFor="dropdown-toggle"> <i class="fa-solid fa-bars"></i></label>
           </div>
           <input type="checkbox" id='dropdown-toggle' />
           <div className='dropdown_content'>

            <a href="#">Home</a>
            <a href="#">About Us</a>
            <a href="#">Academics</a>
            <a href="#">Admission</a>
            <a href="#">Faculties</a>
            <a href="#">Administration</a>
            <a href="#">Student Corner</a>
            <a href="#">Contact Us</a>
            <a href="#">Research & Journals</a>
           
           </div>



        






          </div>


          
          





         






      {/* new item */}


















    </div>
   
      
      

    </>
  )
} 

export default Header