import React from "react";
import { Form, Label, Grid, Button, Segment } from "semantic-ui-react";

const FormCard = props => {
  return (
    <div id="form-card">
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
            color: "green",
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
                <Label as="a" tag color="green">
                  {" "}
                  Username: 
                </Label>
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  onChange={event => props.handleChange(event)}
                />
              </Form.Field>
              <br/>
              <Form.Field>
                <Label as="a" tag color="green">
                  Password: 
                </Label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={event => props.handleChange(event)}
                />
              </Form.Field>
              <br/>
              {props.signUp && (                
                <Form.Field>
                  <Label as="a" tag color="green">
                    Email: 
                  </Label>
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
                color="green"
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
    </div>
  );
};

export default FormCard;
