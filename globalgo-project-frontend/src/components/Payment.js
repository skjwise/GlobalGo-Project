import React from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';

const Payment = props => {
    const submit = async event => {
        // User email is either user.email from Auth0 OR from some guest email field
        event.preventDefault();
        let { token } = await props.stripe.createToken({ name: "Name" });
        let body = { token: token.id };
        let response = await fetch("http://localhost:3000/api/v1/charge", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        });
        // if (response.ok) {
        //   props.setPaymentOk(true);
        // }
      };
      const style = {
        base: {
          color: "#32325D",
          fontFamily: '"Helvetica Neue”, Helvetica, sans-serif',
          fontSmoothing: "antialiased",
          fontSize: "16px",
          "::placeholder": {
            color: "#AAB7C4"
          }
        },
        invalid: {
          color: "#FA755A",
          iconColor: "#FA755A"
        }
      };

    return (
        <div>
            <br/>
            <br/>
            <CardElement />
            <br/>
            <br/>
            <button onClick={submit} >Submit </button>
        </div>
    );
}

export default injectStripe(Payment);
