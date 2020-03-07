import * as React from 'react'
import NavLink from '../elements/nav-link'
import { createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar'
import { Toolbar, Box } from '@material-ui/core';
import Typography from '@material-ui/core/Typography'


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    }
  }),
)

export default function Header() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <AppBar position="static" style={{backgroundColor:'#5fa2fa'}}>
        <Toolbar>
          <Box display="flex" alignItems="center" justifyContent="center" width="100%">
            <NavLink exact to="/">
              <Typography variant="h3" style={{color:'#ffffff'}}>
                Top page
              </Typography>
            </NavLink>
            <NavLink exact to="/counter" style={{marginLeft:32}}>
              <Typography variant="h3" style={{color:'#ffffff'}}>
                Question
              </Typography>
            </NavLink>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
    
  )
}

