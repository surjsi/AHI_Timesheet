import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom';
const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 2,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    //   menu:{
    //       bg:{
    //           color:'white'
    //       }
    //   }
};

class ButtonAppBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            anchorEl: null,
            anchorE2:null
        };
    }
    handleMenu = event => {
        console.log(event.currentTarget)
        console.log(this.state.anchorEl)
        this.setState({ anchorEl: event.currentTarget });
    };
    handleMenuAH = event => {
        console.log(event.currentTarget)
        console.log(this.state.anchorEl)
        this.setState({ anchorE2: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: false });
    };
    handleCloseAH = () => {
        this.setState({ anchorE2: false });
    };
    render() {
        const { anchorEl,anchorE2 } = this.state;
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="subheading" color="inherit" className={classes.grow}>
                        <Button>
                               <Link to="/home/" style={{ "color": "white" ,"textDecoration":"blink"}}> Home</Link>
                        </Button>
                      
                        </Typography>
                        <Typography variant="subheading" color="inherit" className={classes.grow}>
                                TIMESHEET
                        </Typography>
                            {/* <Typography variant="subheading" color="inherit" className={classes.grow}>
                                <Button
                                    style={{ "color": "white" }}
                                    aria-owns={anchorEl ? 'menu' : null}
                                    aria-haspopup="true"
                                    onClick={this.handleMenu} >My AH
                                </Button>
                            </Typography>
                            <Menu
                                id="menu"
                                anchorEl={anchorEl}
                                open={Boolean(anchorEl)}
                                onClose={this.handleClose}
                                style={{ color: 'white' }}>
                                <MenuItem component={Link} to="/task" onClick={this.handleClose}>Task</MenuItem>
                                <MenuItem component={Link} to="/profile" onClick={this.handleClose}>Profile</MenuItem>
                            </Menu> */}

                            <Typography variant="subheading" color="inherit" className={classes.grow}>
                                <Button
                                    style={{ "color": "white" }}
                                    aria-owns={anchorE2 ? 'menu' : null}
                                    aria-haspopup="true"
                                    onClick={this.handleMenuAH} >My AH
                                </Button>
                            </Typography>
                            <Menu
                                id="menu"
                                anchorEl={anchorE2}
                                open={Boolean(anchorE2)}
                                onClose={this.handleCloseAH}
                                style={{ color: 'white' }}>
                                <MenuItem component={Link} to="/task" onClick={this.handleCloseAH}>Task</MenuItem>
                                <MenuItem component={Link} to="/profile" onClick={this.handleCloseAH}>Profile</MenuItem>
                            </Menu>

                        <Typography variant="subheading" color="inherit" className={classes.grow}>
                            <Button
                                style={{ "color": "white" }}
                                aria-owns={anchorEl ? 'simple-menu' : null}
                                aria-haspopup="true"
                                onClick={this.handleMenu} >Admin
                            </Button>
                        </Typography>
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={this.handleClose}
                            style={{ color: 'white' }}>
                            <MenuItem component={Link} to="/department" onClick={this.handleClose}>Department</MenuItem>
                            <MenuItem component={Link} to="/employee" onClick={this.handleClose}>Employees</MenuItem>
                            <MenuItem component={Link} to="/project" onClick={this.handleClose}>Project</MenuItem>
                        </Menu>
                        <Button color="inherit">Logout</Button>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

ButtonAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);
