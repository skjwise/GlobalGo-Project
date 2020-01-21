import React, {useState} from 'react';
import {Input, Label} from 'semantic-ui-react';
import {Elements} from 'react-stripe-elements';
import Payment from './Payment';

const DonationPage = () => {
    const [amount, setAmount] = useState(0);


    // const handleSubmit = e => {
    //     e.preventDefault()
    //     console.log("thank you for the donation"
    // }

    const handleAmount = e => {
        const donation = e.target.value * 100
        setAmount(donation)
    }

    return (
        <div id="Donation-Form" >
            <br/>
            <h3>Payment Information</h3>
            <br/>
            <br/>
            <Input labelPosition='right' type='text' placeholder='Amount'>
            <Label basic>£</Label>
            <input onChange={handleAmount} />
            <Label>.00</Label>
            </Input>

            <Elements>
                <Payment amount={amount}  />
            </Elements>

        </div>
    );
}

export default DonationPage;
