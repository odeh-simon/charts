import React, { useState, useEffect } from 'react';
import searchIcon from '../../assets/Icon - Search.svg'
import downArrow from '../../assets/Arrow - Down 2.svg'
import calendarIcon from '../../assets/solar_calendar-linear.svg'
import bellIcon from '../../assets/solar_bell-outline.svg'
import userIcon from '../../assets/Rectangle 1061.png'
import '../../components/navBar/NavBar.css'


const NavBar = () => {
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentDate(new Date());
      }, 1000); 
  
      // Cleanup the interval on component unmount
      return () => clearInterval(intervalId);
    }, []); 
  
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
  
    const formattedDate = currentDate.toLocaleDateString('en-US', options);

    return (
        <div classname="navbarcontainer">
        <div className="navbar">
        <div className='leftnav'>
            <h3 className="dashboardText">Dashboard</h3>
           
            
            <div className="searchBox">
                <img src={searchIcon} alt="search" />
                <span>Search...</span>
            </div>
            </div>

            <div className='rightnav'>
            <div className="date">
                <img src={calendarIcon} alt="date" />
                <span className='dateText'>{formattedDate}</span>
            </div>
            <div className='bellIcon'>
                <img src={bellIcon} alt="bellIcon" />
            </div>

            <div className='user'>
                <img src={userIcon} alt="user" />
                <span>Poundz <br/>poundz@gmail.com</span>
                <img src={downArrow} alt="arrow" />
            </div>
            </div>
        </div>
        </div>
    );
};

export default NavBar;