import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React,{useState} from 'react'
import './Faq.css'


export const Faq = () => {
const [show, setShow] = useState(false);  

const handleClick = (index) => {
    if(show === index) {
        setShow(null)
    }else{
        setShow(index)
    }
}
 
const faqs = [
    {
      id:1,
      q: 'WHAT PAYMENT METHODS DO YOU ACCEPT?',
      text: "For USA domestic customers, we only accept most major credit cards (including Visa, MasterCard, American Express, Discover, JCB, Diner's Club) as well as PayPal, Apple Pay, Google Pay, and Amazon Pay. International customers may have additional payment options that are specific to their country or region.",
      
    },
    {
      id:2,
      q: 'DO YOU CHARGE SALES TAX?',
      text: 'Yes. We have to run that back to the government. Sales tax will be charged for all orders placed within the United States, calculated by the state and county to which your order is shipping.',
      
    },
    {
      id:3,
      q: 'WHAT’S THE RETURN POLICY?',
      text: 'All merch is made in limited quantities, so unfortunately, exchanges and size adjustments are not available. Unwashed, unworn, or defective merch may be returned within 14 days from the date of purchase with original receipt. To return, please include the original packing slip and simply circle the merch you are returning. The original credit card used to place the order will receive the credit. Due to processing delays related to COVID-19 there may be a delay in processing returns and depositing of funds on your credit card.',
      
    }
  ]
    return (
    <div className="faqs-cont">
        <img src='https://www.nicepng.com/png/detail/56-565888_john-cena-logo-john-cena-new-logos.png' alt='cenationimg'/>
    <section className="faqs" >
        <div className="title">
            <h2>frequently asked questions</h2>

        </div>
        <div className="section-center">
            {faqs.map((faq, index) =>(
               <article className="question">
                <div className="question-title">
                    <p>{faq.q}</p>
                    <button type="button" className="question-btn">
                        <span className="plus-icon">
                            <i onClick={() => handleClick(index)} key={index}><FontAwesomeIcon icon={faPlus}/></i>
                        </span>
                        <span className="minus-icon">
                            <i onClick={handleClick}><FontAwesomeIcon icon={faMinus}/></i>
                        </span>
                    </button>
                </div>
                <div className={show === index ? "show-text" : "question-text"}>
                    <p>{faq.text}</p>
                </div>
                
            </article>
            ))}
        </div>
    </section>
    </div>
    )
}

export default Faq
