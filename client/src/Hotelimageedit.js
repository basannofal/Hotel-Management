import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from "react-router-dom";
import axios from 'axios'
import FormData from 'form-data'

const Hotelimageedit = () => {

    const naviget = useNavigate();

    const [user, setuser] = useState({
        himage: '',
    })
    const [image, setimage] = useState('')


    const handlephoto = (e) => {
        setimage({ himage: e.target.files[0] });
        setuser({ himage: e.target.files[0] });

    }


  

    const { id } = useParams("");
    console.log(id);




    const updateuser = async (e) => {
        e.preventDefault();


        const { himage } = user


        let formData = new FormData();
        formData.append('himage', himage);
        console.log(himage);

        const formdataobj = Object.fromEntries(formData.entries());
        console.log(formdataobj);


        const url = `http://localhost:8000/imageedit/${id}`

       
        const config = {
            headers: { 'content-type': 'multipart/form-data' }
        }

        try {
            console.log('alya');
            console.log(formdataobj);
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

            <div className="bg4">

                <div className='mainsigndiv'>

                    <form method='POST' onSubmit={updateuser} encType='multipart/form-data'>
                        <div class="container">
                       
                            <h1>Hotel Image Update</h1>
                            <p>Enter Your Hotel Image..</p>
                            <hr />





                            <div className="row mt-5 mb-5">


                                <div className='col-lg-4'>

                                    <label><b>Upload Hotel Image</b></label> <br />
                                    <input onChange={handlephoto} type="file" className='radio' name='himage' />
                                </div>


                            </div>


                            <hr />

                            <div class="clearfix">

                                <button type="submit" class="btn btn-success signbtn">Update</button>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </>
    )
}

export default Hotelimageedit
























 // const res = await fetch(`/imageedit/${id}`, {
        //     method: "PATCH",
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify({
        //         himage 
        //   })
        // })
        // const data2 = await res.json();
        // console.log(data2);
        // if (!data2) {
        //     window.alert('error in get data2')
        // }
        // else {
        //     // setuser(data2)
        //     // naviget(`/hotelinfo/${data2._id}`, { replace: true })
        //     window.alert("data updated")
        //     // console.log('data2 goted by api');
        // }



















          // const postdetail =async (e) => {
    //     e.preventDefault();
    //     const { himage } = user
        
    //     const Data = new FormData();
    //     Data.append('himage', himage);
    //     Data.append('upload_present', 'mernproject')
    //     Data.append('cloud_name', 'mernproject04')

    //     console.log(Data);
    //     const formdataobj = Object.fromEntries(Data.entries());
    //     console.log(formdataobj);
    
    //     fetch(`https://api.cloudinary.com/v1_1/mernproject04/image/upload`, {
    //         method: "POST",
    //         body: Data
    //     })
    //     .then(res => res.json())
    //     .then(data =>{
    //         console.log(data);
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     })
    // }