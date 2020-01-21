import React from 'react';
import { Dropdown, Input } from 'semantic-ui-react';

const ThemeSearch = ({theme}) => {

    // const themeOptions = [
    //     { key: 'animals', value: 'animals', text: 'Animals' },
    //     { key: 'children', value: 'children', text: 'Children' },
    //     { key: 'climate', value: 'climate', text: 'Climate' },
    //     { key: 'democ', value: 'democ', text: 'Democracy and Governance' },
    //     { key: 'disaster', value: 'disaster', text: 'Disaster Recovery' },
    //     { key: 'ecdev', value: 'ecdev', text: 'Economic Development' },
    //     { key: 'edu', value: 'edu', text: 'Education' },
    //     { key: 'env', value: 'env', text: 'Environment' },
    //     { key: 'finance', value: 'finance', text: 'Finance' },
    //     { key: 'gender', value: 'gender', text: 'Women and Girls' },
    //     { key: 'health', value: 'health', text: 'Health' },
    //     { key: 'human', value: 'human', text: 'Humanitarian Assistance' },
    //     { key: 'rights', value: 'rights', text: 'Human Rights' },
    //     { key: 'sport', value: 'sport', text: 'Sport' },
    //     { key: 'tech', value: 'tech', text: 'Technology' },
    //     { key: 'hunger', value: 'hunger', text: 'Hunger' },
    //     { key: 'art', value: 'art', text: 'Arts and Culture' },
    //     { key: 'lgbtq', value: 'lgbtq', text: 'LGBTQAI+' }
    // ]

    return (
        <div id="search-themes" >
            {/* <Dropdown
                button
                className='icon'
                floating
                labeled
                icon='world'
                options={themeOptions}
                search
                text='Select Theme'
            /> */}
            <Input placeholder="Search by Theme" ></Input>
        </div>
    );
}

export default ThemeSearch;
