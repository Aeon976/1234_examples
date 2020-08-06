import React, {Component} from "react";
import {MyCoolButton}from "../MyCoolButton";

export class Comment extends Component {
    constructor(){
        super();

        this.state = {
            publisher: '',
            comment: ''
        }
    }

    typeHandler = e =>{
        this.setState({comment: e.target.value });
    }

    render() {
        return(
        <div>
        <div>{this.state.comment}</div>
        <div>Зохиогч: {this.props.zohiogch}</div>
        <textarea onChange={this.typeHandler}></textarea>
        <MyCoolButton
             
            tovchNer="Комментоо үнэнээр нь бичээрэй" 
            text="Хадгал"
            comment={this.state.comment}/>
        </div>
        ); 
    }
}