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


          
          



     <div className='marquee'>
     <marquee  behavior="scoller" direction="left and right">
    <h2>EUROPEAN UNIVERSITY OF BANGLADESH </h2>
   

    </marquee>
     </div>

      {/* new item */}



{/* new topic */}

  <div className='FEES'>

   <a href="#">ONLINE ADMISSION</a>
   <a href="#"> COURSE OF OFFER</a>
   <a href="#"> COURSES & TUTITION FEES</a>
   <a href="#"> STUDENT GUIDELINE FOR FRESHERS</a>
   <a href="#">1ST SEMESTER CLASS ROUTINE</a>
   <a href="#"> EXAM SCHEDULE</a>

    

  </div>
  <div className='icons'>
      <a href="#"><i class="fa-brands fa-facebook"></i></a>
      <a href="#"><i class="fa-brands fa-youtube"></i></a>

     </div>
   
{/* new topic */}




       {/* new work */}

       <div className='varsity'>
       <img src="public/img/varsity.jpg" alt="" />
       </div>


        {/* new work */}

         <div className='Book'>

           <div className='book_con'>
           <a href="#"><i class="fa-solid fa-people-roof"></i></a>
           <h3>Alumni</h3>
           </div>

           <div className='book_con'>
           <a href="#"><i class="fa-solid fa-handshake"></i></a>
           <h3>Students Affairs</h3>
           </div>

           <div className='book_con'>
           <a href="#"><i class="fa-solid fa-house"></i></a>
           <h3>Organogram</h3>
           </div>

           <div className='book_con'>
           <a href="#"><i class="fa-solid fa-book-open"></i></a>
           <h3>Library</h3>
           </div>

           <div className='book_con'>
           <a href="#"><i class="fa-solid fa-camera-retro"></i></a>  
           <h3>Gallery</h3>
           </div>








         </div>




         {/* new topic */}


        



   


          {/* new topic */}
      




    </div>
   
      
      

    </>
  )
} 

export default Header