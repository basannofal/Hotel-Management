import React, { useState } from 'react'
import { NavLink, useNavigate } from "react-router-dom";

const Signup = () => {

    const naviget = useNavigate();


    const [user, setuser] = useState({
        hname: '',
        honame: '',
        mobile: '',
        address: '',
        email: '',
        psw: '',
        foodtype : '',
    })


    let name, value;
    const indata = (e) => {
        name = e.target.name;
        value = e.target.value;

        setuser({ ...user, [name]: value })
    }




    const postdata = async (e) => {
        e.preventDefault();

        const { hname, honame, mobile, address, email, psw, foodtype } = user
        const res = await fetch('/ragister', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                hname, honame, mobile, address, email, psw, foodtype
            })
        })

        console.log(res);
        const data = await res.json();
        console.log(data);
        if (res.status === 400) {
            window.alert('error is already exist !!!!')
        }
        else {
            window.alert('Ragistration Successfull')
            naviget('/wellcome', {replace: true})
        }
    }

    return (
        <>
            <div class="main">

<section class="signup">
    <div class="container_3">
        <div class="signup-content">
            <div class="signup-form">
            <h2 class="form-title h2_sign">Join With Us </h2>
                {/* <h2 class="form-title h2_sign">Sign up</h2> */}
                <form method='POST' onSubmit={postdata}>
                    <div class="form-group">
                        <label class="lable_sign" ><i class="zmdi zmdi-account material-icons-name"></i></label>
                        <input class="input_sign" type="text" onChange={indata} value={user.hname} placeholder="Enter Your Hotel Name" name="hname" required/>
                    </div>
                    <div class="form-group">
                        <label class="lable_sign" ><i class="zmdi zmdi-email"></i></label>
                        <input class="input_sign" type="text" onChange={indata} value={user.honame} placeholder="Hotel Owner Name" name="honame" required/>
                    </div>
                    <div class="form-group">
                        <label class="lable_sign" ><i class="zmdi zmdi-email"></i></label>
                        <input class="input_sign" type="text" onChange={indata} value={user.mobile} placeholder="Mobile Number" name="mobile" required />
                    </div>
                    <div class="form-group">
                        <label class="lable_sign" for="pass"><i class="zmdi zmdi-lock"></i></label>
                        <input class="input_sign"type="text" onChange={indata} value={user.address} placeholder="address Of Hotels" name="address" required/>
                    </div>
                    <div class="form-group">
                        <label class="lable_sign" for="re-pass"><i class="zmdi zmdi-lock-outline"></i></label>
                        <input class="input_sign" type="text" onChange={indata} value={user.email} placeholder="Enter Email" name="email" required/>
                    </div>

                    <div class="form-group">
                        <label class="lable_sign" for="re-pass"><i class="zmdi zmdi-lock-outline"></i></label>
                        <input class="input_sign" type="password" onChange={indata} value={user.psw} placeholder="Enter Password" name="psw" required/>
                    </div>

                    <div class="form-group" >
                         <div  style={{marginTop:"20px"}}>
                            <label class="radio-container " style={{ marginRight:"170px" }}>

                                Veg
                                <input type="radio"  name='foodtype' value='veg' onChange={indata} />
                                <span class="checkmark"></span>
                            </label>
                            <label class="radio-container"  style={{marginLeft:"-140px"}}>Non Veg
                                <input type="radio"  name='foodtype' value='nonveg' onChange={indata} />
                                <span class="checkmark"></span>
                            </label> <br /> 
                            
                        </div>
                        
                    </div>
                   
                    <div class="form-group form-button">
                        <input class=" form-submit" type="submit" name="signup" id="signup"  value="Register"/>
                    </div>
                </form>
            </div>
            <div class="signup-image">
                <figure class="figure_img"><img class="sign_img" src={require('./assets/img/sign.jpg')}alt="sing up image" /></figure>
               <NavLink to="/wellcome" > <a class="signup-image-link">You are already member</a> 
            </NavLink></div>
        </div>
    </div>
</section>


</div>

        </>
    )
}

export default Signup


















// <div className="bg3">

// <div className='mainsigndiv'>

//     <form method='POST' onSubmit={postdata}>
//         <div class="container">
//             <h1>Sign Up</h1>
//             <p>Please fill in this form to create an account.</p>
//             <hr />


//             <div className="row">
//                 <div className='col-lg-4'>

//                     <label><b>Enter Your Hotel Name</b></label>
//                     <input type="text" onChange={indata} value={user.hname} placeholder="Enter Your Hotel Name" name="hname" required />
//                 </div>

//                 <div className='col-lg-4'>
//                     <label ><b>Hotel Owner Name</b></label>
//                     <input type="text" onChange={indata} value={user.honame} placeholder="Hotel Owner Name" name="honame" required />
//                 </div>
//                 <div className='col-lg-4'>
//                     <label ><b>Mobile Number</b></label>
//                     <input type="text" onChange={indata} value={user.mobile} placeholder="Mobile Number" name="mobile" required />
//                 </div>

//             </div>
//             <div className="row">
//                 <div className='col-lg-4'>

//                     <label><b>Address Of Client</b></label>
//                     <input type="text" onChange={indata} value={user.address} placeholder="address Of Hotels" name="address" required />
//                 </div>

//                 <div className='col-lg-4'>

//                     <label><b>Email Of Hotel Owener</b></label>
//                     <input type="text" onChange={indata} value={user.email} placeholder="Enter Email" name="email" required />
//                 </div>

//                 <div className='col-lg-4'>
//                     <label ><b>Password</b></label>
//                     <input type="password" onChange={indata} value={user.psw} placeholder="Enter Password" name="psw" required />
//                 </div>


//             </div>




//             <div class="clearfix">

//                 <button type="submit"  class="btn btn-success signbtn ml-3">Sign Up</button> </div>
//         </div>
        
//     </form>
// </div>
// </div>
