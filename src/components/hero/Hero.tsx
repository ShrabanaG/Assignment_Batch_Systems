import React from 'react'
import ArrowIcon from "../../assets/Vector 1.png";
import VideoIcon from "../../assets/video-icon.png";
import HeroSectionImg from "../../assets/hero-section-img.png";

import "./hero.css";
const Hero = () => {
    return (
        <div className='hero'>
            <div className='hero-container'>
                <div className='hero-content'>
                    <h1 className='header'>
                        Make The Best <br />Financial Decisions
                    </h1>
                    <p className='sub-header'>
                        Cum et convallis risus placerat aliquam, nunc.
                        Scelerisque aliquet <br />faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
                    </p>
                    <div className='hero-btn-container'>
                        <div className='btn1'>
                            <button className='btn-container'>
                                <span>Get Started</span>
                                <span style={{ marginLeft: "8px" }}><img src={ArrowIcon} width={24} alt='arrow' /></span>
                            </button>
                        </div>
                        <div className='btn2'>
                            <button className='btn-container-transperant'>
                                <span><img src={VideoIcon} width={29} height={29} alt="video-play" /></span>
                                <span style={{ marginLeft: "8px" }}>Watch Video</span>
                            </button>
                        </div>

                    </div>
                    <div className='hero-section-img-container'>
                        <img src={HeroSectionImg} width={500} height={357.74} alt="hero-section" />
                    </div>
                </div>
            </div>
            <div>
                <img src={require("../../assets/header-section-img.jpeg")} width={500} height={500} alt="hero-section-img" />
            </div>
        </div>
    )
}

export default Hero