import React from 'react'
import CompanyBrand from './CompanyBrand'
import ContactNo from './ContactNo'
import MenuTop from './MenuTop'
import SearchBar from './SearchBar'


const Topbar = () => {

  return (
    <div className="container-fluid">
      <MenuTop/>
    <div className="row align-items-center bg-light py-3 px-xl-5">
        <CompanyBrand/>
        <SearchBar/>
        <ContactNo/>
    </div>
    </div>
  )
}

export default Topbar
