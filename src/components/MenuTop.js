import React from 'react'
import {NavLink} from 'react-router-dom'

const MenuTop = () => {
  return (
    <>
      <div className="row bg-secondary py-1 px-xl-5">
        <div className="col-lg-6 d-none d-lg-block">
            <div className="d-inline-flex align-items-center h-100">
                <NavLink to="/AboutUs" className="text-body mr-3">About</NavLink>
                <NavLink to="/ContactUs" className="text-body mr-3">Contact</NavLink>
                <NavLink to="/Help" className="text-body mr-3">Help</NavLink>
                <NavLink to="FAQs" className="text-body mr-3">FAQs</NavLink>
            </div>
        </div>
        <div className='col-lg-6 text-center text-lg-right'>
            <div className='d-inline-flex align-items-center'>
                <div className='btn-group'>
                    <button type='button'className='btn btn-sm btn-light dropdown-toggle' data-toggle="dropdown">My Account</button>
                    <div className='dropdown-menu dropdown-menu-right'><button className='dropdown-item'type="button">Sign in</button><button className='dropdown-item'type="button">Sign up</button></div>
                </div>
                <div className='btn-group mx-2'>
                    <button type='button'className='btn btn-sm btn-light dropdown-toggle'data-toggle="dropdown">USD</button>
                    <div className='="dropdown-menu dropdown-menu-right'><button className='dropdown-item'type="button">EUR</button><button className='dropdown-item'type="button">GBP</button><button className='dropdown-item'type="button">CAD</button></div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default MenuTop
