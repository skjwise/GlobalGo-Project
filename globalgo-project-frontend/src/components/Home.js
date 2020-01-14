import React from 'react';
import {Card, Image} from 'semantic-ui-react';


// maybe add in login / signup buttons

const Home = () => {
    return (
        <Card style={{ height: "285px", width: "350px", margin: "30px" }} >
            <Card.Content>
            <Card.Header>GlobalGo</Card.Header>
            <Card.Meta>Please Sign Up or Login</Card.Meta>
            <Card.Description>
            Making it easy and safe for you to give to local projects anywhere in the world, while providing nonprofits with the tools, training, and support they need to become more effective.
            </Card.Description>
            </Card.Content>
            <Image src='https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80' wrapped ui={false} />
        </Card>
    );
}

export default Home;
