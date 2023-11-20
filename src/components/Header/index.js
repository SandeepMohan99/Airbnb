import React from 'react'
import "./style.css"
import logo from "../../assets/logo/long-logo.png"
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import BasicMenu from './ProfileMenu';
import SimpleBottomNavigation from './BottomNav';
import MobileSearchBar from '../MobilesearchBar';

function Header() {
  return (
    <div className='navbar'>
      <img src={logo} alt="logo" className='navbar-logo'/>
      <div className="search-bar">
        <div className="search-bar-text">Any Where</div>
        <div className="search-bar-text">Any Week</div>
        <div className="search-bar-text2">Add Guest</div>
        <div className='search-icon-div'>
        <SearchIcon className="search-icon"/>
        </div>
      </div>
      <div className="profile-container">
        <div className='airbnb-your-home'>Airbnb your home</div>
        <div className='airbnb-your-home'><LanguageIcon style={{fontSize:'1.3rem'}}/></div>
        <div className="profile-div"><BasicMenu/></div>

      </div>
      <MobileSearchBar/>
      <SimpleBottomNavigation/>
    </div>
  )
}

export default Header