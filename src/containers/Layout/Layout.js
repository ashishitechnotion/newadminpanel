import React, {Component} from 'react';
import {render} from 'react-dom';
import TopBar from '../TopBar/TopBar.js';
import SideBar from '../SideBar/SideBar.js';
import Footer from '../Footer/Footer.js';

class Layout extends Component
{
    constructor(props)
    {
        super(props);
    }
    render()
    {
        return (
            <div>
                <TopBar/>
                <SideBar/>
                <div id="content" className="ui-content">
                    <div className="ui-content-body">
                        <div className="ui-container">
                            {this.props.children}
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>

        );
    }

}
export default Layout;