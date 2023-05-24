import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from "react-router-dom";

const Facilitiesedit = () => {
    const naviget = useNavigate();




    const [user, setuser] = useState({
        computer: '',
        meeting: '',
        gym: '',
        health: '',
        parking: '',
        restaurant: '',
        wifi: '',
        himage: '',

    })

    let name, value;
    const indata = (e) => {
        name = e.target.name;
        value = e.target.value;

        setuser({ ...user, [name]: value })
    }


    const handlephoto = (e) => {
        setuser({ ...user, himage: e.target.files[0] });
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

        const { computer, meeting, gym, health, parking, restaurant, wifi, himage } = user



        const res2 = await fetch(`/edit/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                computer, meeting, gym, health, parking, restaurant, wifi, himage
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


            <div class="page-wrapper" style={{paddingTop:"45px", paddingBottom:"50px"  }}>

                <div class="wrapper wrapper--w790">
                    <div class="card_1 card-5">
                        <div class="card-heading">
                            <h2 class="title">Facilities Edit Form</h2>
                        </div>
                        <div class="card-body">
                            <form  method='POST' onSubmit={updateuser} >

                                <div class="row">

                                    <div class="form-row col-lg-6" style={{ paddingTop:"20px",   }}>
                                        <label class="label label--block">Are You Provide Computer Service</label>
                                         <div  style={{marginTop:"10px"}}>
                                            <label class="radio-container " style={{ marginRight:"170px" }}>

                                                Yes
                                                <input type="radio"  name='computer' value='Yes' onChange={indata} />
                                                <span class="checkmark"></span>
                                            </label>
                                            <label class="radio-container"  style={{marginLeft:"-140px"}}>No
                                                <input type="radio"  name='computer' value='No' onChange={indata} />
                                                <span class="checkmark"></span>
                                            </label>
                                        </div>
                                    </div>
                                    
                                    <div class="form-row col-lg-6" style={{ paddingTop:"20px",   }}>
                                        <label class="label label--block ">Have A Conference And Meeting Room In Your Hotel ?</label>
                                        <div >
                                            <label class="radio-container " style={{ marginRight:"170px" }}>

                                                Yes
                                                <input type="radio"  name='meeting' value='Yes' onChange={indata} />
                                                <span class="checkmark"></span>
                                            </label>
                                            <label class="radio-container"  style={{marginLeft:"-140px"}}>No
                                                <input type="radio"  name='meeting' value='No' onChange={indata} />
                                                <span class="checkmark"></span>
                                            </label>
                                        </div>
                                    </div>
                                  
                                    <div class="form-row col-lg-6" style={{ paddingTop:"20px",   }}>
                                        <label class="label label--block">Have A Gym Service In Your Hotel ?</label>
                                         <div  style={{marginTop:"10px"}}>
                                            <label class="radio-container " style={{ marginRight:"170px" }}>

                                                Yes
                                                <input type="radio"  name='gym' value='Yes' onChange={indata} />
                                                <span class="checkmark"></span>
                                            </label>
                                            <label class="radio-container"  style={{marginLeft:"-140px"}}>No
                                                <input type="radio"  name='gym' value='No' onChange={indata} />
                                                <span class="checkmark"></span>
                                            </label>
                                        </div>
                                        
                                    </div>


                                    <div class="form-row col-lg-6" style={{ paddingTop:"20px",   }}>
                                        <label class="label label--block">Have A Health Service In Your Hotel ?</label>
                                         <div  style={{marginTop:"10px"}}>
                                            <label class="radio-container " style={{ marginRight:"170px" }}>

                                                Yes
                                                <input type="radio"  name='health' value='Yes' onChange={indata} />
                                                <span class="checkmark"></span>
                                            </label>
                                            <label class="radio-container"   style={{marginLeft:"-140px"}}>No
                                                <input type="radio"  name='health' value='No' onChange={indata} />
                                                <span class="checkmark"></span>
                                            </label>
                                        </div>
                                        
                                    </div>



                                    <div class="form-row col-lg-6" style={{ paddingTop:"20px",   }}>
                                        <label class="label label--block">Have A Parking In Your Hotel ?</label>
                                         <div  style={{marginTop:"10px"}}>
                                            <label class="radio-container " style={{ marginRight:"170px" }}>

                                                Yes
                                                <input type="radio"  name='parking' value='Yes' onChange={indata} />
                                                <span class="checkmark"></span>
                                            </label>
                                            <label class="radio-container"  style={{marginLeft:"-140px"}}>No
                                                <input type="radio"  name='parking' value='No' onChange={indata} />
                                                <span class="checkmark"></span>
                                            </label>
                                        </div>
                                        
                                    </div>


                                    <div class="form-row col-lg-6" style={{ paddingTop:"20px",   }}>
                                        <label class="label label--block">Have A Restaurant In Your Hotel ?</label>
                                         <div  style={{marginTop:"10px"}}>
                                            <label class="radio-container " style={{ marginRight:"170px" }}>

                                                Yes
                                                <input type="radio"  name='restaurant' value='Yes' onChange={indata} />
                                                <span class="checkmark"></span>
                                            </label>
                                            <label class="radio-container"  style={{marginLeft:"-140px"}}>No
                                                <input type="radio"  name='restaurant' value='No' onChange={indata} />
                                                <span class="checkmark"></span>
                                            </label>
                                        </div>
                                        
                                    </div>




                                    <div class="form-row col-lg-6" style={{ paddingTop:"20px",   }}>
                                        <label class="label label--block">Have A Wi-Fi Service In Your Hotel ?</label>
                                         <div  style={{marginTop:"10px"}}>
                                            <label class="radio-container " style={{ marginRight:"170px" }}>

                                                Yes
                                                <input type="radio"  name='wifi' value='Yes' onChange={indata} />
                                                <span class="checkmark"></span>
                                            </label>
                                            <label class="radio-container"  style={{marginLeft:"-140px"}}>No
                                                <input type="radio"  name='wifi' value='No' onChange={indata} />
                                                <span class="checkmark"></span>
                                            </label>
                                        </div>
                                        
                                    </div>


                                </div>
                                <button class="btn btn--radius-2 btn--blue" type="submit">Update</button>

                            </form>

                        </div>
                    </div>
                </div>
                </div>
                
            </>
            )

}

            export default Facilitiesedit












// <div className="bg4">

// <div className='mainsigndiv'>

//     <form method='POST' onSubmit={updateuser} encType='multipart/form-data'>
//         <div class="container">
//             <h1>Facilities Edit</h1>
//             <p>Please fill in this form to create an facilities section.</p>
//             <hr />


//             <div className="row">
//                 <div className='col-lg-4'>

//                     <label className='faci-head'><b>Are You Provide Computer Service</b></label> <br />
//                     <input type="radio" className='radio' name='computer' value='Yes' onChange={indata} /> <label className='radio-label'> Yes</label>
//                     <input type="radio" className='radio' name='computer' value='No' onChange={indata} /> <label className='radio-label'> No</label>
//                 </div>

//                 <div className='col-lg-4'>
//                     <label className='faci-head'><b>Have A Conference And Meeting Room In Your Hotel ?</b></label> <br />
//                     <input type="radio" className='radio' name='meeting' value='Yes' onChange={indata} /> <label className='radio-label'> Yes</label>
//                     <input type="radio" className='radio' name='meeting' value='No' onChange={indata} /><label className='radio-label'> No</label>
//                 </div>

//                 <div className='col-lg-4'>
//                     <label className='faci-head'><b>Have A Gym Service In Your Hotel ?</b></label> <br />
//                     <input type="radio" className='radio' name='gym' value='Yes' onChange={indata} /> <label className='radio-label'> Yes</label>
//                     <input type="radio" className='radio' name='gym' value='No' onChange={indata} /> <label className='radio-label'> No</label>
//                 </div>

//             </div>

//             <hr />
//             <div className="row mt-5">
//                 <div className='col-lg-4'>

//                     <label className='faci-head'><b>Have A Health Service In Your Hotel ?</b></label> <br />
//                     <input type="radio" className='radio' name='health' value='Yes' onChange={indata} /> <label className='radio-label'> Yes</label>
//                     <input type="radio" className='radio' name='health' value='No' onChange={indata} /> <label className='radio-label'> No</label>
//                 </div>

//                 <div className='col-lg-4'>

//                     <label className='faci-head'><b>Have A Parking In Your Hotel ?</b></label> <br />
//                     <input type="radio" className='radio' name='parking' value='Yes' onChange={indata} /> <label className='radio-label'> Yes</label>
//                     <input type="radio" className='radio' name='parking' value='No' onChange={indata} /> <label className='radio-label'> No</label>
//                 </div>

//                 <div className='col-lg-4'>
//                     <label className='faci-head'><b>Have A Restaurant In Your Hotel ?</b></label> <br />
//                     <input type="radio" className='radio' name='restaurant' value='Yes' onChange={indata} /> <label className='radio-label'> Yes</label>
//                     <input type="radio" className='radio' name='restaurant' value='No' onChange={indata} /> <label className='radio-label'> No</label>
//                 </div>


//             </div>

//             <hr />


//             <div className="row mt-5 mb-5">
//                 <div className='col-lg-4'>

//                     <label className='faci-head'><b>Have A Wi-Fi Service In Your Hotel ?</b></label> <br />
//                     <input type="radio" className='radio' name='wifi' value='Yes' onChange={indata} /> <label className='radio-label'> Yes</label>
//                     <input type="radio" className='radio' name='wifi' value='No' onChange={indata} /> <label className='radio-label'> No</label>
//                 </div>




//             </div>


//             <hr />

//             <div class="clearfix">

//                 <button type="submit" class="btn btn-success signbtn">Update</button>
//             </div>
//         </div>

//     </form>
// </div>
// </div>