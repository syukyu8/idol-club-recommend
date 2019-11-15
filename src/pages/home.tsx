import * as React from 'react'
import Grid from '@material-ui/core/Grid'
import logo from '../images/idol_syugo.png'
import NavLink from '../components/elements/nav-link'

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
          <h1>オススメしたいアイドル部</h1>
        </Grid>
        <Grid item xs={12}>
          質問に答えていくだけであなたにオススメの子を紹介します（作成者の独断です)
        </Grid>
        <Grid item xs={12}>
          いずれはVtuber全員をオススメできるようなサイトにしたいです
        </Grid>
        <Grid item xs={12}>
          <NavLink exact to="/counter">
            質問に答える(10問です！)
          </NavLink>
        </Grid>
      </Grid>
      </div>
    </React.Fragment>
  )
}
