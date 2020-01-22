import React, {useState} from 'react';
import {Input, Label} from 'semantic-ui-react';
import {Elements} from 'react-stripe-elements';
import Payment from './Payment';
// import { positions, Provider } from "react-alert";
// import AlertTemplate from "react-alert-template-basic";


const DonationPage = ({project}) => {
    const [amount, setAmount] = useState(0);

    const handleAmount = e => {
        const donation = e.target.value * 100
        setAmount(donation)
    }
    // const options = {
    //     timeout: 2000,
    //     position: positions.TOP_CENTER
    // };

    return (
        <div id="Donation-Form" >
            <br/>
            <h3>Payment Information</h3>
            <br/>
            {/* <h3>Donating to:  </h3> */}
            <br/>
            <Input labelPosition='right' type='text' placeholder='Amount'>
            <Label basic>£</Label>
            <input onChange={handleAmount} />
            <Label>.00</Label>
            </Input>
            {/* <Provider template={AlertTemplate} {...options}> */}

            <Elements>
                <Payment amount={amount}  />
            </Elements>

            {/* </Provider> */}
        </div>
    );
}

export default DonationPage;
