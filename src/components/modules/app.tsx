import * as React from 'react'
import { useMappedState } from 'redux-react-hook'
import { Question } from '../modules/question'
import { Invite } from '../modules/invite'
import { mapState } from '../modules/invite'
import Grid from '@material-ui/core/Grid'
import { Typography, Box } from '@material-ui/core'

export function App(){
    const { counter } = useMappedState(mapState)
    //maxをとってくる
    let array_app = Invite()
    console.log(array_app)
    if(counter.stop == 1){
      console.log(counter.stop)
      return(
        //名前とリンクを出す
      <div>
        <Grid container direction="column" alignItems="center" justify="center">
          <Box p={2}>
            <Typography variant="h4">
              あなたにオススメのVtuberは・・・
            </Typography>
          </Box>
            {
            array_app.map(
              (item,index) => (
                <div key={index}>
                  <Typography variant="h4" style={{color:'#000000'}}>
                    <Box p={1} fontWeight="fontWeightBold">
                    <a href={item.href}>{item.name}</a>
                    </Box>
                  </Typography>
                </div>
              )
            )
          }
          
        </Grid>
      </div>
      );
    }
  else {
    console.log(counter.stop)
    return(
      //質問出す
      <div className="App">
        {
          [0,1,2,3].map(
            key => (
              <Question key={key} />
            )
          )
        }
      </div>
      );
    }
  }