import React from 'react'

const Sidebar = () => {

  const toggele= () => {

    var hamburger = document.querySelector(".hamburger");
    hamburger.addEventListener("click", function(){
      document.querySelector("body").classList.toggle("active");
    })
  }
  return (
    
    <>

      <div class="wrapper">
      <div class="section">
            <div class="top_navbar" onClick={toggele}>
                <div class="hamburger" >
                    <a href="#">
                        <i class="fa fa-bars"></i>
                    </a>
                </div>
            </div>

        </div>


        <div class="wrapper">
      <div class="section">
        <h1>contain</h1>
      </div>
      </div>










        <div class="sidebar">
          <div class="profile">
            <img src="./img/chefs/chefs-1.jpg" alt="profile_picture" />
            <h3>Anamika Roy</h3>
            <p>Designer</p>
          </div>

          <ul>
            <li>
              <a href="#" class="active">
                <span class="icon"><i class="fa fa-home"></i></span>
                <span class="item">Home</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span class="icon"><i class="fa fa-desktop"></i></span>
                <span class="item">Profile Complate</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span class="icon"><i class="fa fa-user"></i></span>
                <span class="item">People</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span class="icon"><i class="fa fa-tachometer-alt"></i></span>
                <span class="item">Perfomance</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span class="icon"><i class="fa fa-database"></i></span>
                <span class="item">Development</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span class="icon"><i class="fa fa-chart-line"></i></span>
                <span class="item">Reports</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span class="icon"><i class="fa fa-user-shield"></i></span>
                <span class="item">Admin</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span class="icon"><i class="fa fa-cog"></i></span>
                <span class="item">Settings</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

    

    </>
    
  )
}

export default Sidebar






//    <nav class="navbar navbar-expand-lg navbar-dark fixed-top bg-dark">  
//   <a class="navbar-brand" href="#"> JavaTpoint </a>  
//   <button  
//     class="navbar-toggler"  
//     type="button"  
//     data-toggle="collapse"  
//     data-target="#navbarCollapse"  
//     aria-controls="navbarCollapse"  
//     aria-expanded="false"  
//     aria-label="Toggle navigation">  
//     <span class="navbar-toggler-icon"> </span>  
//   </button>  
//   <div class="collapse navbar-collapse " id="navbarCollapse">  

//     <ul class="navbar-nav mr-auto sidenav pt-3" id="navAccordion">  
//     <h1 className='admin-greet mb-4'>Wellcome Admin</h1>
//       <li class="nav-item active">  
//         <a class="nav-link" href="#"> Home  </a>  
//       </li>  
//       <li class="nav-item">  
//         <a class="nav-link" href="#"> About </a>  
//       </li>  
//       <li class="nav-item">  
//         <a  
//           class="nav-link nav-link-collapse"  
//           href="#"  
//           id="hasSubItems"  
//           data-toggle="collapse"  
//           data-target="#collapseSubItems2"  
//           aria-controls="collapseSubItems2"  
//           aria-expanded="false"> Services </a>  
//         <ul class="nav-second-level collapse" id="collapseSubItems2" data-parent="#navAccordion">  
//           <li class="nav-item">  
//             <a class="nav-link" href="#">  
//               <span class="nav-link-text">Item 2.1</span>  
//             </a>  
//           </li>  
//           <li class="nav-item">  
//             <a class="nav-link" href="#">  
//               <span class="nav-link-text">Item 2.2</span>  
//             </a>  
//           </li>  
//         </ul>  
//       </li>  
//       <li class="nav-item">  
//         <a class="nav-link" href="#"> Gallery </a>  
//       </li>  
//       <li class="nav-item">  
//         <a  
//           class="nav-link nav-link-collapse"  
//           href="#"  
//           id="hasSubItems"  
//           data-toggle="collapse"  
//           data-target="#collapseSubItems4"  
//           aria-controls="collapseSubItems4"  
//           aria-expanded="false"> Contact us </a>  
//         <ul class="nav-second-level collapse" id="collapseSubItems4" data-parent="#navAccordion">  
//           <li class="nav-item">  
//             <a class="nav-link" href="#">  
//               <span class="nav-link-text">Item 4.1</span>  
//             </a>  
//           </li>  
//           <li class="nav-item">  
//             <a class="nav-link" href="#">  
//               <span class="nav-link-text">Item 4.2</span>  
//             </a>  
//           </li>  
//           <li class="nav-item">  
//             <a class="nav-link" href="#">  
//               <span class="nav-link-text">Item 4.2</span>  
//             </a>  
//           </li>  
//         </ul>  
//       </li>  
       
//     </ul>  
    
//   </div>  
//   <main>
  
  
// <div className='btnt mr-5' >

//  <button className='btn btn-primary ml-2 mr-2'> <span>Complate Profile</span></button>
//    <button className='btn btn-danger ml-2 mr-2' > <span>Delete Hotel</span> </button>
// </div>
//             <div className='top row mb-5'>
            
//             <div className='imglf col-lg-4 col-sm-12'>
//                 <img src="./assets/img/bg2.jpg" height='400px' width='400px' alt="" />
//             </div>
//             <div className='conri col-lg-6 col-sm-12'>
                
//                 <p> hotel name is  : : <span>\ </span> </p>
//                 <p> hotel owner name is  : : <span> \ </span> </p>
//                 <p> mobile number is  : : <span> \ </span> </p>
//                 <p> hotel addrss is  : : <span> \</span> </p>
//                 <p> email id is  : : <span>\  </span> </p>

//             </div>
//             </div>
  
  
//   </main>
// </nav>   




// <script>
// $(document).ready(function() {
//   $('.nav-link-collapse').on('click', function() {
//     $('.nav-link-collapse').not(this).removeClass('nav-link-show');
//     $(this).toggleClass('nav-link-show');
//   });
// });
// </script>  