import React, { Component } from 'react';
import Zooga from './Components/Zooga/Zooga';
import './App.css';

class App extends Component {

  constructor(props){
    super(props)
    this.state= {
      images: [
        {
            image: "https://luismachain95.github.io/Caro/image/shoes1.jpg",
            thumb: "https://luismachain95.github.io/Caro/image/shoes1.jpg"
        },
        {
            image: "https://luismachain95.github.io/Caro/image/shoes2.jpg",
            thumb: "https://luismachain95.github.io/Caro/image/shoes2.jpg"
        },
        {
            image: "https://luismachain95.github.io/Caro/image/shoes3.jpg",
            thumb: "https://luismachain95.github.io/Caro/image/shoes3.jpg"
        },
        {
            image: "https://luismachain95.github.io/Caro/image/shoes4.jpg",
            thumb: "https://luismachain95.github.io/Caro/image/shoes4.jpg"
        },
        {
          image: "https://luismachain95.github.io/Caro/image/shoes1.jpg",
          thumb: "https://luismachain95.github.io/Caro/image/shoes1.jpg"
        },
        {
            image: "https://luismachain95.github.io/Caro/image/shoes2.jpg",
            thumb: "https://luismachain95.github.io/Caro/image/shoes2.jpg"
        },
        {
            image: "https://luismachain95.github.io/Caro/image/shoes3.jpg",
            thumb: "https://luismachain95.github.io/Caro/image/shoes3.jpg"
        },
        {
            image: "https://luismachain95.github.io/Caro/image/shoes4.jpg",
            thumb: "https://luismachain95.github.io/Caro/image/shoes4.jpg"
        }
    ],
    }
  }

  render() {
    return (
      <div className="content"> 
        <Zooga images={this.state.images}/>
      </div>
    );
  }
}

export default App;
