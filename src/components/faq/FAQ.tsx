import React from 'react'
import { FAQs } from '../../constants'

import "./faq.css";

const FAQ = () => {
    return (
        <div className='faq'>
            <div className='faq-header'>
                <div className='content-header'>Faq</div>
                <div className='content-subheader'>
                    Frequently asked <br /> questions
                </div>
                <div className='faq-container'>
                    <div className='faq-left'>
                        {FAQs.slice(3).map((faq, index) => {
                            return (
                                <div key={index} className={`faq-content ${index % 2 !== 0 ? "faq-white" : "faq-orange"}`}>
                                    <div className='faq-header'>
                                        {faq.header}
                                    </div>
                                    <div className='faq-desc'>
                                        {faq.content}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className='faq-right'>
                        {FAQs.slice(3, 6).map((faq, index) => {
                            return (
                                <div key={index} className={`faq-content ${index % 2 === 0 ? "faq-white" : "faq-orange"}`}>
                                    <div className='faq-header'>
                                        {faq.header}
                                    </div>
                                    <div className='faq-desc' style={{ color: index % 2 === 0 ? "#6e6e6e" : "" }}>
                                        {faq.content}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FAQ