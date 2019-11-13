import * as React from 'react'
import Grid from '@material-ui/core/Grid'
import logo from '../images/test.png'
import NavLink from '../components/elements/nav-link'

const style = {
  width: '100%',
  height: '11rem',
  backgroundImage: `url(${logo})`
}

export default function Home() {
  
  return (
    <React.Fragment>
      {/* <div>
        <img style={ style } />
      </div> */}
      <Grid container 
      spacing={3}
      direction="column"
      alignItems="center"
      justify="center">
        <Grid item xs={12}>
          <h1>オススメしたいアイドル部</h1>
        </Grid>
        <Grid item xs={12}>
          質問に答えていくだけであなたにオススメの子を紹介します（作成者の独断です)
        </Grid>
        <Grid item xs={12}>
          いずれはVtuber全員をオススメできるようなサイトにしたいです
        </Grid>
        <Grid item xs={12}>
          <NavLink exact activeClassName="active" to="/counter">
            質問に答える(10問です！)
          </NavLink>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}
