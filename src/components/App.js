import React from 'react';
import 'semantic-ui-react'
import axios from "axios";
import config from "../config";
import SearchBar from "./SearchBar";


const accessKey = config.access_key;

class App extends React.Component {
    onSearchSubmit(term){
    axios.get('https://api.unsplash.com/search/photos',{
        params: {query: term },
        headers: {
           Authorization:
               'Client-ID ' + accessKey
        }
    });


    }

    render() {
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
            </div>
        );
    }
}

export default App;
