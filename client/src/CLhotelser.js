import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import WavesIcon from '@mui/icons-material/Waves';
import RoomServiceIcon from '@mui/icons-material/RoomService';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import DangerousIcon from '@mui/icons-material/Dangerous';



const CLhotelser = () => {
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

                    <img src={require('./assets/img/slide/ser5.jpg')}  style={{height:"100vh",width:"100%"}} alt="" />
                </div>
                <div className="introhoteldic">

                    <h1 class="tm-mt-0 tm-mb-15 text-center introheading"><span style={{ color: 'rgb(25, 108, 225)', fontSize: '5rem' }}>{getuserdata.hname}</span> <span>Hotel</span></h1>
                    <em className='introshort' style={{ fontSize: '4rem', }}>Services</em>
                </div>
            </header>




            <section className='introsec'>

                <div className="partofsecintro" style={{width:'90%'}}>
                    <div className="row">
                        <div className="col-lg-12 introlowheading mb-5">
                            <h1> &bull; Hotel {getuserdata.hname} Services </h1>
                        </div>

                    </div>
                    <div className="row" >
                        <div className="col-lg-6 col-sm-12 ">
                            <h1 className='introlowerheading mb-5'> Service </h1>
                            <p className='introlowercon'>Are You Provide Car Rental Services ?  {getuserdata.carrent == 'Yes' ? <CheckCircleOutlineIcon className='ml-3' style={{ color: 'green', fontSize: '40px', }} /> : <DangerousIcon className='ml-3' style={{ color: 'red', fontSize: '40px', }} />}  </p>
                            <hr style={{borderColor:'black'}} />
                            <p className='introlowercon'> Are You Provide Catering Room  ?  {getuserdata.catering == 'Yes' ? <CheckCircleOutlineIcon className='ml-3' style={{ color: 'green', fontSize: '40px', }} /> : <DangerousIcon className='ml-3' style={{ color: 'red', fontSize: '40px', }} />} </p> <hr style={{borderColor:'black'}} />
                            <p className='introlowercon'> Are You Provide Courier Services ?  {getuserdata.courier == 'Yes' ? <CheckCircleOutlineIcon className='ml-3' style={{ color: 'green', fontSize: '40px', }} /> : <DangerousIcon className='ml-3' style={{ color: 'red', fontSize: '40px', }} />} </p> <hr style={{borderColor:'black'}} />
                            <p className='introlowercon'> Are You Provide Doctor On Call  ? {getuserdata.doctor == 'Yes' ? <CheckCircleOutlineIcon className='ml-3' style={{ color: 'green', fontSize: '40px', }} /> : <DangerousIcon className='ml-3' style={{ color: 'red', fontSize: '40px', }} />}  </p> <hr style={{borderColor:'black'}} />
                            <p className='introlowercon'> Are You Provide Ticket Services ? {getuserdata.ticket == 'Yes' ? <CheckCircleOutlineIcon className='ml-3' style={{ color: 'green', fontSize: '40px', }} /> : <DangerousIcon className='ml-3' style={{ color: 'red', fontSize: '40px', }} />}  </p> <hr style={{borderColor:'black'}} />
                            <p className='introlowercon'> Are You Provide Ironing Services ? {getuserdata.ironing == 'Yes' ? <CheckCircleOutlineIcon className='ml-3' style={{ color: 'green', fontSize: '40px', }} /> : <DangerousIcon className='ml-3' style={{ color: 'red', fontSize: '40px', }} />} </p> <hr style={{borderColor:'black'}} />
                            <p className='introlowercon'> Are You Provide Laundry Services ?  {getuserdata.laundry == 'Yes' ? <CheckCircleOutlineIcon className='ml-3' style={{ color: 'green', fontSize: '40px', }} /> : <DangerousIcon className='ml-3' style={{ color: 'red', fontSize: '40px', }} />} </p> <hr style={{borderColor:'black'}} />
                            <p className='introlowercon'> Are You Provide Massages Services ? {getuserdata.massages == 'Yes' ? <CheckCircleOutlineIcon className='ml-3' style={{ color: 'green', fontSize: '40px', }} /> : <DangerousIcon className='ml-3' style={{ color: 'red', fontSize: '40px', }} />} </p> <hr style={{borderColor:'black'}} />

                            <p className='introlowercon'> Are You Provide Room Services ? {getuserdata.roomservice == 'Yes' ? <CheckCircleOutlineIcon className='ml-3' style={{ color: 'green', fontSize: '40px', }} /> : <DangerousIcon className='ml-3' style={{ color: 'red', fontSize: '40px', }} />} </p>

                        </div>
                        <div className="col-lg-6 col-sm-12">
                        <h1 className='introlowerheading mb-5'> Facilities </h1>

                            <p className='introlowercon'> Are You Provide Computer Service ?  {getuserdata.computer == 'Yes' ? <CheckCircleOutlineIcon className='ml-3' style={{ color: 'green', fontSize: '40px', }} /> : <DangerousIcon className='ml-3' style={{ color: 'red', fontSize: '40px', }} />}   </p> <hr style={{borderColor:'black'}} />
                            <p className='introlowercon'> Have A Conference And Meeting Room In Your Hotel ?  {getuserdata.meeting == 'Yes' ? <CheckCircleOutlineIcon className='ml-3' style={{ color: 'green', fontSize: '40px', }} /> : <DangerousIcon className='ml-3' style={{ color: 'red', fontSize: '40px', }} />} </p> <hr style={{borderColor:'black'}} />

                            <p className='introlowercon'> Have A Gym Service In Your Hotel ? {getuserdata.gym == 'Yes' ? <CheckCircleOutlineIcon className='ml-3' style={{ color: 'green', fontSize: '40px', }} /> : <DangerousIcon className='ml-3' style={{ color: 'red', fontSize: '40px', }} />} </p> <hr style={{borderColor:'black'}} />
                            <p className='introlowercon'> Have A Health Service In Your Hotel ? {getuserdata.health == 'Yes' ? <CheckCircleOutlineIcon className='ml-3' style={{ color: 'green', fontSize: '40px', }} /> : <DangerousIcon className='ml-3' style={{ color: 'red', fontSize: '40px', }} />} </p> <hr style={{borderColor:'black'}} />
                            <p className='introlowercon'> Have A Parking In Your Hotel ? {getuserdata.parking == 'Yes' ? <CheckCircleOutlineIcon className='ml-3' style={{ color: 'green', fontSize: '40px', }} /> : <DangerousIcon className='ml-3' style={{ color: 'red', fontSize: '40px', }} />} </p> <hr style={{borderColor:'black'}} />
                            <p className='introlowercon'> Have A Restaurant In Your Hotel ? {getuserdata.restaurant == 'Yes' ? <CheckCircleOutlineIcon className='ml-3' style={{ color: 'green', fontSize: '40px', }} /> : <DangerousIcon className='ml-3' style={{ color: 'red', fontSize: '40px', }} />} </p> <hr style={{borderColor:'black'}} />
                            <p className='introlowercon'> Have A Wi-Fi Service In Your Hotel ? {getuserdata.wifi == 'Yes' ? <CheckCircleOutlineIcon className='ml-3' style={{ color: 'green', fontSize: '40px', }} /> : <DangerousIcon className='ml-3' style={{ color: 'red', fontSize: '40px', }} />} </p>

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

                                <NavLink to={`/introduction/${getuserdata._id}`}>
                                    <a class="tm-nav-link">

                                        Introduction
                                        <i> <WavesIcon style={{ fontSize: '80px' }} /></i>
                                    </a>
                                </NavLink>
                            </li>

                            <li class="tm-nav-item">
                                <NavLink to={`/hotelmenu/${getuserdata._id}`}>

                                    <a class="tm-nav-link">
                                        Hotel Menu
                                        <i> <MenuBookIcon style={{ fontSize: '80px' }} /></i>
                                    </a>
                                </NavLink>
                            </li>
                            <li class="tm-nav-item">
                                <NavLink to={`/hotelcontact/${getuserdata._id}`}>

                                    <a class="tm-nav-link">
                                        Contact
                                        <i> <ConnectWithoutContactIcon style={{ fontSize: '80px' }} /></i>
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

export default CLhotelser