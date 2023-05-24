import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import WavesIcon from '@mui/icons-material/Waves';
import RoomServiceIcon from '@mui/icons-material/RoomService';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';


const CLhotelcon = () => {

  const sendemail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bsh3n8d', 'template_6ouieyt', e.target, '_jNQPoCai9F7I8exF')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    document.getElementById('title').value = '';
    document.getElementById('fname').value = '';
    document.getElementById('lname').value = '';
    document.getElementById('email').value = '';
    document.getElementById('number').value = '';
    document.getElementById('area').value = '';
  }


  const { id } = useParams("");
  const [getuserdata, setuserdata] = useState([]);


  const [arr, setarr] = useState([]);

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
      setarr(data.addmenu)
      console.log(data);
    }

  }

  useEffect(() => {
    Perperson();
  }, [])



  return (
    <>

      <header class=" introofhotel" style={{height:"100vh"}}>
        <div className='introhotelimg' style={{width:"100%"}} >

          <img src={require('./assets/img/slide/cont.png')} style={{height:"100vh",width:"100%"}} alt="" />
        </div>
        <div className="introhoteldic" >

          <h1 class="tm-mt-0 tm-mb-15 text-center introheading"><span style={{ color: 'rgb(25, 108, 225)', fontSize: '5rem' }}>{getuserdata.hname}</span> <span style={{ color: 'black' }}>Hotel</span></h1>
          <em className='introshort' style={{ color: 'black' }}>Contact</em>
        </div>
      </header>

      <div className='user_fo'>
        <div className="partofsecintro">
          <div className="row ">
            <div className="col-lg-12 introlowheading">
              <h1 style={{ textAlign: 'center', padding: '20px', marginBottom: '30px', textDecoration: 'underline' }}> Contact Us </h1>
            </div>

          </div>
        </div>


        <form className='user_form' onSubmit={sendemail}>

          <p className='user_hotelname'> send to {getuserdata.hname}</p>
          <input type="text" value={getuserdata.hotelemailaddress} name='client' hidden />
          <input type="text" value={getuserdata.hname} name='clienthotel' hidden />

          <div class="form-group col-lg-3 ml-2">
            <label for="title">Title</label>
            <select class="form-control" id='title' name='usertitle' >
              <option>Mr</option>
              <option>Mrs</option>
            </select>
          </div>
          <div class="row">
            <div class="col">
              <label> First Name</label>
              <input type="text" class="form-control" id='fname' name='userfname' placeholder="First name" />
            </div>
            <div class="col">
              <label> Last Name</label>
              <input type="text" class="form-control" id='lname' name='userlname' placeholder="Last name" />
            </div>
          </div>

          <div class="row">
            <div class="col">
              <label>Email</label>
              <input type="text" class="form-control" id='email' name='useremail' placeholder="First name" />
            </div>
            <div class="col">
              <label>Phone Number</label>
              <input type="text" class="form-control" id='number' name='usernumber' placeholder="Last name" />
            </div>
          </div>
          <div class="form-group user_textarea">
            <label for="area">what your requirement</label>
            <textarea class="form-control textareaori" name='userrequire' id="area" rows="3" ></textarea>
          </div>

          <button type="submit" class="btn btn-primary m-4">Send</button>
        </form>
      </div>

      <div className='Hotelconnew'>
        <div class="tm-container " >
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
                <NavLink to={`/hotelservices/${getuserdata._id}`}>

                  <a class="tm-nav-link" id="tm-gallery-link">
                    Services
                    <i> <RoomServiceIcon style={{ fontSize: '80px' }} /></i>
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
              
            </ul>
          </nav>
        </div>
      </div>
    </>
  )
}

export default CLhotelcon