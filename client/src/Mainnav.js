import React from 'react'
import { NavLink } from 'react-router-dom'

const Mainnav = () => {
  return (
   <>

        
  <header id="header" class="fixed-top d-flex align-items-center header-transparent">
    <div class="container-fluid container-xl d-flex align-items-center justify-content-between">

      <div class="logo me-auto">
        <h1><a href="index.html">Delicious</a></h1>
     </div>

      <nav id="navbar" class="navbar order-last order-lg-0">
        <ul>
          <li><a class="nav-link scrollto active" href="#hero">Home</a></li>
          <li> <NavLink to={'/hotel'} ><span class="nav-link scrollto">Hotels</span> </NavLink></li>
          <li><a class="nav-link scrollto" href="#specials">Specials Hotels</a></li>
          <li><a class="nav-link scrollto" href="#events">Hotel Events</a></li>
          <li><a class="nav-link scrollto" href="#chefs">Owner</a></li>
          <li><a class="nav-link scrollto" href="#gallery">Gallery</a></li>
         <li><a class="nav-link scrollto" href="#contact">Contact</a></li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav>

      

      <NavLink to={'/wellcome'} ><span class="book-a-table-btn scrollto"> Publish Hotel </span></NavLink>
      
      
    </div>
  </header>

  


   </>
  )
}

export default Mainnav