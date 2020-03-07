import * as React from 'react'
import Grid from '@material-ui/core/Grid'
import logo from '../images/idol_syugo.png'
import NavLink from '../components/elements/nav-link'
import { Typography, Box } from '@material-ui/core';

export default function Home() {
  
  return (
    <React.Fragment>
      <div style={{
        width: '100%',
        minHeight:'calc(100vh - 64px)',
        backgroundColor:'#fadce9',
        backgroundSize:'cover',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(${logo})`
        }}>
        <Grid container 
        direction="column"
        alignItems="center"
        justify="center">
          <Grid item xs={12}>
            <Box p={4}>
              <Typography variant="h1">
                オススメしたいアイドル部
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box p={2}>
              <Typography variant="h4">
                質問に答えていくだけであなたにオススメの子を紹介します（作成者の独断です)
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box p={2}>
              <Typography variant="h4">
                いずれはVtuber全員をオススメできるようなサイトにしたいです
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <NavLink exact to="/counter">
              <Typography variant="h4" style={{color:'#000000'}}>
                <Box p={2} fontWeight="fontWeightBold">
                  →質問に答える(10問です！)
                </Box>
              </Typography>
            </NavLink>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  )
}
