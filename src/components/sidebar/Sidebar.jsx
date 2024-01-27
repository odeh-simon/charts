import React from 'react';
import './Sidebar.css';
import settingIcon from '../../assets/setting-2.svg'
import vectorIcon from '../../assets/Vector.svg'
import categoryIcon from '../../assets/category.png'
import trendupIcon from '../../assets/trend-up.svg'
import profileIcon from '../../assets/profile-2user.svg'
import boxIcon from '../../assets/box.svg'
import discountIcon from '../../assets/discount-shape.svg'
import infoIcon from '../../assets/info-circle.svg'
import brightIcon from '../../assets/brightness 1.svg'
import moonIcon from '../../assets/moon 1.svg'
import arrowIcon from '../../assets/arrow-right.svg'
import logoutIcon from '../../assets/logout.svg'

const Sidebar = ({ toggleTheme, darkMode }) => {
  return (
    <div className="sidebar">
     <img src={vectorIcon} alt='vector' />
     <img src={categoryIcon} alt='category' />
     <img src={trendupIcon} alt='trendIcon' />
     <img src={profileIcon} alt='proile' />
     <img src={boxIcon} alt='box' />
     <img src={discountIcon} alt='discount' />
     <img src={infoIcon} alt='info' />
     
     <div className='switchTheme' onClick={toggleTheme}>
        {darkMode ? (
          <img src={brightIcon} alt='brightIcon' className='bright'/>
        ) : (
          <img src={moonIcon} alt='moon' className='moon' />
        )}
      </div>

     <img src={arrowIcon} alt='arrow' />
     <img src={settingIcon} alt='settings' />
     <img src={logoutIcon} alt='logout button' />
    </div>
  );
};

export default Sidebar;
