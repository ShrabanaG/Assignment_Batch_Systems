import React from 'react'


import "./banner.css";

const Banner = () => {
    return (
        <div className='banner'>
            <div className='banner-header'>ready to get started?</div>
            <div className='banner-subheader'>
                Risus habitant leo egestas mauris diam eget morbi tempus vulputate.
            </div>
            <div className='banner-btn'>
                <span style={{ marginRight: 10 }}>Download App</span>
                <span><img src={require("../../assets/apple-icon.png")} width={25} height={30} alt="apple-icon" /></span>
            </div>
        </div>
    )
}

export default Banner