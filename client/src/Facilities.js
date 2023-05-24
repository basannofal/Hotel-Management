import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import SaveAsIcon from '@mui/icons-material/SaveAs';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import DangerousIcon from '@mui/icons-material/Dangerous';


const Facilities = () => {

  const toggele = () => {

    var hamburger = document.querySelector(".hamburger");
    hamburger.addEventListener("click", function () {
      document.querySelector("body").classList.toggle("active");
    })
  }


  const navigate = useNavigate();

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


  const deleteuser = async (id) => {

    const res7 = await fetch(`/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
    })

    const data4 = await res7.json();
    console.log(data4);
    if (!data4) {
      window.alert('error in delete data')
    }
    else {
      navigate('/', { replace: true })
      console.log('data deleted');
    }

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
            <div className='btnt mr-5 mb-5' >

              <NavLink to={`/facilitiesedit/${getuserdata._id}`}>  <Button color="primary" variant="contained" className='btn btn-primary ml-2 mr-2 '><SaveAsIcon /> <span className='mx-2 '>Update</span></Button></NavLink>


            </div>
            <div className=' row' style={{ paddingTop: '120px' }}>

            </div>
            <div className='cotact_box'>
              <p> Are You Provide Computer Service ?  {getuserdata.computer == 'Yes' ? <CheckCircleOutlineIcon className='ml-3' style={{ color: 'green', fontSize: '40px', }} /> : <DangerousIcon className='ml-3' style={{ color: 'red', fontSize: '40px', }} />}   </p> <hr/>
              <p> Have A Conference And Meeting Room In Your Hotel ?  {getuserdata.meeting == 'Yes' ? <CheckCircleOutlineIcon className='ml-3' style={{ color: 'green', fontSize: '40px', }} /> : <DangerousIcon className='ml-3' style={{ color: 'red', fontSize: '40px', }} />} </p> <hr/>

              <p> Have A Gym Service In Your Hotel ? {getuserdata.gym == 'Yes' ? <CheckCircleOutlineIcon className='ml-3' style={{ color: 'green', fontSize: '40px', }} /> : <DangerousIcon className='ml-3' style={{ color: 'red', fontSize: '40px', }} />} </p> <hr/>
              <p> Have A Health Service In Your Hotel ? {getuserdata.health == 'Yes' ? <CheckCircleOutlineIcon className='ml-3' style={{ color: 'green', fontSize: '40px', }} /> : <DangerousIcon className='ml-3' style={{ color: 'red', fontSize: '40px', }} />} </p> <hr/>
              <p> Have A Parking In Your Hotel ? {getuserdata.parking == 'Yes' ? <CheckCircleOutlineIcon className='ml-3' style={{ color: 'green', fontSize: '40px', }} /> : <DangerousIcon className='ml-3' style={{ color: 'red', fontSize: '40px', }} />} </p> <hr/>
              <p> Have A Restaurant In Your Hotel ? {getuserdata.restaurant == 'Yes' ? <CheckCircleOutlineIcon className='ml-3' style={{ color: 'green', fontSize: '40px', }} /> : <DangerousIcon className='ml-3' style={{ color: 'red', fontSize: '40px', }} />} </p> <hr/>
              <p> Have A Wi-Fi Service In Your Hotel ? {getuserdata.wifi == 'Yes' ? <CheckCircleOutlineIcon className='ml-3' style={{ color: 'green', fontSize: '40px', }} /> : <DangerousIcon className='ml-3' style={{ color: 'red', fontSize: '40px', }} />} </p>

            </div>


            <div className=' row' style={{ paddingBottom: '100px', width: '100%' }}>

            </div>


          </div>
        </div>










        <div class="sidebar">
          <div class="profile">
          { !getuserdata.himage  ?
             <p>image not available</p>
            :
            <img  src={require(`../src/uploads/${getuserdata.himage}`)} alt="" />
          }
            <h3>{getuserdata.hname}</h3>
            <p>Designer</p>
          </div>

          <ul>
            <NavLink to={`/hotelinfo/${getuserdata._id}`}>
              <li style={{ listStyle: "none" }}>


                <a  >
                  <span class="icon"><i class="fa fa-home"></i></span>
                  <span class="item">Hotel Info</span>
                </a>
              </li>
            </NavLink>

            <NavLink to={`/facilities/${getuserdata._id}`}>
              <li style={{ listStyle: "none" }}>
                <a class="active">
                  <span class="icon"><i class="fa fa-user"></i></span>
                  <span class="item">Hotel Facilites</span>
                </a>
              </li>
            </NavLink>
            <NavLink to={`/addmenu/${getuserdata._id}`}>

              <li style={{ listStyle: "none" }}>
                <a href="#">
                  <span class="icon"><i class="fa fa-book"></i></span>
                  <span class="item">Add Menu</span>
                </a>
              </li>
            </NavLink>
            <NavLink to={`/staffinformation/${getuserdata._id}`}>

              <li style={{ listStyle: "none" }}>
                <a href="#">
                  <span class="icon"><i class="fa fa-child"></i></span>
                  <span class="item">Staff Information</span>
                </a>
              </li>
            </NavLink>
            <NavLink to={`/services/${getuserdata._id}`}>

              <li style={{ listStyle: "none" }}>
                <a href="#">
                  <span class="icon"><i class="fa fa-database"></i></span>
                  <span class="item">Hotel Services</span>
                </a>
              </li>
            </NavLink>

            {/* 
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
             */}
          </ul>
        </div>
      </div>



    </>
  )
}

export default Facilities