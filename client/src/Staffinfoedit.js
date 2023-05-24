import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from "react-router-dom";

const Staffinfoedit = () => {


    const naviget = useNavigate();




    const [user, setuser] = useState({
        hotelcontactnumber : '',
        hotellenline : '',
        hoteladdress: '',
        whychoose : '',
        hotelemailaddress : ''

    })
    let name, value;
    const indata = (e) => {
        name = e.target.name;
        value = e.target.value;

        setuser({ ...user, [name]: value })
    }




    const { id } = useParams("");
    console.log(id);


    const Perperson = async () => {


        const res = await fetch(`/getuser/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })

        const data = await res.json();
        console.log(data);
        if (!data) {
            window.alert('error in get data')
        }
        else {
            setuser(data)
            console.log('data goted by api');
        }

    }

    useEffect(() => {
        Perperson();
    }, [])

    const updateuser = async (e) => {
        e.preventDefault();

        const {hotelcontactnumber, hotellenline ,hoteladdress ,whychoose, hotelemailaddress  } = user


        const res2 = await fetch(`/edit/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                hotelcontactnumber, hotellenline ,hoteladdress ,whychoose ,hotelemailaddress
            })
        })

        const data2 = await res2.json();
        console.log(data2);
        if (!data2) {
            window.alert('error in get data2')
        }
        else {
            setuser(data2)
            naviget(`/hotelinfo/${data2._id}`, { replace: true })
            window.alert("data updated")
            console.log('data2 goted by api');
        }

    }


    return (
        <>

        
    <div class="main">

<section class="signup">
    <div class="container_3">
        <div class="signup-content">
            <div class="signup-form">
                <h2 class="form-title h2_sign">Information Edit</h2>
                <form method='POST' onSubmit={updateuser}>
                    <div class="form-group">
                        <label class="lable_sign" ><i class="zmdi zmdi-account material-icons-name"></i></label>
                        <input class="input_sign" type="text" name='hotelcontactnumber' onChange={indata} placeholder="Contact Number"  />
                    </div>
                    <div class="form-group">
                        <label class="lable_sign" ><i class="zmdi zmdi-email"></i></label>
                        <input class="input_sign" type="text" name='hotellenline' onChange={indata} placeholder="Len Line Number" />
                    </div>
                    <div class="form-group">
                        <label class="lable_sign" ><i class="zmdi zmdi-email"></i></label>
                        <input class="input_sign" type="text"name='hoteladdress' onChange={indata} placeholder="Hotel Address" />
                    </div>
                    <div class="form-group">
                        <label class="lable_sign" for="pass"><i class="zmdi zmdi-lock"></i></label>
                        <input class="input_sign"type="text"name='hotelemailaddress' onChange={indata} placeholder="Hotel Email Address" />
                    </div>
                    <div class="form-group">
                        <label class="lable_sign" for="re-pass"><i class="zmdi zmdi-lock-outline"></i></label>
                        <textarea style={{width:'100%', marginTop:'40px'}} className=' textarea' name='whychoose' onChange={indata} id="" placeholder="Why Choose Your Hotel"></textarea>
                    </div>
                    <div class="form-group form-button">
                        <input class=" form-submit" type="submit" name="signup" id="signup" value="Update"/>
                    </div>
                </form>
            </div>
            <div class="signup-image">
                <figure class="figure_img"><img class="sign_img" src={require('./assets/img/sign.jpg')}alt="sing up image" /></figure>
               
            </div>
        </div>
    </div>
</section>


</div>
        </>
    )
}

export default Staffinfoedit

























// <div className="bg4">

// <div className='mainsigndiv '>

//     <form method='POST' onSubmit={updateuser}>
//         <div class="container">
//             <h1>Information Edit</h1>
//             <p>Please fill in this form to create an facilities section.</p>
//             <hr />


           

//                     <label className='faci-head'><b>Contact Number</b></label> <br />
//                     <input type="text" className='radio' name='hotelcontactnumber' onChange={indata} /> 
               
          

//                     <label className='faci-head'><b>Len Line Number</b></label> <br />
//                     <input type="text" className='radio' name='hotellenline' onChange={indata} /> 
               
//                     <label className='faci-head'><b>Hotel Address</b></label> <br />
//                     <input type="text" className='radio' name='hoteladdress' onChange={indata} /> 
                    
//                     <label className='faci-head'><b>Hotel Email Address</b></label> <br />
//                     <input type="text" className='radio' name='hotelemailaddress' onChange={indata} /> 
                   
           
//                     <label className='faci-head'><b>Why Choose Your Hotel</b></label> <br />
//                     <textarea className='radio textarea' style={{marginLeft:'32px'}} name='whychoose' onChange={indata} id=""></textarea>
               
           
           

//             <hr />


         
//             <div class="clearfix">

//                 <button type="submit" class="btn btn-success signbtn">Update</button>
//             </div>
//         </div>

//     </form>
// </div>
// </div>












