import React, { Fragment } from 'react'
import IconButtonCustom from './Iconbuttoncustom'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Navbar = ({ nombre }) => {


  const classes = useStyles();

  return (
    <Fragment>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButtonCustom edge="start" className={classes.menuButton} color="inherit" aria-label="menu"></IconButtonCustom>
            {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton> */}
            <Typography variant="h6" className={classes.title}>
              Celulares para {nombre} !
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    </Fragment>
  );
}

export default Navbar;