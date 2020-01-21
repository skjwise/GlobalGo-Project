import React from 'react';
import {Input} from 'semantic-ui-react';
import {Elements} from 'react-stripe-elements';
import Payment from './Payment';

const DonationPage = () => {

    const handleSubmit = e => {
        e.preventDefault()
        console.log("thank you for the donation")
        
    }

    return (
        <div id="Donation-Form" >
            <br/>
            <h3>Payment Information</h3>
            <br/>
            <br/>
            <Input label='Donate:  £' placeholder='5' />

            <Elements>
                <Payment onSubmit={handleSubmit} />
            </Elements>

        </div>
    );
}

export default DonationPage;
