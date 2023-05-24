import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from "react-router-dom";



const Hotelserviceedit = () => {
  
    
    const naviget = useNavigate();

  
    
    
    const [user, setuser] = useState({
        carrent : '',
    catering : '',
    courier : '',
    doctor : '',
    drycleaning : '',
    ironing : '',
    laundry : '',
    massages  :'',
    roomservice  :'',
    ticket  :'',

    })
    let name, value;
    const indata = (e) => {
      name  = e.target.name;
      value = e.target.value;
  
      setuser({...user, [name]:value})
    }
  
  


    const {id} = useParams("");
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
    },[])

    const updateuser = async (e) => { 
        e.preventDefault();
     
        const { carrent , catering,  courier,  doctor,  drycleaning ,  ironing ,  laundry, massages, roomservice, ticket } = user


        const res2 = await fetch(`/edit/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                carrent , catering,  courier,  doctor,  drycleaning ,  ironing ,  laundry, massages, roomservice, ticket 
          })
        })

        const data2 = await res2.json();
        console.log(data2);
        if (!data2) {
            window.alert('error in get data2')
        }
        else {
            setuser(data2)
            naviget(`/hotelinfo/${data2._id}`, {replace:true})
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
            <h2 class="title">Services Edit Form</h2>
        </div>
        <div class="card-body">
            <form  method='POST' onSubmit={updateuser} >

                <div class="row">

                    <div class="form-row col-lg-6" style={{ paddingTop:"20px",   }}>
                        <label class="label label--block">Are You Provide Car Rental Service</label>
                         <div  style={{marginTop:"10px"}}>
                            <label class="radio-container " style={{ marginRight:"170px" }}>

                                Yes
                                <input type="radio"  name='carrent' value='Yes' onChange={indata} />
                                <span class="checkmark"></span>
                            </label>
                            <label class="radio-container"  style={{marginLeft:"-140px"}}>No
                                <input type="radio"  name='carrent' value='No' onChange={indata} />
                                <span class="checkmark"></span>
                            </label>
                        </div>
                    </div>
                    
                    <div class="form-row col-lg-6" style={{ paddingTop:"20px",   }}>
                        <label class="label label--block ">Are You Provide Catering Room</label>
                        <div >
                            <label class="radio-container " style={{ marginRight:"170px" }}>

                                Yes
                                <input type="radio"  name='catering' value='Yes' onChange={indata} />
                                <span class="checkmark"></span>
                            </label>
                            <label class="radio-container"  style={{marginLeft:"-140px"}}>No
                                <input type="radio"  name='catering' value='No' onChange={indata} />
                                <span class="checkmark"></span>
                            </label>
                        </div>
                    </div>
                  
                    <div class="form-row col-lg-6" style={{ paddingTop:"20px",   }}>
                        <label class="label label--block">Are You Provide Courier Service ?</label>
                         <div  style={{marginTop:"10px"}}>
                            <label class="radio-container " style={{ marginRight:"170px" }}>

                                Yes
                                <input type="radio"  name='courier' value='Yes' onChange={indata} />
                                <span class="checkmark"></span>
                            </label>
                            <label class="radio-container"  style={{marginLeft:"-140px"}}>No
                                <input type="radio"  name='courier' value='No' onChange={indata} />
                                <span class="checkmark"></span>
                            </label>
                        </div>
                        
                    </div>


                    <div class="form-row col-lg-6" style={{ paddingTop:"20px",   }}>
                        <label class="label label--block">Are You Provide Doctor On Call Service ?</label>
                         <div  style={{marginTop:"10px"}}>
                            <label class="radio-container " style={{ marginRight:"170px" }}>

                                Yes
                                <input type="radio"  name='doctor' value='Yes' onChange={indata} />
                                <span class="checkmark"></span>
                            </label>
                            <label class="radio-container"   style={{marginLeft:"-140px"}}>No
                                <input type="radio"  name='doctor' value='No' onChange={indata} />
                                <span class="checkmark"></span>
                            </label>
                        </div>
                        
                    </div>



                    <div class="form-row col-lg-6" style={{ paddingTop:"20px",   }}>
                        <label class="label label--block">Are You Provide Ticket Service ?</label>
                         <div  style={{marginTop:"10px"}}>
                            <label class="radio-container " style={{ marginRight:"170px" }}>

                                Yes
                                <input type="radio"  name='ticket' value='Yes' onChange={indata} />
                                <span class="checkmark"></span>
                            </label>
                            <label class="radio-container"  style={{marginLeft:"-140px"}}>No
                                <input type="radio"  name='ticket' value='No' onChange={indata} />
                                <span class="checkmark"></span>
                            </label>
                        </div>
                        
                    </div>


                    <div class="form-row col-lg-6" style={{ paddingTop:"20px",   }}>
                        <label class="label label--block">Are You Provide Ironing Services ?</label>
                         <div  style={{marginTop:"10px"}}>
                            <label class="radio-container " style={{ marginRight:"170px" }}>

                                Yes
                                <input type="radio"  name='ironing' value='Yes' onChange={indata} />
                                <span class="checkmark"></span>
                            </label>
                            <label class="radio-container"  style={{marginLeft:"-140px"}}>No
                                <input type="radio"  name='ironing' value='No' onChange={indata} />
                                <span class="checkmark"></span>
                            </label>
                        </div>
                        
                    </div>




                    <div class="form-row col-lg-6" style={{ paddingTop:"20px",   }}>
                        <label class="label label--block">Are You Provide Laundry Service ?</label>
                         <div  style={{marginTop:"10px"}}>
                            <label class="radio-container " style={{ marginRight:"170px" }}>

                                Yes
                                <input type="radio"  name='laundry' value='Yes' onChange={indata} />
                                <span class="checkmark"></span>
                            </label>
                            <label class="radio-container"  style={{marginLeft:"-140px"}}>No
                                <input type="radio"  name='laundry' value='No' onChange={indata} />
                                <span class="checkmark"></span>
                            </label>
                        </div>
                        
                    </div>

                    <div class="form-row col-lg-6" style={{ paddingTop:"20px",   }}>
                        <label class="label label--block">Are You Provide Massages Service ?</label>
                         <div  style={{marginTop:"10px"}}>
                            <label class="radio-container " style={{ marginRight:"170px" }}>

                                Yes
                                <input type="radio"  name='massages' value='Yes' onChange={indata} />
                                <span class="checkmark"></span>
                            </label>
                            <label class="radio-container"  style={{marginLeft:"-140px"}}>No
                                <input type="radio"  name='massages' value='No' onChange={indata} />
                                <span class="checkmark"></span>
                            </label>
                        </div>
                        
                    </div><div class="form-row col-lg-6" style={{ paddingTop:"20px",   }}>
                        <label class="label label--block">Are You Provide Room Service ?</label>
                         <div  style={{marginTop:"10px"}}>
                            <label class="radio-container " style={{ marginRight:"170px" }}>

                                Yes
                                <input type="radio"  name='roomservice' value='Yes' onChange={indata} />
                                <span class="checkmark"></span>
                            </label>
                            <label class="radio-container"  style={{marginLeft:"-140px"}}>No
                                <input type="radio"  name='roomservice' value='No' onChange={indata} />
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

export default Hotelserviceedit


















// <div className="bg4">

// <div className='mainsigndiv'>

//     <form method='POST' onSubmit={updateuser}>
//         <div class="container">
//             <h1>Services Edit</h1>
//             <p>Please fill in this form to create an facilities section.</p>
//             <hr />


//             <div className="row">
//                 <div className='col-lg-4'>

//                     <label className='faci-head'><b>Are You Provide Car Rental Service</b></label> <br />
//                     <input type="radio" className='radio' name='carrent' value='Yes' onChange={indata} /> <label className='radio-label'> Yes</label>
//                     <input type="radio" className='radio' name='carrent' value='No' onChange={indata} /> <label className='radio-label'> No</label>
//                 </div>

//                 <div className='col-lg-4'>
//                 <label className='faci-head'><b>Are You Provide Catering Room</b></label> <br />
//                     <input type="radio" className='radio' name='catering' value='Yes' onChange={indata} /> <label className='radio-label'> Yes</label>
//                     <input type="radio" className='radio' name='catering' value='No' onChange={indata} /><label className='radio-label'> No</label>
//                 </div>

//                 <div className='col-lg-4'>
//                    <label className='faci-head'><b>Are You Provide Courier Service</b></label> <br />
//                     <input type="radio" className='radio' name='courier' value='Yes' onChange={indata} /> <label className='radio-label'> Yes</label>
//                     <input type="radio" className='radio' name='courier' value='No' onChange={indata} /> <label className='radio-label'> No</label>
//                 </div>

//             </div>
            
//             <hr />
//             <div className="row mt-5">
//                 <div className='col-lg-4'>

//                 <label className='faci-head'><b>Are You Provide Doctor On Call Service</b></label> <br />
//                     <input type="radio" className='radio' name='doctor' value='Yes' onChange={indata} /> <label className='radio-label'> Yes</label>
//                     <input type="radio" className='radio' name='doctor' value='No' onChange={indata} /> <label className='radio-label'> No</label>
//                 </div>

//                 <div className='col-lg-4'>
                
//                 <label className='faci-head'><b>Are You Provide Ticket Service</b></label> <br />
//                     <input type="radio" className='radio' name='ticket' value='Yes' onChange={indata} /> <label className='radio-label'> Yes</label>
//                     <input type="radio" className='radio' name='ticket' value='No' onChange={indata} /> <label className='radio-label'> No</label>
//                 </div>

//                 <div className='col-lg-4'>
//                 <label className='faci-head'><b>Are You Provide Ironing Services</b></label> <br />
//                     <input type="radio" className='radio' name='ironing' value='Yes' onChange={indata} /> <label className='radio-label'> Yes</label>
//                     <input type="radio" className='radio' name='ironing' value='No' onChange={indata} /> <label className='radio-label'> No</label>
//                 </div>


//             </div>

//                 <hr />


//             <div className="row mt-5 mb-5">
//                 <div className='col-lg-4'>

//                 <label className='faci-head'><b>Are You Provide Laundry Service</b></label> <br />
//                     <input type="radio" className='radio' name='laundry' value='Yes' onChange={indata} /> <label className='radio-label'> Yes</label>
//                     <input type="radio" className='radio' name='laundry' value='No' onChange={indata} /> <label className='radio-label'> No</label>
//                 </div>

//                 <div className='col-lg-4'>
//                 <label className='faci-head'><b>Are You Provide Massages Service</b></label> <br />
//                     <input type="radio" className='radio' name='massages' value='Yes' onChange={indata} /> <label className='radio-label'> Yes</label>
//                     <input type="radio" className='radio' name='massages' value='No' onChange={indata} /> <label className='radio-label'> No</label>
//                 </div>

//                 <div className='col-lg-4'>
//                 <label className='faci-head'><b>Are You Provide Room Service</b></label> <br />
//                     <input type="radio" className='radio' name='roomservice' value='Yes' onChange={indata} /> <label className='radio-label'> Yes</label>
//                     <input type="radio" className='radio' name='roomservice' value='No' onChange={indata} /> <label className='radio-label'> No</label>
//                 </div>




//             </div>


//             <hr />

//             <div class="clearfix">

//                 <button type="submit"  class="btn btn-success signbtn">Update</button> 
//                 </div>
//         </div>
        
//     </form>
// </div>
// </div>




























