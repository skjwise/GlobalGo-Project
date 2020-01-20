import React from 'react';
import ThemeSearch from './ThemeSearch';

const AllThemes = ({themes}) => {
    return (
        <div id="all-themes" >
            <React.Fragment>
                {themes !== undefined && themes.map(theme => <ThemeSearch key={theme.id} theme={theme} />)}
            </React.Fragment>
        </div>
    );
}

export default AllThemes;
