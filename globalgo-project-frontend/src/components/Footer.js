import React, { Component } from 'react';
import {Segment, Responsive, Menu } from 'semantic-ui-react'

// Need to add in the Global Giving logo to img tag

export class Footer extends Component {
    render() {
        return (
            <Segment.Group>
                <Responsive as={Segment} minWidth={767}>
                    <Menu borderless stackable>
                        <Menu.Item name='gg-link'>
                            <p id="gg-link-p">All project data from 
                            <a id="gg-anchor" href="https://www.globalgiving.org/" target="blank">
                               <img id="gg-footer" /></a></p>
                        </Menu.Item>
                    </Menu>
                </Responsive>
            </Segment.Group>
        );
    }
}

export default Footer;
