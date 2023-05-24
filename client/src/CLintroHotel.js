import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import WavesIcon from '@mui/icons-material/Waves';
import RoomServiceIcon from '@mui/icons-material/RoomService';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';

const CLintroHotel = () => {


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

           

                <header class=" introofhotel"  style={{height:"100vh"}}>
                <div className='introhotelimg'  style={{width:"100%"}}>
                    
                    <img  src={require('./assets/img/slide/slide-2.jpg')}  style={{height:"100vh",width:"100%"}} alt="" />
                </div>
                   <div className="introhoteldic">

                       <h1 class="tm-mt-0 tm-mb-15 text-center introheading"><span style={{color:'rgb(25, 108, 225)',fontSize: '5rem'}}>{getuserdata.hname}</span> <span>Hotel</span></h1>
                    <em className='introshort'>Hotel and Restaurants</em>
                   </div>
                </header>
            <section className='introsec'>

            <div className="partofsecintro">
            <div className="row">
                    <div className="col-lg-12 introlowheading">
                        <h1> &bull; Hotel {getuserdata.hname} information </h1>
                    </div>
                   
                </div>
                <div className="row">
                    <div className="col-lg-6 col-sm-12 ml-4">
                        <h1 className='introlowerheading'> Why Choose Our Hotel </h1>
                        <p className='introlowercon'>{getuserdata.whychoose} </p>
                    </div>
                    <div className="col-lg-5 col-sm-12 ml-4 ">
                        <h1 className='introlowerheading'>Address</h1>
                        <p className='introlowercon'>{getuserdata.hoteladdress} </p>
                        </div>
                </div>
            </div>
               

            <div id="tm-video-container">
       
       <i id="tm-video-control-button" class="fas fa-pause"></i>
     </div>
     <div class="tm-container">
       <nav class="tm-main-nav">
         <ul id="inline-popups">
          
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

export default CLintroHotel