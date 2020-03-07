import * as React from 'react'
import { App } from '../components/modules/app'
import Grid from '@material-ui/core/Grid'
import logo from '../images/idol_syugo.png'
import { Typography, Box } from '@material-ui/core'


export default function Counter() {
  return (
    <React.Fragment>
      <div data-testid="counter-count" style={{width: '100%',
        minHeight:'calc(100vh - 64px)',
        backgroundColor:'#fadce9',
        backgroundSize:'cover',
        backgroundRepeat: 'no-repeat',
        backgroundImage:`url(${logo})`}}>
        <Grid container direction="column" alignItems="center" justify="center">
          <Box p={4}>
            <Typography variant="h1">
              Question
            </Typography>
          </Box>
        </Grid>
      {/* 夜桜たま:{counter.tama_count}
      北上双葉:{counter.futaba_count}
      金剛いろは:{counter.iroha_count}
      花京院ちえり:{counter.chieri_count}
      カルロピノ:{counter.pino_count}
      もこ田めめめ:{counter.mememe_count}
      八重沢なとり:{counter.natori_count}
      ヤマトイオリ:{counter.iori_count}
      猫乃木もち:{counter.mochi_count}
      神楽ずず:{counter.suzu_count}
      牛巻りこ:{counter.riko_count}
      木曽あずき:{counter.azuki_count} */}
        <App />
      </div>
    </React.Fragment>
  )
}
