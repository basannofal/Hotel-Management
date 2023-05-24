import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import WavesIcon from '@mui/icons-material/Waves';
import RoomServiceIcon from '@mui/icons-material/RoomService';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';



const CLhotelmenu = () => {

  const { id } = useParams("");
  const [getuserdata, setuserdata] = useState([]);
  const [submenu, setsubmenu] = useState([]);

  const [arr, setarr] = useState([]);
  const [menuarr, setmenuarr] = useState([]);

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
      setmenuarr(data.mainmenu)
      console.log(data);
      selectmenu(data);
      
    }

  }


  const selectmenu = async(e) => {
    const data = e.mainmenu
    console.log(data);
    for (let i = 0; i < data.length; i++) {
      if(data[i].arrname === e.select_menu  )
      {
         setsubmenu(data[i].submenuarray)
        console.log(data[i].submenuarray);
        return(1);
      }
      else if (e.select_menu  === 'default')
      {
        setsubmenu(e.addmenu)
        return(1);
      }
     
      
    }
  }


  useEffect(() => {
    Perperson();
  }, [])


  return (
    <>
     
      <header class=" introofhotel" style={{ height: "100vh" }}>
        <div className='introhotelimg' style={{ width: "100%" }}>

          <img src={require('./assets/img/slide/slide-3.jpg')} style={{ height: "100vh", width: "100%" }} alt="" />
        </div>
        <div className="introhoteldic" >

          <h1 class="tm-mt-0 tm-mb-15 text-center introheading"><span style={{ color: 'rgb(25, 108, 225)', fontSize: '5rem' }}>{getuserdata.hname}</span> <span style={{ color: 'white' }}>Hotel</span></h1>
          <em className='introshort' style={{ color: 'white' }}>Hotel Menu</em>
        </div>
      </header>
      <section className='introsec'>

        <div className="partofsecintro">
          <div className="row ">
            <div className="col-lg-12 introlowheading">
              <h1> &bull; Hotel {getuserdata.hname} Menu List </h1>
            </div>

          </div>

        

          {
            (getuserdata.select_menu === 'default') ? 
            

            <div className="main_menu mt-5">
            <div className="upper_menu">

              <div className="none_veg">
                <h1 className='my-4 menu_head'>Non Veg</h1>
                <ul>

                  {

                  

                    submenu.map((element, id) => {
                      return (<>

                        {element.dishcategory == 'Non Veg' ? <li className="menu_item">{element.dishname}  <span className=' menu_price' >{element.prize}<CurrencyRupeeIcon fontSize='small' /></span></li> : ''}


                      </>
                      )
                    })

                  }
                </ul>
              </div>
              <div className="none_veg">
                <h1 className='my-4 menu_head'>Veg</h1>
                <ul>

                  {
                    submenu.map((element, id) => {
                      return (<>

                        {element.dishcategory == 'Veg' ? <li className="menu_item">{element.dishname}  <span className=' menu_price' >{element.prize}<CurrencyRupeeIcon fontSize='small' /></span></li> : ''}


                      </>
                      )
                    })

                  }
                </ul>
              </div>
            </div>

            <div className="upper_menu">

              <div className="none_veg">
                <h1 className='my-4 menu_head'>Roti</h1>
                <ul>

                  {
                    submenu.map((element, id) => {
                      return (<>

                        {element.dishcategory == 'Roti' ? <li className="menu_item">{element.dishname}  <span className=' menu_price' >{element.prize}<CurrencyRupeeIcon fontSize='small' /></span></li> : ''}


                      </>
                      )
                    })

                  }
                </ul>
              </div>
              <div className="none_veg">
                <h1 className='my-4 menu_head'>Drink</h1>
                <ul>

                  {
                    submenu.map((element, id) => {
                      return (<>

                        {element.dishcategory == 'Drink' ? <li className="menu_item">{element.dishname}  <span className=' menu_price' >{element.prize}<CurrencyRupeeIcon fontSize='small' /></span></li> : ''}


                      </>
                      )
                    })

                  }
                </ul>
              </div>
            </div>




          </div>
            
            
             :

          <div className="main_menu mt-5">
            <div className="upper_menu">

              <div className="none_veg">
                <h1 className='my-4 menu_head'>Non Veg</h1>
                <ul>

                  {

                  

                    submenu.map((element, id) => {
                      return (<>

                        {element.dishcategory1 == 'Non Veg' ? <li className="menu_item">{element.dishname1}  <span className=' menu_price' >{element.prize1}<CurrencyRupeeIcon fontSize='small' /></span></li> : ''}


                      </>
                      )
                    })

                  }
                </ul>
              </div>
              <div className="none_veg">
                <h1 className='my-4 menu_head'>Veg</h1>
                <ul>

                  {
                    submenu.map((element, id) => {
                      return (<>

                        {element.dishcategory1 == 'Veg' ? <li className="menu_item">{element.dishname1}  <span className=' menu_price' >{element.prize1}<CurrencyRupeeIcon fontSize='small' /></span></li> : ''}


                      </>
                      )
                    })

                  }
                </ul>
              </div>
            </div>

            <div className="upper_menu">

              <div className="none_veg">
                <h1 className='my-4 menu_head'>Roti</h1>
                <ul>

                  {
                    submenu.map((element, id) => {
                      return (<>

                        {element.dishcategory1 == 'Roti' ? <li className="menu_item">{element.dishname1}  <span className=' menu_price' >{element.prize1}<CurrencyRupeeIcon fontSize='small' /></span></li> : ''}


                      </>
                      )
                    })

                  }
                </ul>
              </div>
              <div className="none_veg">
                <h1 className='my-4 menu_head'>Drink</h1>
                <ul>

                  {
                    submenu.map((element, id) => {
                      return (<>

                        {element.dishcategory1 == 'Drink' ? <li className="menu_item">{element.dishname1}  <span className=' menu_price' >{element.prize1}<CurrencyRupeeIcon fontSize='small' /></span></li> : ''}


                      </>
                      )
                    })

                  }
                </ul>
              </div>
            </div>




          </div>
          }
        </div>


        <div id="tm-video-container">

          <i id="tm-video-control-button" class="fas fa-pause"></i>
        </div>
        <div class="tm-container">
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
                <NavLink to={`/hotelcontact/${getuserdata._id}`}>

                  <a class="tm-nav-link">
                    Contact
                    <i> <ConnectWithoutContactIcon style={{ fontSize: '80px' }} /></i>
                  </a>
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>


      </section>
    </>
  )
}

export default CLhotelmenu