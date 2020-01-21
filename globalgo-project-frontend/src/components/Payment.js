import React from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';
import {Button} from 'semantic-ui-react';

const Payment = props => {
    const submit = async e => {
        e.preventDefault();
        // console.log("thank you for the donation")
        // alert('Thank you for your donation!')
        let { token } = await props.stripe.createToken({ name: "Name" });
        let body = { token: token.id, amount: props.amount };
        let response = await fetch("http://localhost:3000/api/v1/charge", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        });
        // if (response.ok) {
        //   props.setPaymentOk(true);
        // }
      };

    return (
        <div>
            <br/>
            <br/>
            <CardElement />
            <br/>
            <br/>
            <Button onClick={submit} > Submit </Button>
        </div>
    );
}

export default injectStripe(Payment);
