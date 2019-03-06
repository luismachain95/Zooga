import React, { Component } from "react";
import './Zooga.css';
import Thumbs from './Thumbs';
import Zoo from '../Zoo/Zoo'

class Zooga extends Component {

    constructor(props){
        super(props);
       
        this.state = {
            images: this.props.images,
            index: 0,
            imageZoom: this.props.images[0].image
        }
    
    }

    componentDidUpdate = (prevProps) => {
        if (prevProps.images[0].image !== this.props.images[0].image) {
            this.setState({
                images: this.props.images
            })
        }
    }

    clickThumb = (id) => {
        const { 
            images
        } = this.state; 
        this.setState({
            index: id,
            imageZoom: images[id].image
        });
    }


    render() {
        const { 
            images,     //Imagenes que vienen del State
            index,      // Indice
            imageZoom   //Imagen que esta en el visor
        } = this.state;
        
        return (
           <div className="zooga">
                <div className="zooga-visor">
                    <Zoo image={imageZoom} width='500' height='500'/>
                </div>
                <Thumbs clickThumb={this.clickThumb} index={index} images={images}/>
           </div> 
        )
    }
}

export default Zooga;