import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';


const BusinessList = ({ businesses }) => {
    console.log(businesses.businesses)
    return (
        <div className="BusinessList">
            
            {
                businesses.businesses.map((business) => {
                    return <Business key={business.id} business={business} />
                })
            }
        </div>
    )
}

export default BusinessList;
