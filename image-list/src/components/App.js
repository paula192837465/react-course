import React from 'react';
import SearchInput from './SearchInput';
import axios from 'axios';
import ImageList from './ImageList';

class App extends React.Component {

    state = {images: []};

    onSearchSubmit = async (entry) => {
        console.log(entry);
        const response = await axios.get(`https://pixabay.com/api/?key=22461598-19f916bd2a42b5d012d8e1595&q=${entry}&image_type=photo`);
        this.setState({images: response.data.hits})
    }
    render(){
         return(
            <div className=" ui container" style={{marginTop: '30px'}}>
                <SearchInput onSearchSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images}></ImageList>
            </div>
        )
    }
   
}

export default App;