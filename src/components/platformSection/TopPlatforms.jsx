import React, { useState } from 'react';
import './TopPlatforms.css'

const TopPlatforms = () => {
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const platformData = [
    { name: 'Book Bazaar', progress: 70, amount: 90000, percentage: 70 },
    { name: 'Artisan Aisle', progress: 60, amount: 70000, percentage: 60 },
    { name: 'Toy Troop', progress: 50, amount: 60000, percentage: 50 },
    { name: 'X Store', progress: 40, amount: 50000, percentage: 40 },
    { name: 'poundz', progress: 35, amount: 30000, percentage: 35 },
    { name: 'magicalo', progress: 25, amount: 20000, percentage: 25 },
    
  ];

  const visiblePlatforms = showAll ? platformData : platformData.slice(0, 3);

  return (
    <div className="top-platforms">
      <div className="top-platforms-header">
        <h2>Top Platforms</h2>
        <button onClick={toggleShowAll} className="see-all-link">
          {showAll ? 'See Less' : 'See All'}
        </button>
      </div>
      <div className="platforms-list">
        {visiblePlatforms.map((platform, index) => (
          <div key={index} className="platform">
            <h3>{platform.name}</h3>
            <div className="progress-bar" style={{ width: `${platform.progress}%` }}></div>
            <div className="amount-percentage">
              <span>${platform.amount}</span>
              <span>{platform.percentage}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopPlatforms;
