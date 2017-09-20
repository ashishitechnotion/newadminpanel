import React,{Component} from 'react';
import { render } from 'react-dom';
class AHref extends Component {
    render() {
       return (
           <a href={this.props.linkUrl} className={this.props.hrefClass} target={this.props.hrefTarget}><i className={this.props.iconClass}></i> {this.props.hrefText}</a>
       )
    }
}
AHref.defaultProps=
{
    linkUrl:"#",
    hrefClass:"btn btn-success",
    hrefTarget:"",
    iconClass:"fa fa-eye",
    hrefText:"",
   
}
export default AHref;
