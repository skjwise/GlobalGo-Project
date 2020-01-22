import React from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';
import {Button, Message} from 'semantic-ui-react';

const Payment = props => {

  // const successMessage = () => {
  //     <Message
  //     success
  //     header='Your payment was successful'
  //     content='Thank you for your donation!'
  //   />
  // }
    const submit = async e => {
        e.preventDefault();
        // console.log("thank you for the donation")
        let { token } = await props.stripe.createToken({ name: "Name" });
        let body = { token: token.id, amount: props.amount };
        let response = await fetch("http://localhost:3000/api/v1/charge", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        });
        if (response.ok) {
        //   // props.setPaymentOk(true);
        //   //  <Message floating content='Thank you for your donation!' />
          alert('Thank you for your donation!')
        } else {
          console.error();
        }
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
