import React from 'react'
import FeatureImg from "../../assets/features.png";

import "./features.css";
import { FeaturesContent } from '../../constants';

const Features = () => {
    return (
        <div className='features'>
            <div className='features-img-container'>
                <img src={FeatureImg} width={700} height={700} alt='feature-img' />
            </div>
            <div className='features-content'>
                <div className='content-header'>Features</div>
                <div className='content-subheader'>
                    Uifry Premium
                </div>
                <div className='content-body'>
                    {FeaturesContent.map((each, idx) => {
                        return (
                            <div key={idx} className='content-body-item'>
                                <div className='icon-header-container'>
                                    <span><img src={each.icon} width={24} height={24} alt="icon" /></span>
                                    <span className='header'>{each.header}</span>
                                </div>
                                <div className='content'>
                                    {each.content}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className='features-content-side' />
        </div>
    )
}

export default Features