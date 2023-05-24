import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import WavesIcon from '@mui/icons-material/Waves';
import RoomServiceIcon from '@mui/icons-material/RoomService';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import { Helmet } from 'react-helmet';

const Hoteldetail = () =>
{



  const { id } = useParams("");
  const [getuserdata, setuserdata] = useState([]);


  const Perperson = async () => {



    const res = await fetch(`/getuser/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    })

    const data = await res.json();
    if (!data) {
      window.alert('error in get data')
    }
    else {
      setuserdata(data)
      console.log(data);
    }

  }

  useEffect(() => {
    Perperson();
  }, [])



  return (
    <>
    <Helmet>
      <title>{getuserdata.hname}</title>
      <meta name="keywords" content="hotels" />
      <meta name="description" content="awesome" />
    </Helmet>

  <header class=" introofhotel" style={{height:'100vh'}}>
        <div className='introhotelimg'>
           
          <img src={require('./assets/img/slide/ho1.jpg')} alt="" />
        </div>
        <div className="introhoteldic" >

          <h1 class="tm-mt-0 tm-mb-15 text-center introheading"><span style={{ color: 'black', fontSize: '5rem' }}>{getuserdata.hname}</span> <span style={{color:'white'}}>Hotel</span></h1>
          <em className='introshort' style={{color:'black'}}>Hotel and Restaurants</em>
        </div>
      </header>
  <section style={{background:'linear-gradient(to bottom left, #fde7ea -7%, #fdefda 100%)'}}>

      <h1 className='heding_of_hoteldetail'>Our Hotel</h1>
      <div className="maindetail">


      <div className="mainconta">

        <h1 class="maincontaheadi"><span class="tm-color-primary">Why Choose Our Hotel</span> </h1>
        <em class="tm-tagline tm-color-light-gray">Hotel and Restaurants</em>

        <p className='maincontacont'>
            {getuserdata.whychoose} Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, molestiae obcaecati! Officia facere porro quia, quisquam ullam, rem hic excepturi ipsum impedit obcaecati illum? Quia hic quod cupiditate sit suscipit.
        </p>
      </div>
        { !getuserdata.himage  ?
          <div className='mainimag'>
          <img src={require('./assets/img/slide/slide-3.jpg')} alt="" />
            </div> 
            :
            <div className='mainimag'>

            <img className='mainimag1' src={require(`../src/uploads/${getuserdata.himage}`)} alt="" />
            </div>
            
            }
      </div>
      

      <div id="tm-video-container">
       
        <i id="tm-video-control-button" class="fas fa-pause"></i>
      </div>
      <div class="tm-container">
        <nav class="tm-main-nav">
          <ul id="inline-popups">
            <li class="tm-nav-item">
            
              <NavLink to={`/introduction/${getuserdata._id}`}>
              <a class="tm-nav-link">
                
                Introduction
                <i> <WavesIcon style={{fontSize:'80px'}}/></i>
              </a>
              </NavLink>
            </li>
            <li class="tm-nav-item">
            <NavLink to={`/hotelservices/${getuserdata._id}`}>

              <a class="tm-nav-link" id="tm-gallery-link">
                Services
                <i> <RoomServiceIcon style={{fontSize:'80px'}} /></i>
              </a>
            </NavLink>
            </li>
           
            <li class="tm-nav-item">
            <NavLink to={`/hotelmenu/${getuserdata._id}`}>

              <a class="tm-nav-link">
                Hotel Menu
                <i> <MenuBookIcon style={{fontSize:'80px'}} /></i>
              </a>
            </NavLink>
            </li>
            <li class="tm-nav-item">
            <NavLink to={`/hotelcontact/${getuserdata._id}`}>

              <a class="tm-nav-link">
                Contact
                <i> <ConnectWithoutContactIcon style={{fontSize:'80px'}} /></i>
              </a>
            </NavLink>
            </li>
          </ul>
        </nav>
      </div>


  </section>

      </>
      )
}

      export default Hoteldetail