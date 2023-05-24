import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

const Perhoteldata = ({ getuserdata }) => {

    const id = () => {
        getuserdata.map((element, id) => {

            console.log(element.himage);
        
        })

    }
    useEffect(()=>{
        id();
    })
    return (
        <>
            {
                getuserdata.map((element, id) => {
                    return (<>



                        <ul>

                            <li class="card">
                                <span class="featured-image" >
                                    <NavLink to={`/hoteldetail/${element._id}`} >
                                        {
                                            (!element.himage) ?
                                                <img src="./img/gallery/gallery-4.jpg" className='hoim' alt="" />

                                                :
                                                <img className='hoim' src={require(`../src/uploads/${element.himage}`)} alt="why" />
                                                
                                        }
                                                
                                    </NavLink>
                                </span>
                                <article class="card-body">
                                    <header>
                                        <NavLink to={`/hoteldetail/${element._id}`} >


                                            <h3 className='h-name'>{element.hname}</h3>

                                            <p class="meta">
                                                <span class="author h-detail">{element.honame}</span>

                                            </p>
                                            <p class="meta">

                                                <time class="updated h-detail" datetime="" itemprop="datePublished">{element.address}</time>
                                            </p>
                                            <p class="meta">

                                                <time class="updated h-detail" datetime="" itemprop="datePublished "> contact :-  {element.mobile}</time>
                                            </p>


                                        </NavLink>
                                    </header>

                                </article>
                            </li>

                        </ul>


                    </>)
                })
            }
        </>
    )
}

export default Perhoteldata