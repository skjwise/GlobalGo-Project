import React from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';
import { BrowserRouter as Router, Route, useHistory } from "react-router-dom";
import {Button} from 'semantic-ui-react';
import {useAlert} from 'react-alert';

const Payment = props => {
  const history = useHistory();
  const alert = useAlert();

    const submit = async e => {
        e.preventDefault();
        let { token } = await props.stripe.createToken({ name: "Name" });
        let body = { token: token.id, amount: props.amount };
        let response = await fetch("http://localhost:3000/api/v1/charge", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        });
        if (response.ok) {
          alert.success("Thank you for your donation!");
          history.push("/");
        } else {
          alert.error('Please fill in Amount and Card Details.')
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
