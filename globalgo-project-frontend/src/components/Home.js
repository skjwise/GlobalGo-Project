import React from 'react';
import {Icon} from 'semantic-ui-react';
import  Carousel  from  'semantic-ui-carousel-react';
import { Image } from  'semantic-ui-react'


const Home = () => {
    let elements = [{
        render:()=>{
            return <Image src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
             fluid ></Image>
        }
    },
    {
        render:()=>{
            return <Image src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
             fluid></Image>
        }
    },
    {
        render:()=>{
            return <Image src="https://images.unsplash.com/photo-1518398046578-8cca57782e17?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
             fluid></Image>
        }
    },
    {
        render:()=>{
            return <Image src="https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80"
             fluid></Image>
        }
    },
    {
        render:()=>{
            return <Image src="https://images.unsplash.com/photo-1572204097183-e1ab140342ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
             fluid ></Image>
        }
    },]

    return (
        <div id="Home">
            <h1> GlobalGo </h1>
            <br/>
            <Icon name="globe" size='huge' />
            <br/>
            <br/>
            <Carousel
				elements  =  {  elements  }
				duration  ={4000}
				animation  ='slide left'
				showNextPrev  =  {false}
				showIndicators  ={true}
			/>
            <br/>
            <h2>Making it easy and safe for you to give to local projects anywhere in the world, while providing nonprofits with the tools, training, and support they need to become more effective.</h2>
            <br/>
            <br/>
        </div>
    );
}

export default Home;
