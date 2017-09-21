import React, { Component } from 'react'

class SideBar extends Component {
    render () {
        return (
            <aside id="aside" className="ui-aside">
                    <ul className="nav" ui-nav>
                        <li className="nav-dashb">
                            <a href="/dashboard">
                                <i className="fa fa-home fa-lg"></i>
                                <span>
                                    Dashboard
                                </span>
                            </a>
                        </li>
                        <li className="nav-chr">
                            <a href="question">
                                <i className="fa fa-stack-overflow fa-lg"></i>
                                <span>Manage Question</span>
                            </a>
                        </li>
                        <li className="nav-user">
                            <a href="/audit">
                                <i className="fa fa-eye fa-lg"></i>
                                <span>View Audit</span>
                            </a>
                        </li>
                        <li className="nav-user">
                            <a href="/user">
                                <i className="fa fa-users fa-lg"></i>
                                <span>Manage User</span>
                            </a>
                        </li>

                    </ul>
                </aside>
                
        )
    }
}

export default SideBar;