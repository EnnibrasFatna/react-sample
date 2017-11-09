// Drawer.js

import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

export default class DrawerMain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {open: false};
    }

    // Shows or hide the Drawer
    handleToggle = () => this.setState({open: !this.state.open});

    // Closes the drawer
    handleClose = () => this.setState({open: false});

    render() {
        return (
            <div>
                <Drawer
                    docked={false}
                    width={200}
                    open={this.state.open}
                    onRequestChange={(open) => this.setState({open})}
                >
                    <MenuItem onTouchTap={this.handleClose}>Menu Item</MenuItem>
                    <MenuItem onTouchTap={this.handleClose}>Menu Item 2</MenuItem>
                </Drawer>
            </div>
        );
    }
}