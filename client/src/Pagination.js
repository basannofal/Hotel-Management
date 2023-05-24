import React from 'react'
import { NavLink } from 'react-router-dom';

const Pagination = ({postperpage, totalpost,paginate}) => {

    const pagenumber = [];
    for (let i = 1; i <= Math.ceil(totalpost / postperpage); i++) {
        pagenumber.push(i);
        
    }

  return (
    <div className='text-center container1'>
        
            <ul className='pagination' >
                {pagenumber.map(number => (
                    <li key={number} className='pageitem' >
                        <NavLink onClick={() => paginate(number)} to='#' className='pagelink'> {number} </NavLink>
                    </li>
                ))}
            </ul>
        
    </div>
  )
}

export default Pagination