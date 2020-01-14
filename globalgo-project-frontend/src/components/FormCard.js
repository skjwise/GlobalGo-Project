import React from "react";
import { Form, Label, Grid, Button, Segment } from "semantic-ui-react";

const FormCard = props => {
  return (
    <React.Fragment>
      <br />
      <br />
      <Grid centered>
        <Segment
          raised
          style={{
            height: "90%",
            width: "400px",
            padding: "10px",
            margin: "10px",
            color: "darkviolet",
            textAlign: "center"
          }}
        >
          <br />
          <h3
            style={{
              textAlign: "center"
            }}
          >
            {" "}
            {props.title}
          </h3>
          <br />
          <br />
          <Grid centered>
            <Form style={{ textAlign: "center", width: "85%" }}>
              <Form.Field style={{ textAlign: "center" }}>
                <Label as="a" tag color="purple">
                  {" "}
                  Username
                </Label>
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  onChange={event => props.handleChange(event)}
                />
              </Form.Field>

              <Form.Field>
                <Label as="a" tag color="purple">
                  Password
                </Label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={event => props.handleChange(event)}
                />
              </Form.Field>

              {props.signUp && (
                // <Form.Field>
                //     <Label as="a" tag color="purple">
                //     First Name
                //     </Label>
                //     <br/>
                //     <input
                //     type="first-name"
                //     name="first-name"
                //     placeholder="first name"
                //     onChange={event => props.handleChange(event)}
                //     />
                // </Form.Field>

                <Form.Field>
                  <Label as="a" tag color="purple">
                    Email
                  </Label>
                  <br/>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    onChange={event => props.handleChange(event)}
                  />
                </Form.Field>
              )}

              <br />

              <Button
                onClick={props.handleSubmit}
                type="submit"
                value="SignUp"
                basic
                color="purple"
              >
                {props.button}
              </Button>
            </Form>
          </Grid>
          <br />
          <br />
        </Segment>
      </Grid>
    </React.Fragment>
  );
};

export default FormCard;
