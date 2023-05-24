import React from 'react'
import { Route, Routes } from "react-router-dom";
import Navbar from './Navbar'
import Hotels from './Hotels'
import Wellocome from './Wellocome'
import Signup from './Signup';
import Login from './Login';
import Mainnav from './Mainnav';
import Footer from './Footer';
import Hotelinfo from './Hotelinfo';
import Edit from './Edit';
import Hoteldetail from './Hoteldetail';
import Facilities from './Facilities';
import Addmenu from './Addmenu'
import Staffinfo from './Staffinfo'
import Hotelservice from './Hotelservice'
import Facilitiesedit from './Facilitiesedit';
import Hotelserviceedit from './Hotelserviceedit';
import ToggleColorMode from './Togglecolor';
import Hotelimageedit from './Hotelimageedit';
import CLintroHotel from './CLintroHotel';
import CLhotelser from './CLhotelser';
import CLhotelmenu from './CLhotelmenu'
import CLhotelcon from './CLhotelcon'
import Staffinfoedit from './Staffinfoedit';
import {Helmet} from 'react-helmet'


const App = () => {
  return (
    <>
    <Helmet>
      <title>Hotel Management</title>
      <meta name="description" content="This is hotel management web Application." />
      <meta name="keywords" content="hotel, hotel management, bookmyhotel, book room" />
    </Helmet>

      <Routes>
        <Route exact path="/" element={
          <>
            <Mainnav />
            <Navbar />
            <Footer />
          </>
        }></Route>
      </Routes>

      <Routes>
        <Route path="/wellcome" element={<Wellocome />}></Route>
      </Routes>

      <Routes>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>

      <Routes>
        <Route path="/login" element={<Login />}></Route>
      </Routes>

      <Routes>
        <Route  path="/hotel" element={
          <>
            <Mainnav />
            <Hotels />
            <Footer />
          </>
        }></Route>
      </Routes>

      <Routes>
        <Route  path="/hotelinfo/:id" element={
          <>
             <Hotelinfo/>
          </>
        }></Route>
      </Routes>

      <Routes>
        <Route path="/edit/:id" element={<Edit />}></Route>
      </Routes>

      <Routes>
        <Route  path="/hoteldetail/:id" element={
          <>
            <Mainnav />
            <Hoteldetail/>
            <Footer />
          </>
        }></Route>
      </Routes>


    

      <Routes>
        <Route  path="/facilities/:id" element={<Facilities />}></Route>
      </Routes>

      <Routes>
        <Route path="/facilitiesedit/:id" element={<Facilitiesedit />}></Route>
      </Routes>


      <Routes>
        <Route  path="/addmenu/:id" element={<Addmenu />}></Route>
      </Routes>

      <Routes>
        <Route  path="/staffinformation/:id" element={<Staffinfo />}></Route>
      </Routes>

      <Routes>
        <Route  path="/services/:id" element={<Hotelservice />}></Route>
      </Routes>

      <Routes>
        <Route  path="/servicesedit/:id" element={<Hotelserviceedit />}></Route>
      </Routes>

      <Routes>
        <Route  path="/staffinfoedit/:id" element={<Staffinfoedit />}></Route>
      </Routes>

      <Routes>
        <Route  path="/introduction/:id" element={
          <>
            <Mainnav />
            <CLintroHotel/>
            <Footer />
          </>
        }></Route>
      </Routes>


      <Routes>
        <Route  path="/hotelservices/:id" element={
          <>
            <Mainnav />
            <CLhotelser/>
            <Footer />
          </>
        }></Route>
      </Routes>


      <Routes>
        <Route  path="/hotelmenu/:id" element={
          <>
            <Mainnav />
            <CLhotelmenu/>
            <Footer />
          </>
        }></Route>
      </Routes>


      <Routes>
        <Route  path="/hotelcontact/:id" element={
          <>
            <Mainnav />
            <CLhotelcon/>
            <Footer />
           
          </>
        }></Route>
      </Routes>














     
      

      <Routes>
        <Route  path="/img/:id" element={
          <>
             <Hotelimageedit/>
          </>
        }></Route>
      </Routes>


    </>
  )
}

export default App