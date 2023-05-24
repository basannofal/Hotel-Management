import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Button from '@mui/material/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';





const Addmenu = () => {

  const navigate = useNavigate();


  const toggele = () => {

    var hamburger = document.querySelector(".hamburger");
    hamburger.addEventListener("click", function () {
      document.querySelector("body").classList.toggle("active");
    })
  }

  const [open, setOpen] = useState(false);





  const { id } = useParams("");
  const [getuserdata, setuserdata] = useState([]);
  const [arr, setarr] = useState([]);
  const [multimenu, setmultimenu] = useState([]);

  const [user, setuser] = useState({
    dishname: '',
    prize: '',
    dishcategory: '',
    aname : '',
    dishcategory1 : '',
    dishname1 : '',
    prize1 : '',
    select_menu : '',

  })
  let name, value;
  const indata = (e) => {
    name = e.target.name;
    value = e.target.value;

    setuser({ ...user, [name]: value })
  }






  // ***************** ADD LIST DATA *****************************
  const updateuser = async (e) => {
    e.preventDefault();

    const { dishname, prize, dishcategory } = user


    const res2 = await fetch(`/addmenu/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        dishname, prize, dishcategory
      })
    })

    const data2 = await res2.json();
    console.log(data2);
    if (!data2) {
      window.alert('error in get data2')
    }
    else {
      setuser(data2);
      navigate(`/addmenu/${id}`, { replace: true })
      Perperson();
      
      window.alert("data updated")
      // window.location.reload(false);
      setOpen(true);
      document.getElementById('dishname').value=''
      document.getElementById('price').value=''
      document.getElementById('dishcategoryi').value=''

      

    }

  }


  //**************************** GET DATA  *****************************/

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
      setuserdata(data);
      setarr(data.addmenu)
      setmultimenu(data.mainmenu)
      console.log(arr);
      console.log(getuserdata);
    }

  }

  useEffect(() => {
    Perperson();
    
  }, [])




  //**************************** DELETE DATA  *****************************/





  const deleteuser = async (nid) => {

    
    const res7 = await fetch(`/addmenudelete/${nid}/${id}`, {
      method: "GET",
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
      navigate(`/addmenu/${id}`, { replace: true })
      console.log('data deleted');
      Perperson()

    }

  }



























  // ******************* multiple menu ***********************************************
  
  const updateuserformainmenu = async (e) => {
    e.preventDefault();

    const { aname } = user


    const res2 = await fetch(`/mainmenu/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        aname
      })
    })

    const data2 = await res2.json();
    console.log(data2);
    if (!data2) {
      window.alert('error in get data2')
    }
    else {
      setuser(data2);
      navigate(`/addmenu/${id}`, { replace: true })
      Perperson();
      
      window.alert("data updated")
      // window.location.reload(false);
      setOpen(true);
      document.getElementById('aname').value=''

      

    }

  }





  const multisubmenu = async(e) => {
    // e.preventDefault();

    console.log(e);

    const { dishname1, prize1, dishcategory1 } = user


    const res2 = await fetch(`/addsubmenu/${e}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        dishname1, prize1, dishcategory1
      })
    })

    const data2 = await res2.json();
    console.log(data2);
    if (!data2) {
      window.alert('error in submenu enter')
    }
    else {
      setuser(data2);
      navigate(`/addmenu/${id}`, { replace: true })
      Perperson();
      
      window.alert("data updated")
      // window.location.reload(false);
      setOpen(true);
      document.getElementById('dishname1').value=''
      document.getElementById('price1').value=''
      document.getElementById('dishcategoryi1').value=''

      

    }
  }


  // ********************************** submenu delete ****************************************
  
  const submenudelete = async (nid) => {

    
    const res7 = await fetch(`/submenudelete/${nid}/${id}`, {
      method: "GET",
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
      navigate(`/addmenu/${id}`, { replace: true })
      console.log('data deleted');
      Perperson()

    }

  }


  // ********************************** multi menu delete *********************************************

  const submenuarrdeleteuser = async (nid) => {

    
    const res7 = await fetch(`/submenuarrdelete/${nid}/${id}`, {
      method: "GET",
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
      navigate(`/addmenu/${id}`, { replace: true })
      console.log('data deleted');
      Perperson()

    }

  }
  
// ********************************************* set menu ******************************************

  const setmenu = async(e) => {
    e.preventDefault();

    const { select_menu } = user


    const res2 = await fetch(`/edit/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        select_menu
      })
    })

    const data2 = await res2.json();
    console.log(data2);
    if (!data2) {
      window.alert('error in get data2')
    }
    else {
      setuser(data2);
      navigate(`/addmenu/${id}`, { replace: true })
      Perperson();
      window.alert("Save Menu Successfully");
      setOpen(true);
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

          <div className="row">
            
    <Box sx={{ width: '100%' }}>
      <Collapse in={open}>
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
      // window.location.reload(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 , px:5,}}
        >
           New Dish Added

        </Alert>
      </Collapse>
      
    </Box>


          </div>

{/* ************************************maltiple menu create ***************************** */}
          <form method='POST' onSubmit={updateuserformainmenu} style={{ marginTop : "30px"}}>
                  <div class="container form-group">
                    <div className="row">
                      <div className='col-lg-4 ml-5' >
                      <label className='faci-head'><b>Select Menu : </b></label> <br />

                        <select name="select_menu" id="select_menu" onChange={indata} value={getuserdata.select_menu} className='selct_menu'>
                          <option value="default">Defualt</option>
                        { 
                          multimenu.map((ele, id) => {
                            return(<>
                          <option value={ele.arrname}>{ele.arrname}</option>
                            </>)
                          })

                        }
                        </select>
                        <Button onClick={setmenu} color="primary" variant="contained" title='Add Menu' style={{ marginLeft:'10px',padding: "10px"   }}>Save</Button>

                      </div>
                      <div className='col-lg-6 ' >
                        <label className='faci-head'><b>Enter Menu Name : </b></label> <br />
                        <div className='d-flex'>

                        <input required  onChange={indata} id='aname' type="text" style={{ marginTop: '0px', width:"70%" }} className=' form-control' name='aname' />
                        <Button type='submit' color="success" variant="contained" title='Add Menu' style={{ marginLeft:'10px'   }}><AddCircleIcon /></Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
    
    {
      multimenu.map((ele, id) => {
        return (
          <>
          <div className="displaydata" style={{margin:'100px 0 0 0'}}>
          <h3 className='text-center'>{ele.arrname}</h3>
          <form method='POST' >
    <div class="container form-group">
      <div className="row">
        <div className='col-lg-4'>

          <label className='faci-head'><b>Dish Name</b></label> <br />
          <input required  onChange={indata}  id='dishname1' type="text" style={{ marginTop: '0px' }} className=' form-control' name='dishname1' />
        </div>
        <div className='col-lg-3'>

          <label className='faci-head'><b>Price</b></label> <br />
          <input required onChange={indata}  id='price1' type="number" className=' form-control' name='prize1' />
        </div>

        <div className='col-lg-3'>
          <label className='faci-head'><b>Dish Category</b></label> <br />
          <select required onChange={indata}  id='dishcategoryi1' name="dishcategory1" className=' form-control'>
            <option value="Non Veg">Non veg</option>
            <option value="Veg">Veg</option>
            <option value="Roti">Roti</option>
            <option value="Drink">Drink</option>

          </select>
        </div>
        <div className='col-lg-2 '>
      
          <Button onClick={() => multisubmenu(`${ele._id}`)} color="success" variant="contained" title='Add Menu' style={{ marginTop: '34px', marginRight : "10px" }} ><AddCircleIcon /></Button>
          <Button color="primary" variant="contained" onClick={() => submenudelete(ele._id)} title='Delete Data' style={{ marginTop: '34px' }}><DeleteForeverIcon /></Button>
        </div>
      </div>
    </div>
    </form>


    </div>

    <div className="displaydata">
              <table className="table" style={{width:'90%', margin:'auto'}} >
                <thead className='tah'>
                
                  <tr>
                    <th style={{width:'5%', textAlign:"center"}} scope="col text-center">ID</th>
                    <th style={{width:'30%', textAlign:"center"}} scope="col text-center">FOOD NAME</th>
                    <th style={{width:'10%', textAlign:"center"}} scope="col text-center">PRIZE</th>
                    <th style={{width:'20%', textAlign:"center"}} scope="col text-center" >FOOD CATEGORY</th>
                    <th style={{width:'20%', textAlign:"center"}} scope="col text-center" >HANDEL</th>
                  </tr>
                  <tr className='my-2'></tr>
                </thead>
                <tbody>

                  {
                    ele.submenuarray.map((ele, id) => {
                      return (
                        <>
                        <tr>
                                        <th className='text-center'  scope="row" key={ Math.random().toString(36).substr(2, 9) }>{id + 1}</th>
                                        <td className='text-center'>{ele.dishname1} </td>
                                        <td className='text-center'>{ele.prize1} <CurrencyRupeeIcon fontSize='small' /> </td>
                                        <td className='text-center'>{ele.dishcategory1}</td>
                                        <td className='text-center'>
                                            <Button color="error" variant="contained" onClick={() => submenuarrdeleteuser(ele._id)} title='Delete Data' ><DeleteForeverIcon /></Button>
                                        </td>
                                    </tr>
                        </>
                      )
                    })
                    
                  }
                </tbody>
              </table>
            </div>
          </>
        )
      })
      
      
    }




        {/* ************************************maltiple menu create ***************************** */}

            <div className='  mt-5'>

              <div >
                <hr />
                <h3 className='text-center'>Default</h3>

                <form method='POST' onSubmit={updateuser}>
                  <div class="container form-group">



                    <div className="row">
                      <div className='col-lg-4'>

                        <label className='faci-head'><b>Dish Name</b></label> <br />
                        <input required  onChange={indata} id='dishname' type="text" style={{ marginTop: '0px' }} className=' form-control' name='dishname' />
                      </div>
                      <div className='col-lg-3'>

                        <label className='faci-head'><b>Price</b></label> <br />
                        <input required onChange={indata} id='price' type="number" className=' form-control' name='prize' />
                      </div>

                      <div className='col-lg-3'>
                        <label className='faci-head'><b>Dish Category</b></label> <br />
                        <select required onChange={indata} id='dishcategoryi' name="dishcategory" className=' form-control'>
                          <option value="Non Veg">Non veg</option>
                          <option value="Veg">Veg</option>
                          <option value="Roti">Roti</option>
                          <option value="Drink">Drink</option>

                        </select>
                      </div>
                      <div className='col-lg-2 '>
                       
                       
                        {/* <button type="submit" class="btn btn-success addbtn form-control ourbtn" style={{ marginTop: '33px' }}>Add Item</button> */}

                        
                        <Button type='submit' color="success" variant="contained" title='Add Menu' style={{ marginTop: '34px' }}><AddCircleIcon /></Button>
                      </div>
                    </div>



                  </div>

                </form>
                <hr />


              </div>
            </div>


            <div className="displaydata">
              <table className="table" style={{width:'90%', margin:'auto'}} >
                <thead className='tah'>
                
                  <tr>
                    <th style={{width:'5%', textAlign:"center"}} scope="col text-center">ID</th>
                    <th style={{width:'30%', textAlign:"center"}} scope="col text-center">FOOD NAME</th>
                    <th style={{width:'10%', textAlign:"center"}} scope="col text-center">PRIZE</th>
                    <th style={{width:'20%', textAlign:"center"}} scope="col text-center" >FOOD CATEGORY</th>
                    <th style={{width:'20%', textAlign:"center"}} scope="col text-center" >HANDEL</th>
                  </tr>
                  <tr className='my-2'></tr>
                </thead>
                <tbody>

                  {
                    arr.map((ele, id) => {
                      return (
                        <>
                        <tr>
                                        <th className='text-center'  scope="row" key={ Math.random().toString(36).substr(2, 9) }>{id + 1}</th>
                                        <td className='text-center'>{ele.dishname} </td>
                                        <td className='text-center'>{ele.prize} <CurrencyRupeeIcon fontSize='small' /> </td>
                                        <td className='text-center'>{ele.dishcategory}</td>
                                        <td className='text-center'>
                                        
                                            {/* <button  className='btn btn-danger ' onClick={() => deleteuser(ele._id)}> <DeleteForeverIcon /></button> */}

                                            <Button color="error" variant="contained" onClick={() => deleteuser(ele._id)} title='Delete Data' ><DeleteForeverIcon /></Button>

                                            

                                        </td>
                                    </tr>
                        </>
                      )
                    })
                    
                  }
                  

                </tbody>
              </table>
            </div>
            <div className=' row' style={{ paddingBottom: '100px', width: '100%' }}>

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


                <a>
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
                <a class="active">
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

export default Addmenu


















// {
//   multimenu.map((ele, id) => {
//     return (
//       <>
//       <div className="displaydata" style={{margin:'100px 0'}}>
//       <h3 className='text-center'>{ele.arrayname}</h3>
//       <form method='POST' >
// <div class="container form-group">



//   <div className="row">
//     <div className='col-lg-4'>

//       <label className='faci-head'><b>Dish Name</b></label> <br />
//       <input required  onChange={indata} id='dishname1' type="text" style={{ marginTop: '0px' }} className=' form-control' name='dishname1' />
//     </div>
//     <div className='col-lg-3'>

//       <label className='faci-head'><b>Price</b></label> <br />
//       <input required onChange={indata} id='price1' type="number" className=' form-control' name='prize1' />
//     </div>

//     <div className='col-lg-3'>
//       <label className='faci-head'><b>Dish Category</b></label> <br />
//       <select required onChange={indata} id='dishcategoryi1' name="dishcategory1" className=' form-control'>
//         <option value="Non Veg">Non veg</option>
//         <option value="Veg">Veg</option>
//         <option value="Roti">Roti</option>
//         <option value="Drink">Drink</option>

//       </select>
//     </div>
//     <div className='col-lg-2 '>
     
     
//       {/* <button type="submit" class="btn btn-success addbtn form-control ourbtn" style={{ marginTop: '33px' }}>Add Item</button> */}

      
//       <Button onClick={() => multisubmenu(`${ele._id}`)} color="success" variant="contained" title='Add Menu' style={{ marginTop: '34px' }}><AddCircleIcon /></Button>
//     </div>
//   </div>



// </div>

// </form>
// <table className="table" style={{width:'90%', margin:'auto'}} >
// <thead className='tah'>

// <tr>
//   <th style={{width:'5%', textAlign:"center"}} scope="col text-center">ID</th>
//   <th style={{width:'30%', textAlign:"center"}} scope="col text-center">FOOD NAME</th>
//   <th style={{width:'10%', textAlign:"center"}} scope="col text-center">PRIZE</th>
//   <th style={{width:'20%', textAlign:"center"}} scope="col text-center" >FOOD CATEGORY</th>
//   <th style={{width:'20%', textAlign:"center"}} scope="col text-center" >HANDEL</th>
// </tr>
// <tr className='my-2'></tr>
// </thead>
// <tbody>

// </tbody>
// </table>
// </div>
//       </>
//     )
//   })
  
  
// }