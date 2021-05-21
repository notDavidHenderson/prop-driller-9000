import React, { Component } from 'react';
import Transformer from '../Components/Transformer';


class TransformersSection extends Component {

  state = {
    currentId: 0
  }

  changeTransformer = () => {
    const id = this.state.currentId
    if( id <= 1){
      this.setState({
        currentId: this.state.currentId + 1
      })
    } else {
      this.setState({
        currentId: 0
      })
    }
   
  }

  displayTransformer = () => {
    if (this.props.display){
      
      return <Transformer 
        id={this.state.currentId} 
        proptimii={this.props.proptimii} 
        changeTransformer={this.changeTransformer} />
    }
  }

  render() {
    return (
      <section className = "transformers-section">
        {this.displayTransformer()}
      </section>
    );
  }
}

export default TransformersSection;
