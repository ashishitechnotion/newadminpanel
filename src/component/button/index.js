import React,{Component} from 'react';
import { render } from 'react-dom';
class Button extends Component {
    render() {
       return (
           <button type={this.props.btnType} className={this.props.btnClass}><i className={this.props.iconClass}></i> {this.props.btnText}</button>
       )
    }
}
Button.defaultProps=
{
    btnType:"Button",
    btnClass:"btn btn-success",
    btnText:"Button",
    iconClass:"fa fa-eye"
   
}
export default Button;
