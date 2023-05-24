import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Button from '@mui/material/Button';
import SaveAsIcon from '@mui/icons-material/SaveAs';




const Hotelinfo = () => {

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

          
            <div className='btnt mr-5 mb-5 '>

              <NavLink to={`/edit/${getuserdata._id}`}>  <Button color="success" variant="contained" className='btn btn-primary ml-2 mr-2 '> <AccountCircleIcon /> <span className='ml-2'>Profile</span></Button></NavLink>
              <Button color="error" variant="contained" className='btn btn-danger m-2' onClick={() => deleteuser(getuserdata._id)}><DeleteForeverIcon /> <span className='ml-2'>Delete Hotel</span> </Button>
            </div>

            <div>
              {
                (getuserdata.foodtype) === "veg" ? <img style={{margin:"25px 30px 0 30px", borderRadius:'5px'}} src={require('./assets/img/veg.jpg')} height="60px" width="60px" alt="" /> : <img style={{margin:"25px 30px 0 30px", borderRadius:'5px'}} src={require('./assets/img/nonveg.jpg')} height="60px" width="60px" alt="" /> 
              }
            </div>

            <div className=' row' style={{paddingTop:'60px'}}>

            </div>
            { !getuserdata.himage  ?
            <NavLink to={`/img/${getuserdata._id}`}>  <Button style={{backgroundColor: "rgb(238, 238, 38)",color:'black',padding: "18px 36px",fontSize: "18px",borderRadius: '21px',margin:'10px', }}variant="contained" className='btn btn-primary ml-2 mr-2 img_update_btn'> <SaveAsIcon /> <span className='ml-2'>Update image</span></Button></NavLink>

            :
            <div className=' image_update'>
            <img className='image_updated' src={require(`../src/uploads/${getuserdata.himage}`)} alt="" />
            <NavLink to={`/img/${getuserdata._id}`}>  <Button style={{backgroundColor: "rgb(238, 238, 38)",color:'black',padding: "18px 36px",fontSize: "18px",borderRadius: '21px',margin:'10px', }}variant="contained" className='btn btn-primary ml-2 mr-2 img_update_btn'> <SaveAsIcon /> <span className='ml-2'>Update image</span></Button></NavLink>
           
            </div>
            
           
            }
           
            <div className='cotact_box'>
            <p> hotel name <br /> <span> {getuserdata.hname} </span> </p> <hr />
                <p> mobile number <br /> <span> {getuserdata.mobile} </span> </p> <hr />
                <p> client address <br /> <span> {getuserdata.address} </span> </p> <hr />

            </div>

            <div className='cotact_box'>
                <p> hotel owner name <br /> <span> {getuserdata.honame}  </span> </p> <hr />
              <p> email id <br /> <span>{getuserdata.email}  </span> </p> 

            </div>
            <div className=' row' style={{paddingBottom:'100px', width:'100%'}}>

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


                <a class="active">
                  <span class="icon"><i class="fa fa-home"></i></span>
                  <span class="item">Hotel Info</span>
                </a>
              </li>
            </NavLink>

            <NavLink to={`/facilities/${getuserdata._id}`}>
              <li style={{ listStyle: "none" }}>
                <a href="#">
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

export default Hotelinfo