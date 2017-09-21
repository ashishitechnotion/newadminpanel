import React,{Component} from 'react';
class CardStrip extends Component {
    render() {
       return (
       <div className={this.props.bgColorClass}>
       <div className="pull-right state-icon" >
           <i className={this.props.upIcon}></i>
       </div>
       <div className="panel-body">
           <h1 className="light-txt"><i className={this.props.sideIcon}></i> {this.props.sideText}</h1>
           
           <strong className="text-uppercase">{this.props.mainText}</strong>
       </div>
   </div>);
    }
}
CardStrip.defaultProps=
{
    bgColorClass:"panel short-states bg-danger",
    upIcon:"fa fa-money",
    sideIcon:"fa fa-gbp",
    sideText:"1,3012",
    mainText:"Total Fund"
}

export default CardStrip;