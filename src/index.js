import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';
 
const API_KEY = 'AIzaSyAEXcrW38eZvdsok7DfcrJ7c7DN4oa45Lc'

// create a new component this component should produce some html

// take this component generated html and put it 
// on the page

const App = () => {
    return (<div>
	    <SearchBar />
	    </div>
	   );
}

//take this component and show on page
ReactDOM.render(< App />, document.querySelector('.container'));
