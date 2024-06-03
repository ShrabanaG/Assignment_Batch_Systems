import React from 'react'
import { FooterLeftContent, FooterRightContent } from '../../constants'
import CopyRightLabel from "../../assets/copyright.png";

import "./footer.css";

const Footer = () => {
    return (
        <>
            <div className='footer'>
                <div className='footer-left'>
                    {FooterLeftContent.map((each, idx) => {
                        return (
                            <div key={idx} className='footer-left-item'>
                                <span><img src={each.icon} width={24} height={24} alt="footer-icon" /></span>
                                {idx === 0 ? <span className='header-img'>
                                    <img src={each.headerImg} width={60} height={25} alt="header-img" />
                                </span> : <span className='header'>{each.header}</span>}
                            </div>
                        )
                    })}
                </div>
                {FooterRightContent.map((content, idx) => {
                    return (
                        <div className={`footer-${content.header}-container`} key={idx}>
                            <div className='footer-header'>{content.header}</div>
                            {content.subheader.map((each) => {
                                return (
                                    <div className='footer-subheader-content' key={each}>{each}</div>
                                )
                            })}
                        </div>
                    )
                })}
                <div className='footer-newsletter-content'>
                    <div className='footer-header'>Newsletter</div>
                    <div className='footer-subheader-content'>Stay Up To Date</div>
                    <div className='text-field'>
                        <span style={{ marginRight: 8, fontSize: 10, fontWeight: 400 }}>Your email</span>
                        <span><button className='btn-container'>Subscribe</button></span>
                    </div>
                </div>

            </div>
            <div className='footer-copyright'>
                <img src={CopyRightLabel} height={104} alt="copyright" />
            </div>
        </>
    )
}

export default Footer