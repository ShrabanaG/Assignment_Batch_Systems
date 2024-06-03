import React from 'react'

import "./advantages.css";

const Advantages = () => {
    return (
        <div className='advantages'>
            <div className='advantages__item1 flex-between-container'>
                <div className='advantages__item1-content'>
                    <div className='content-header'>Advantages</div>
                    <div className='content-subheader'>
                        Why Choose Uifry?
                    </div>
                    <div className='content-text'>
                        <div className='content-text-header'>
                            <span><img src={require("../../assets/bell-icon.png")} width={40} height={40} alt="star-icon" /></span>
                            <span style={{ marginLeft: 16 }}>Clever Notifications</span>
                        </div>
                        <div className='content-text-subheader'>
                            Arcu at dictum sapien, mollis.
                            Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio.
                            Duis tristique lacus, et blandit viverra nisl velit.
                            Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu.
                            Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.
                        </div>
                    </div>
                </div>
                <div className='advantages__item1-img-container'>
                    <img src={require("../../assets/advantage1.png")} alt="advantage-1" />
                </div>
            </div>
            <div className='advantages__item2 flex-between-container'>
                <div className='advantages__item2-img-container'>
                    <img src={require("../../assets/advantage2.png")} alt="advantage-2"

                    />
                </div>
                <div className='advantages__item2-content'>
                    <div className='content-text-header'>
                        <span>
                            <img src={require("../../assets/star-icon.png")} width={40} height={40} alt="star-icon" />
                        </span>
                        <span style={{ marginLeft: 16 }}>Fully Customizable</span>
                    </div>
                    <div className='content-text-subheader'>
                        Arcu at dictum sapien, mollis.
                        Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio.
                        Duis tristique lacus, et blandit viverra nisl velit.
                        Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu.
                        Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Advantages