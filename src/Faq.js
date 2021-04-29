import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import './Faq.css'


export const Faq = () => {
     const btns = document.querySelectorAll(".question-btn");

     btns.forEach(function (btn) {
     btn.addEventListener("click", function (e) {
     const question = e.currentTarget.parentElement.parentElement;
     question.classList.toggle("show-text");
   });
 });


    return (
        <div>
                <section className="questions">
        <div className="title">
            <h2>Frequently Asked Questions</h2>

        </div>
        <div className="section-center">
            <article className="question">
                <div className="question-title">
                    <p>WHAT PAYMENT METHODS DO YOU ACCEPT?</p>
                    <button type="button" className="question-btn">
                        <span className="plus-icon">
                            <FontAwesomeIcon icon={faPlus}/>
                        </span>
                        <span className="minus-icon">
                            <FontAwesomeIcon icon={faMinus}/>
                        </span>
                    </button>
                </div>
                <div className="question-text">
                    <p>For USA domestic customers, we only accept most major credit cards (including Visa, MasterCard, American Express, Discover, JCB, Diner's Club) as well as PayPal, Apple Pay, Google Pay, and Amazon Pay. International customers may have additional payment options that are specific to their country or region.</p>
                </div>
                
            </article>
            <article className="question">
                <div className="question-title">
                    <p>WHAT’S THE RETURN POLICY?</p>
                    <button type="button" className="question-btn">
                        <span className="plus-icon">
                            <FontAwesomeIcon icon={faPlus}/>
                        </span>
                        <span className="minus-icon">
                            <FontAwesomeIcon icon={faMinus}/>
                        </span>
                    </button>
                </div>
                <div className="question-text">
                    <p>All merch is made in limited quantities, so unfortunately, exchanges and size adjustments are not available. Unwashed, unworn, or defective merch may be returned within 14 days from the date of purchase with original receipt. To return, please include the original packing slip and simply circle the merch you are returning. The original credit card used to place the order will receive the credit. Due to processing delays related to COVID-19 there may be a delay in processing returns and depositing of funds on your credit card.</p>
                </div>
                
            </article>
            <article className="question">
                <div className="question-title">
                    <p>DO YOU CHARGE SALES TAX?</p>
                    <button type="button" className="question-btn">
                        <span className="plus-icon">
                            <FontAwesomeIcon icon={faPlus}/>
                        </span>
                        <span className="minus-icon">
                            <FontAwesomeIcon icon={faMinus}/>
                        </span>
                    </button>
                </div>
                <div className="question-text">
                    <p>Yes. We have to run that back to the government. Sales tax will be charged for all orders placed within the United States, calculated by the state and county to which your order is shipping.</p>
                </div>
                
            </article>
        </div>
    </section>
        </div>
    )
}

export default Faq
