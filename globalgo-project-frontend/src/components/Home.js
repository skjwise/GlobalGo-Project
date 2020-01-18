import React from 'react';
import {Icon} from 'semantic-ui-react';

const Home = () => {
    return (
        <div id="Home">
            <h1> GlobalGo </h1>
            <br/>
            <Icon name="globe" />
            <br/>
            <h2>Making it easy and safe for you to give to local projects anywhere in the world, while providing nonprofits with the tools, training, and support they need to become more effective.</h2>
            <img src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="Make a Change!" className="responsive" />
        </div>
    );
}

export default Home;
