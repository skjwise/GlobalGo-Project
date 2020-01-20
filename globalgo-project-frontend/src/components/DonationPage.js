import React from 'react';
// import {Form, Input} from 'semantic-ui-react';
import {Elements} from 'react-stripe-elements';
import Payment from './Payment';

const DonationPage = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("thank you for the donation")
    }

    return (
        <div id="Donation-Form" >
            <h3>Payment Information</h3>

            <Elements>
                <Payment onSubmit={handleSubmit} />
            </Elements>

            {/* <h3>Payment Information</h3>
            <form onSubmit={handleSubmit} >
                <br/>
                <div className="field">
                    <label>Amount: £ </label>
                    <input type="text" placeholder="£1 minimum" />
                </div>
                <br/>
                <div className="field">
                    <label>Card Type</label>
                    <div className="ui semantic dropdown">
                        <input type="hidden" name="card[type]" />
                        <select className="dropdown icon">
                            <option data-value="">Type</option>
                            <option data-value="visa"> Visa </option>
                            <option data-value="amex"> American Express</option>
                            <option data-value="amex"> MasterCard</option>
                        </select>
                    </div>
                </div>
                <br/>
                <div className="fields">
                    <div className="seven wide field">
                        <label> Card Number: </label>
                        <input type="text" name="card[number]" maxLength="16" placeholder="Card #"></input>
                    </div>
                    <br/>
                    <div className="fields">
                        <div className="three wide field">
                            <label>CVC: </label>
                            <input type="text" name="card[cvc]" maxLength="3" placeholder="CVC"></input> 
                        </div>
                    </div>
                    <br/>
                    <div className="six wide fields">
                        <label>Expiration: </label>
                        <div className="two fields">
                            <div className="field">
                                <select className="ui fluid search dropdown" name="card[expire-month]">
                                    <option value="">Month</option>
                                    <option value="1">January</option>
                                    <option value="2">February</option>
                                    <option value="3">March</option>
                                    <option value="4">April</option>
                                    <option value="5">May</option>
                                    <option value="6">June</option>
                                    <option value="7">July</option>
                                    <option value="8">August</option>
                                    <option value="9">September</option>
                                    <option value="10">October</option>
                                    <option value="11">November</option>
                                    <option value="12">December</option>
                                </select>
                            </div>
                            <div className="field">
                                <input type="text" name="card[expire-year]" maxLength="4" placeholder="2023"></input>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <br/>
                    <h3 className="ui dividing header">Confirmation</h3>
                    <div className="field">
                        <label>Email: </label>
                        <input type="text" name="email" placeholder="sarah@gmail.com"></input>
                        <br/>
                        <br/>

                        <div className="ui toggle checkbox">
                            <input type="checkbox" name="donation" tabIndex="0"></input>
                            <label>Do not include a confirmation email</label>
                        </div>
                    </div>
                </div>
                <br/>

                <button >Submit</button>
            </form> */}
        </div>
    );
}

export default DonationPage;
