import React, { Component } from 'react';
import Lightbox from 'react-images';

class ImageLightbox extends Component {
    
    state = {
        lightBoxIsOpen: true,
        currentImage: this.props.imagepos,
        images:[]
    }

    static getDerivedStateFromProps(props, state) {
        console.log(props);
        if(props.images){
            const images = [];
            props.images.forEach(element=>{
                images.push({src:`${element}`})
            })
            return state = {
                images
            }
        }
        return false;
    }

    closeLightbox = () => {
        this.props.onClose()
    }

    gotoPrevious = () => {
        this.setState({
            currentImage: this.state.currentImage -1
        })
    }

    gotoNext = () => {
        this.setState({
            currentImage: this.state.currentImage +1
        })
    }
    

    render() {
        return (
            <div>
                <Lightbox
                    currentImage={this.state.currentImage}
                    images={this.state.images}
                    isOpen={this.state.lightBoxIsOpen}
                    onClickPrev={()=> this.gotoPrevious()}
                    onClickNext={()=> this.gotoNext()}
                    onClose={()=>this.closeLightbox()}
                />
            </div>
        );
    }
}

export default ImageLightbox;