import React, { useEffect, useState } from 'react'
import { NavLink,useNavigate  } from 'react-router-dom'

const Wellocome = () => {
   
    
        const naviget = useNavigate();

    const [lguser, setlguser] = useState({
        email: '',
        psw: '',
    })

    const [getuserdata, setuserdata] = useState([])

    let name, value;
    const lgin = (e) => {
        name = e.target.name;
        value = e.target.value;

        setlguser({ ...lguser, [name]: value })
    }

 

    const checklg = async (e)=> {
        e.preventDefault();

        const {email, psw } = lguser
        const res = await fetch('/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email, psw
            })
        })

        const data = await res.json();
        console.log(data);
        if (res.status === 400) {
            
            window.alert('please fill correct information')
        }
        else {
            window.alert('login Successfull!')
            naviget(`/hotelinfo/${data._id}`, {replace: true})
        }

        
    }
    return (
        <>          
  <div class="content">

    <div className='container wellcome_form_heading' style={{display:"flex",}}>
    <div style={{width:'90%'}}>

    <span className='navhading' style={{ color: "blueviolet", fontSize: "2.5rem" }}>Our Hotel Management</span>
    </div>
    <div style={{ float:"right"}}>
        
                            <NavLink to={'/signup'} >
                                <button className='btn btn-primary'>Manage</button>
                            </NavLink>
    </div>
    </div>
                       
    <div class="container">
    
      <div class="row">
      
        <div class="col-md-6">
          <img src={require('./assets/img/form.png')} alt="Image" class="img-fluid" />
        </div>
        <div class="col-md-6 contents">
          <div class="row justify-content-center">
            <div class="col-md-8">
              <div class="mb-4">
              <h3>Sign In</h3>
              <p class="mb-4">Lorem ipsum dolor sit amet elit. Sapiente sit aut eos consectetur adipisicing.</p>
            </div>
            <form method='POST' onSubmit={checklg}>
              <div class="form-group first form_padd">
                
                <input type="text" class=" form-control" onChange={lgin} value={lguser.email} placeholder="Enter Email" name="email" required />

              </div>
              <div class="form-group last mb-4 form_padd">
                <input type="password" class=" form-control" onChange={lgin} value={lguser.psw} placeholder="Enter Password" name="psw" required />
                
              </div>
              
            

              <input type="submit" value="Log In" class="btn btn-block btn-primary" />

              <span class="d-block text-left my-4 text-muted">&mdash; or login with &mdash;</span>
              
         
            </form>
            </div>
          </div>
          
        </div>
        
      </div>
    </div>
  </div>

        </>
    )
}

export default Wellocome



















// ********************************** old code **********************************

  
            {/* <div className='bg'>



            </div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light p-2 welnav">
                <a class="navbar-brand g-head" style={{ fontSize: '2rem' }} href="#">Wellcome  <span className='navhading' style={{ color: "blueviolet", fontSize: "2rem" }}>Our Hotel Management</span></a>

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>


                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active mr-5">
                            <NavLink to={'/signup'} >
                                <button className='btn btn-primary'>Manage</button>
                            </NavLink>
                        </li>


                    </ul>

                </div>
            </nav>

            <div className='maindiv'>

                <div className='left'>




                    <h3>if you want to join <span><br /> with us </span></h3>
                    <h2>lets publish <span> Your hotel  <br />  with world </span> and ready to   <br />more <span> money earn</span></h2>



                </div>
                <div className='right'>
                    <div className='r-form'>
                        <h3 className='pb-4'>Login form</h3>
                        <form method='POST' onSubmit={checklg}>

                            <div>

                                <label><b>Email</b></label>
                                <input type="text" onChange={lgin} value={lguser.email} placeholder="Enter Email" name="email" required />
                            </div>

                            <div>
                                <label ><b>Password</b></label>
                                <input type="password" onChange={lgin} value={lguser.psw} placeholder="Enter Password" name="psw" required />
                            </div>


                            <button className='btn btn-primary ml-4'>Login</button>

                            <NavLink to={'/signup'} ><p className='a-hotel ml-4'>Add Hotel ?</p></NavLink>
                        </form>


                    </div>
                </div>

            </div> */}