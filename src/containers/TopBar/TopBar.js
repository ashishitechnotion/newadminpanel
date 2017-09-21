import React, {Component} from 'react';

class TopBar extends Component
{
    render() {
        var imageHeight = {
            height: 36
        };
        return (
            <header id="header" className="ui-header">

                <div className="navbar-header">

                    <a className="navbar-brand">
                        <span className="logo"><img src="assets/images/layout/magestic-logo.png" alt="" style={imageHeight}/></span>
                        <span className="logo-compact"><img src="assets/images/layout/magestic-logo.png" style={imageHeight} alt=""/></span>
                    </a>
                </div>
                <div className="navbar-collapse nav-responsive-disabled">
                    <ul className="nav navbar-nav">
                        <li>
                            <a className="toggle-btn" data-toggle="ui-nav">
                                <i className="fa fa-bars"></i>
                            </a>
                        </li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                        <li className="dropdown">
                            <a className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                <i className="fa fa-bell-o"></i>
                                <span className="badge">5</span>
                            </a>
                            <ul className="dropdown-menu dropdown-menu--responsive">
                                <div className="dropdown-header">Notifications (12)</div>
                                <ul
                                    className="Notification-list Notification-list--small niceScroll list-group">
                                    <li className="Notification list-group-item">
                                        <button
                                            className="Notification__status Notification__status--read"
                                            type="button"
                                            name="button"></button>
                                        <a>
                                            <div className="Notification__avatar Notification__avatar--danger pull-left">
                                                <i className="Notification__avatar-icon fa fa-bolt"></i>
                                            </div>
                                            <div className="Notification__highlight">
                                                <p className="Notification__highlight-excerpt">
                                                    <b>Server Error Report</b>
                                                </p>
                                                <p className="Notification__highlight-time">1.2 hours ago</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="Notification list-group-item">
                                        <button
                                            className="Notification__status Notification__status--read"
                                            type="button"
                                            name="button"></button>
                                        <a>
                                            <div className="Notification__avatar Notification__avatar--success pull-left">
                                                <i className="Notification__avatar-icon fa fa-user-plus"></i>
                                            </div>
                                            <div className="Notification__highlight">
                                                <p className="Notification__highlight-excerpt">
                                                    <b>New Member Registration</b>
                                                </p>
                                                <p className="Notification__highlight-time">2 hours ago</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="Notification list-group-item">
                                        <button
                                            className="Notification__status Notification__status--read"
                                            type="button"
                                            name="button"></button>
                                        <a>
                                            <div className="Notification__avatar pull-left">
                                                <img src="assets/images/layout/a0.jpg" alt="..."/>
                                            </div>
                                            <div className="Notification__highlight">
                                                <p className="Notification__highlight-excerpt">
                                                    <b>Tomas Edison</b>
                                                    and 4 other people like your post “keep clam and watch the fizz”.</p>
                                                <p className="Notification__highlight-time">1 day ago</p>
                                            </div>
                                        </a>
                                    </li>

                                    <li className="Notification list-group-item">
                                        <button
                                            className="Notification__status Notification__status--unread"
                                            type="button"
                                            name="button"></button>
                                        <a>
                                            <div className="Notification__avatar pull-left">
                                                <img src="assets/images/layout/a0.jpg" alt="..."/>
                                            </div>
                                            <div className="Notification__highlight">
                                                <p className="Notification__highlight-excerpt">
                                                    <b>Luciad Extic</b>
                                                    can join conference.</p>
                                                <p className="Notification__highlight-time">1 hour ago</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="Notification list-group-item">
                                        <button
                                            className="Notification__status Notification__status--unread"
                                            type="button"
                                            name="button"></button>
                                        <a>
                                            <div className="Notification__avatar Notification__avatar--info pull-left">
                                                <i className="Notification__avatar-icon fa fa-database"></i>
                                            </div>
                                            <div className="Notification__highlight">
                                                <p className="Notification__highlight-excerpt">
                                                    <b>Database Error</b>
                                                </p>
                                                <p className="Notification__highlight-time">2 days ago</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="Notification list-group-item">
                                        <button
                                            className="Notification__status Notification__status--read"
                                            type="button"
                                            name="button"></button>
                                        <a>
                                            <div className="Notification__avatar Notification__avatar--danger pull-left">
                                                <i className="Notification__avatar-icon fa fa-bolt"></i>
                                            </div>
                                            <div className="Notification__highlight">
                                                <p className="Notification__highlight-excerpt">
                                                    <b>Server Error Report</b>
                                                </p>
                                                <p className="Notification__highlight-time">1.2 hours ago</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="Notification list-group-item">
                                        <button
                                            className="Notification__status Notification__status--read"
                                            type="button"
                                            name="button"></button>
                                        <a>
                                            <div className="Notification__avatar Notification__avatar--success pull-left">
                                                <i className="Notification__avatar-icon fa fa-user-plus"></i>
                                            </div>
                                            <div className="Notification__highlight">
                                                <p className="Notification__highlight-excerpt">
                                                    <b>New Member Registration</b>
                                                </p>
                                                <p className="Notification__highlight-time">2 hours ago</p>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                                <div className="dropdown-footer">
                                    <a>View more</a>
                                </div>
                            </ul>

                        </li>

                        <li className="dropdown dropdown-usermenu">
                            <a className=" dropdown-toggle" data-toggle="dropdown" aria-expanded="true">
                                <div className="user-avatar"><img src="assets/images/layout/a0.jpg" alt="..."/></div>
                                <span className="hidden-sm hidden-xs">Admin</span>

                                <span className="caret hidden-sm hidden-xs"></span>
                            </a>
                            <ul className="dropdown-menu dropdown-menu-usermenu pull-right">

                                <li>
                                    <a>
                                        <i className="fa fa-cogs"></i>
                                        Settings</a>
                                </li>
                                <li>
                                    <a href="">
                                        <i className="fa fa-user"></i>
                                        Profile</a>
                                </li>

                                <li>
                                    <a>
                                        <i className="fa fa-commenting-o"></i>
                                        Feedback</a>
                                </li>

                                <li>
                                    <a>
                                        <i className="fa fa-life-ring"></i>
                                        Help</a>
                                </li>
                                <li className="divider"></li>
                                <li>
                                    <a href="">
                                        <i className="fa fa-sign-out"></i>
                                        Log Out</a>
                                </li>
                            </ul>
                        </li>
                        
                    </ul>

                </div>

            </header>

        )
    }
}

export default TopBar;