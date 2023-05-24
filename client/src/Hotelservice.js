import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import SaveAsIcon from '@mui/icons-material/SaveAs';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import DangerousIcon from '@mui/icons-material/Dangerous';
import axios from 'axios';
import FormData from 'form-data'



const Hotelservice = () => {


  
  const naviget = useNavigate();


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



  
  const [user, setuser] = useState({
    imageGallary :''

})

const [image, setimage] = useState([])


const handlephoto = (e) => {
setimage({ imageGallary : e.target.files});
console.log(e.target.files);

}
console.log(image);

  const imageGallary = async(e) => {
  
    e.preventDefault();
    const { imageGallary  } = user


    let formData = new FormData();
    Object.values(image).forEach(file=>{
      formData.append("imageGallary", file);
    });

    // const formdataobj = Object.fromEntries(formData.entries());
    // console.log(formdataobj);


    const url = `http://localhost:8000/imageedit/${id}`

   
    const config = {
        headers: { 'content-type': 'multipart/form-data' }
    }

    try {
        
        let res = axios.post(url, formData);
        // console.log(res);
        // console.log(res.value.data);
        if (!res) {
            window.alert('error in get data2')
        }
        else {
            // const data2 = res.data;
            
            naviget(`/hotelinfo/${id}`, {replace:true})
            window.alert("image updated")
        }

    } catch (err) {
        console.log('error');
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

              <NavLink to={`/servicesedit/${getuserdata._id}`}>  <Button color="primary" variant="contained" className='btn btn-primary ml-2 mr-2 '> <SaveAsIcon /> <span className='mx-2'>Update</span></Button></NavLink>

            </div>

            <div className=' row' style={{ paddingTop: '120px' }}>

            </div>
            <div className='cotact_box'>
              <p> Are You Provide Car Rental Services ?  {getuserdata.carrent == 'Yes' ? <CheckCircleOutlineIcon className='ml-3' style={{ color: 'green', fontSize: '40px', }} /> : <DangerousIcon className='ml-3' style={{ color: 'red', fontSize: '40px', }} />}  </p> <hr />
              <p> Are You Provide Catering Room Services ?  {getuserdata.catering == 'Yes' ? <CheckCircleOutlineIcon className='ml-3' style={{ color: 'green', fontSize: '40px', }} /> : <DangerousIcon className='ml-3' style={{ color: 'red', fontSize: '40px', }} />} </p> <hr />
              <p> Are You Provide Courier Services ?  {getuserdata.courier == 'Yes' ? <CheckCircleOutlineIcon className='ml-3' style={{ color: 'green', fontSize: '40px', }} /> : <DangerousIcon className='ml-3' style={{ color: 'red', fontSize: '40px', }} />} </p> <hr />
              <p> Are You Provide Doctor On Call Services ? {getuserdata.doctor == 'Yes' ? <CheckCircleOutlineIcon className='ml-3' style={{ color: 'green', fontSize: '40px', }} /> : <DangerousIcon className='ml-3' style={{ color: 'red', fontSize: '40px', }} />}  </p> <hr />
              <p> Are You Provide Ticket Services ? {getuserdata.ticket == 'Yes' ? <CheckCircleOutlineIcon className='ml-3' style={{ color: 'green', fontSize: '40px', }} /> : <DangerousIcon className='ml-3' style={{ color: 'red', fontSize: '40px', }} />}  </p> <hr />
              <p> Are You Provide Ironing Services ? {getuserdata.ironing == 'Yes' ? <CheckCircleOutlineIcon className='ml-3' style={{ color: 'green', fontSize: '40px', }} /> : <DangerousIcon className='ml-3' style={{ color: 'red', fontSize: '40px', }} />} </p> <hr />
              <p> Are You Provide Laundry Services ?  {getuserdata.laundry == 'Yes' ? <CheckCircleOutlineIcon className='ml-3' style={{ color: 'green', fontSize: '40px', }} /> : <DangerousIcon className='ml-3' style={{ color: 'red', fontSize: '40px', }} />} </p> <hr />
              <p> Are You Provide Massages Services ? {getuserdata.massages == 'Yes' ? <CheckCircleOutlineIcon className='ml-3' style={{ color: 'green', fontSize: '40px', }} /> : <DangerousIcon className='ml-3' style={{ color: 'red', fontSize: '40px', }} />} </p> <hr />

              <p> Are You Provide Room Services ? {getuserdata.roomservice == 'Yes' ? <CheckCircleOutlineIcon className='ml-3' style={{ color: 'green', fontSize: '40px', }} /> : <DangerousIcon className='ml-3' style={{ color: 'red', fontSize: '40px', }} />} </p>


            </div>


            <div className=' row' style={{ paddingBottom: '100px', width: '100%' }}>

            </div>














            {/* ************************* Galary ***************************************** */}

            <hr />
            <hr />
            <hr />
            <hr />
            <hr />
            <hr />
            <hr />
            <hr />
            <hr />
            <hr />


            <section className="gallary_container">
              <div className='hotel_gallary'>
                <h1 className="gallary_heading">
                  Gallary
                </h1>

                <form className="gallary_form"  enctype="multipart/form-data" onSubmit={imageGallary}>
                <label  className='gallary_lable'> Add Gallary Photo</label> <br />
                  <label for="img" className='lable_sign'> Add Gallary Photo</label>
                  <input onChange={handlephoto} className='input_sign' id='img' type="file" multiple /> 
                  <input type="submit" className='btn btn-primary m-4' value='Add Images' />
                </form>
              </div>
            </section>


            {/* ************************* Galary Over ***************************************** */}
            


          </div>
        </div>






        <div class="sidebar">
          <div class="profile">
            {!getuserdata.himage ?
              <p>image not available</p>
              :
              <img src={require(`../src/uploads/${getuserdata.himage}`)} alt="" />
            }
            <h3>{getuserdata.hname}</h3>
            <p>Designer</p>
          </div>

          <ul>
            <NavLink to={`/hotelinfo/${getuserdata._id}`}>
              <li style={{ listStyle: "none" }}>


                <a >
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
                <a class="active">
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

export default Hotelservice