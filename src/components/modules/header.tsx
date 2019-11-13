import * as React from 'react'
import NavLink from '../elements/nav-link'
import { createStyles, makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar'
import { Grid, Toolbar } from '@material-ui/core';
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    appbar: {
      alignItems: 'center',
    }
  }),
)

export default function Header() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar>
          <Grid container direction="row" alignItems="center" justify="center">
            <Grid xs={6}>
              <NavLink exact activeClassName="active" to="/">
                <Typography variant="h3">
                  Top page
                </Typography>
              </NavLink>
            </Grid>
            <Grid xs={6}>
              <NavLink exact activeClassName="active" to="/counter">
                <Typography variant="h3">
                  Question
                </Typography>
              </NavLink>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  )
}

