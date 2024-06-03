import React from 'react'

import "./testimonials.css";

const Testimonials = () => {
    return (
        <div className='testimonials'>
            <div className='testimonials__header'>
                <div className='header'>Testimonial</div>
                <div className='content-subheader'>
                    What Our Users <br /> say about us
                </div>
            </div>
            <div className='testimonials__content flex-between-container'>
                <div className='content__img'>
                    <img src={require('../../assets/testimonials-img.png')} alt='testimonial1' />
                </div>
                <div className='content__item'>
                    <div className='item__header'>
                        the best financial accounting <br />app ever!
                    </div>
                    <div className='item__content'>
                        “Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.”
                    </div>
                    <div className='item__img'>
                        <img src={require("../../assets/testimonials.png")} alt='testimonial-img' width={192} height={40} />
                    </div>
                    <div className='item__name'>Nick Jonas</div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials