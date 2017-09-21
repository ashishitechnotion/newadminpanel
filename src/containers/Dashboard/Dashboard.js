import React, {Component} from 'react';
import {render} from 'react-dom';
import CardStrip from '../../component/CardStrip/Index';
class DashBoard extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            card1UpIcon: "fa fa-stack-overflow",
            side1Icon: "",
            side1Text: "125",
            main1Text: "Manage Question",
            card2bg: "panel short-states bg-info",
            card2UpIcon: "fa fa-group",
            side2Icon: "",
            side2Text: "1524",
            main2Text: "Manage User",
            card3bg: "panel short-states bg-warning",
            card3UpIcon: "fa fa-eye",
            side3Icon: "",
            side3Text: "1457",
            main3Text: "View Audit"
        }

    }
    render() {

        return (
            <div>
                <div className="row">
                    <div className="col-md-8">
                        <h1 className="page-title">
                            Welcome, Admin</h1>
                    </div>
                    <div className="col-md-4">
                        <ul className="breadcrumb pull-right">
                            <li>Home</li>
                            <li>
                                <a href="" className="active">Dashboard</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <CardStrip
                            bgColorClass={this.state.card1bg}
                            upIcon={this.state.card1UpIcon}
                            sideIcon={this.state.side1Icon}
                            sideText={this.state.side1Text}
                            mainText={this.state.main1Text}/>
                    </div>

                    <div className="col-md-4">
                        <CardStrip
                            bgColorClass={this.state.card3bg}
                            upIcon={this.state.card3UpIcon}
                            sideIcon={this.state.side3Icon}
                            sideText={this.state.side3Text}
                            mainText={this.state.main3Text}/>
                    </div>
                    <div className="col-md-4">
                        <CardStrip
                            bgColorClass={this.state.card2bg}
                            upIcon={this.state.card2UpIcon}
                            sideIcon={this.state.side2Icon}
                            sideText={this.state.side2Text}
                            mainText={this.state.main2Text}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default DashBoard;