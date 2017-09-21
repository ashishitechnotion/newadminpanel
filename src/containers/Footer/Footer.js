import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
            <div id="footer" className="ui-footer">
                <script>
                    document.write(new Date().getFullYear())
                </script>
                &copy; Majestic Services Group.
            </div>
        );
    }
}

export default Footer;