import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
    flexGrow: 1,
  },
};

function NavBar(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar style={{backgroundColor: '#4A90E2', color: 'white'}} position="static" color="default">
        <Toolbar>
          <Typography variant="title" color="inherit">
            Contacts App
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);