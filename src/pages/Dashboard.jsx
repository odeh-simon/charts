import React, { useState } from 'react';
import Sidebar from '../components/sidebar/Sidebar';
import NavBar from '../components/navBar/NavBar';
import '../pages/Dashboard.css'
import Barchart from '../components/barchart/Barchart';
import Cards from '../components/Cards/Cards';
import OrderTable from '../components/orderTable/OrderTable';
import TopPlatforms from '../components/platformSection/TopPlatforms';



const Dashboard = () => {

    const [darkMode, setDarkMode] = useState(false);

    const toggleTheme = () => {
      setDarkMode(!darkMode);
    };

return (
    <div className={`dashBoard ${darkMode ? 'dark-theme' : ''}`}>
    <div className='container'>
<div className='dashBoard'>
<Sidebar toggleTheme={toggleTheme} darkMode={darkMode} />
    
    <div className='main-content'>
    <NavBar />

    <div className='barchart'>
        <Barchart />
        <Cards />
        </div>

    <div className='order-section'>
        <OrderTable />
        <TopPlatforms />
    </div>
    </div>
    </div>
    </div>
    </div>
);
};

export default Dashboard;