import React, { useState } from 'react'
import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {

    const naviget = useNavigate();


    const [user, setuser] = useState({
        hname: '',
        honame: '',
        mobile: '',
        employ: '',
        email: '',
        psw: '',
    })


    let name, value;
    const indata = (e) => {
        name = e.target.name;
        value = e.target.value;

        setuser({ ...user, [name]: value })
    }




    const postdata = async (e) => {
        e.preventDefault();

        const { hname, honame, mobile, employ, email, psw } = user
        const res = await fetch('/ragister', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                hname, honame, mobile, employ, email, psw
            })
        })
        const data =  res.json();
        
        if (res.status === 400 || !data) {
            window.alert('error in ragistration')
        }
        else {
            window.alert('Ragistration Successfull')
            naviget(`/hotelinfo/${data._id}`, {replace: true})
        }
    }

    return (
        <>

            <div className="bg3">

                <div className='mainsigndiv'>

                    <form method='POST' onSubmit={postdata}>
                        <div class="container">
                            <h1>Login </h1>
                            <p>Please fill in this form to Login your account.</p>
                            <hr />


                            
                            <div className="row">
                                

                                <div className='col-lg-4'>

                                    <label><b>Email</b></label>
                                    <input type="text" onChange={indata} value={user.email} placeholder="Enter Email" name="email" required />
                                </div>

                                <div className='col-lg-4'>
                                    <label ><b>Password</b></label>
                                    <input type="password" onChange={indata} value={user.psw} placeholder="Enter Password" name="psw" required />
                                </div>


                            </div>




                            <div class="clearfix">

                                <button type="submit"  class="btn btn-success signbtn">Login</button> <NavLink to={'/signup'}> <span className='btn btn-primary'>Add New Hotel</span>
                                </NavLink></div>
                        </div>
                        
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login