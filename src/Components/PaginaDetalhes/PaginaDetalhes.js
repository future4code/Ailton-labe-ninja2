import React from "react";
import axios from "axios";
import styled from "styled-components";

export default class PaginaDetalhes extends React.Component {
  state = {
    trabalhos: [],
  };

  //   componentDidMount() {
  //     this.getJobId();
  //   }
  //   componentDidUpdate(){
  //       this.getJobId();
  //   }

  render() {
    // console.log(this.props.tramposDetalhes)
    return (
      <div>
        <div>{this.props.tramposDetalhes.title} - 
            {this.props.tramposDetalhes.price}
           
        </div>
      </div>
    );
  }
}
