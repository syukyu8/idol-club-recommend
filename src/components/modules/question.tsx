import * as React from 'react'
import { bindActionCreators } from 'redux'
import { useDispatch } from 'redux-react-hook'
import { useMappedState } from 'redux-react-hook'
import { makeStyles, createStyles, Theme} from '@material-ui/core/styles'
import { counterActions } from '../../store/counter'
import { mapState } from '../modules/invite'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import { Match, database, table, base } from './data';
export function Question() {
    const action = bindActionCreators({ ...counterActions }, useDispatch())
    const { counter } = useMappedState(mapState)
    const [count, setCount] = React.useState(0);
    //選択肢ごとに増加するポイント設定
    const pointTable = {
      stream_style:{
        live: () => {
          action.increment_tama()
          action.increment_futaba() 
          action.increment_iroha()
          action.increment_chieri()
          action.increment_pino()
          action.increment_mememe()
          action.increment_natori()
          action.increment_iori()
          action.increment_mochi()
          action.increment_suzu()
          action.increment_riko()
          action.increment_azuki()
        },
        movie: () => {
          action.increment_mochi()
          action.increment_riko()
          action.increment_azuki()
        }
      },
      activity_frequency:{
        every: () => {
          action.increment_tama()
        },
        half: () => {
          action.increment_tama()
          action.increment_chieri()
          action.increment_suzu()
          action.increment_mememe()
          action.increment_natori()
          action.increment_iroha()
          action.increment_pino()
        },
        sometime: () => {
          action.increment_azuki()
          action.increment_riko()
          action.increment_mochi()
          action.increment_iori()
          action.increment_futaba()
        }
      },
      gender:{
        male: () => {
          console.log("nothing")
        },
        female: () => {
          action.increment_tama()
          action.increment_futaba() 
          action.increment_iroha()
          action.increment_chieri()
          action.increment_pino()
          action.increment_mememe()
          action.increment_natori()
          action.increment_iori()
          action.increment_mochi()
          action.increment_suzu()
          action.increment_riko()
          action.increment_azuki()
        },
        unkown: () => {
          console.log("nothing")
        }
      },
      stream_content:{
        chat: () => {
          action.increment_tama()
          action.increment_futaba()
          action.increment_iroha()
          action.increment_chieri()
          action.increment_pino()
          action.increment_mememe()
          action.increment_natori()
          action.increment_iori()
          action.increment_mochi()
          action.increment_suzu()
          action.increment_riko()
        },
        playing_games: () => {
          action.increment_tama()
          action.increment_futaba()
          action.increment_iroha()
          action.increment_chieri()
          action.increment_pino()
          action.increment_mememe()
          action.increment_natori()
          action.increment_iori()
          action.increment_mochi()
          action.increment_suzu()
          action.increment_riko()
          action.increment_azuki()
        },
        technology: () => {
          action.increment_mememe()
        },
        asmr: () => {
          action.increment_tama()
          action.increment_futaba()
          action.increment_chieri()
          action.increment_natori()
          action.increment_mochi()
          action.increment_iroha()
        },
        dripping: () => {
          console.log("nothing")
        },
        sing: () => {
          action.increment_mochi()
          action.increment_mememe()
          action.increment_natori()
          action.increment_riko()
          action.increment_suzu()
        }
      },
      atmosphere:{
        cool: () => {
          action.increment_azuki()
          action.increment_chieri()
          action.increment_suzu()
          action.increment_riko()          
        },
        cute: () => {
          action.increment_tama()
          action.increment_futaba()
          action.increment_iroha()
          action.increment_chieri()
          action.increment_pino()
          action.increment_mememe()
          action.increment_natori()
          action.increment_iori()
          action.increment_mochi()
          action.increment_suzu()
          action.increment_riko()
          action.increment_azuki()          
        },
        neutral: () => {
          action.increment_azuki()
          action.increment_riko()          
        }
      },
      looks:{
        adult: () => {
          action.increment_tama()
          action.increment_futaba()
          action.increment_iroha()
          action.increment_chieri()
          action.increment_mememe()
          action.increment_natori()
          action.increment_iori()
          action.increment_mochi()
          action.increment_suzu()
          action.increment_riko()
          action.increment_azuki()          
        },
        child: () => {
          action.increment_pino()
        },
        evildoer: () => {
          console.log("nothing")
        }
      },
      hair_color:{
        red: () => {
          console.log("nothing")
        },
        blue: () => {
          action.increment_iori()
        },
        green: () => {
          action.increment_suzu()
        },
        yellow: () => {
          action.increment_iroha()
          action.increment_mochi()
          action.increment_riko()          
        },
        white: () => {
          action.increment_mememe()
          action.increment_tama()
        },
        black: () => {
          action.increment_natori()
        },
        brown: () => {
          action.increment_chieri()
        },
        purple: () => {
          action.increment_azuki()
          action.increment_pino()          
        },
        silver: () => {
          action.increment_tama()
        },
        gold: () => {
          action.increment_iroha()
          action.increment_mochi()
          action.increment_riko()            
        },
        pink: () => {
          action.increment_futaba()
        }
      },
      belongs:{
        company: () => {
          action.increment_tama()
          action.increment_futaba()
          action.increment_iroha()
          action.increment_chieri()
          action.increment_pino()
          action.increment_mememe()
          action.increment_natori()
          action.increment_iori()
          action.increment_mochi()
          action.increment_suzu()
          action.increment_riko()
          action.increment_azuki()              
        },
        individual: () => {
          console.log("nothing")
        }
      },
      game_genre:{
        action: () => {
          action.increment_tama()
          action.increment_chieri()
          action.increment_futaba()
          action.increment_iori()
          action.increment_mememe()
          action.increment_natori()
          action.increment_pino()
          action.increment_suzu()          
        },
        rpg: () => {
          action.increment_tama()
        },
        fps: () => {
          action.increment_tama()
          action.increment_chieri()
          action.increment_futaba()
          action.increment_iroha()
          action.increment_mememe()
          action.increment_natori()
          action.increment_pino()
          action.increment_riko()
        },
        music: () => {
          action.increment_chieri()
          action.increment_natori()
          action.increment_pino()          
        },
        novel: () => {
          action.increment_tama()
          action.increment_futaba()          
        },
        mystery: () => {
          action.increment_chieri()
          action.increment_iroha()
          action.increment_suzu()
        },
        sport: () => {
          action.increment_natori()
        },
        adv: () => {
          console.log("nothing")
        },
        horror: () => {
          action.increment_tama()
          action.increment_futaba()
          action.increment_iroha()
          action.increment_chieri()
          action.increment_pino()
          action.increment_mememe()
          action.increment_natori()
          action.increment_iori()
          action.increment_mochi()
          action.increment_suzu()
          action.increment_riko()
          action.increment_azuki()             
        },
        simulation: () => {
          console.log("nothing")
        },
        boardgame: () => {
          action.increment_tama()
        }
      },
      talk_style:{
        hakihaki: () => {
          action.increment_riko()
          action.increment_natori()
          action.increment_suzu()
          action.increment_mochi()
        },
        ottori: () => {
          action.increment_futaba()
          action.increment_iori()
          action.increment_mememe()
          action.increment_pino()
        },
        hayakuti: () => {
          action.increment_tama()
          action.increment_chieri()
          action.increment_iroha()
        },
        mogomogo: () => {
          action.increment_azuki()
        }
      },
      character:{
        friendly: () => {
          action.increment_mememe()
          action.increment_iori()
          action.increment_natori()
          action.increment_chieri()
        },
        moderate: ()  => {
          action.increment_azuki()
        },
        fine: () => {
          action.increment_riko()
          action.increment_mochi()
          action.increment_iroha()
        },
        sabasaba: () => {
          action.increment_tama()
          action.increment_suzu()
          action.increment_pino()
        },
        tuntun: () => {
          action.increment_futaba()
        }
      },
      movie_time:{
        ten_m: () => {
          action.increment_azuki()
          action.increment_mochi()
        },
        thirty_m: () => {
          console.log("nothing")
        },
        one_h: () => {
          action.increment_tama()
          action.increment_futaba()
          action.increment_iroha()
          action.increment_chieri()
          action.increment_pino()
          action.increment_mememe()
          action.increment_natori()
          action.increment_iori()
          action.increment_mochi()
          action.increment_suzu()
          action.increment_riko()
        },
        three_h: () => {
          action.increment_natori()
          action.increment_suzu()          
        },
        six_h: () => {
          console.log("nothing")
        },
        tweleve_h: () => {
          console.log("nothing")
        },
        twenty_four_h: () => {
          console.log("nothing")
        }
      },
      channel_subscribers:{
        one_t: () => {
          console.log("nothing")
        },
        five_t:() => {
          console.log("nothing")
        },
        ten_t:() => {
          console.log("nothing")
        },
        fifty_t:() => {
          console.log("nothing")
        },
        one_handred_t:() => {
          console.log("nothing")
        },
        five_handred_t:() => {
          action.increment_azuki()
          action.increment_chieri()
          action.increment_futaba()
          action.increment_iori()
          action.increment_iroha()
          action.increment_mochi()
          action.increment_natori()
          action.increment_pino()
          action.increment_riko()
          action.increment_suzu()
        },
        thousand_t:() => {
          action.increment_mememe()
          action.increment_tama()
        },
        more: () => {
          console.log("nothing")
        }
      }
    }
    const row = Math.floor(Math.random() * database.length);
    const col = Math.floor(Math.random() * database[row].length);

    // var arr = {...database};
    // var long = arr.length;

    // while (long){
    //   var j = Math.floor( Math.random() * long);
    //   var t = arr[--long];
    //   arr[long] = arr[j];
    //   arr[j] = t;
    // }
    
    const handleClick = e => {
       e.preventDefault();
    //   const key = e.currentTarget.dataset.key;
    //   const value = e.currentTarget.dataset.value;
    //   console.log(key,value)
    //   pointTable[key][value]();
      setCount(count + 1)
      //console.log(count)
    //   if(count >= 9){
    //       action.increment
    //     //stop = 1;
    //     console.log(counter.stop);
    //   }
    };

    
    const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      button: {
        margin: theme.spacing(1),
      },
      input: {
        display: 'none',
      },
    }),
  )

  const classes = useStyles()
  React.useEffect(()=>{
      console.log(count)
  },[count]
  )  

    return(
      //選択肢のボタン
      <div>
        <Grid container direction="column" alignItems="center" justify="center">
          <Button variant="contained" size="large" color="primary" className={classes.button}
              data-key={Match[row]}
              data-value={database[row][col]}
              onClick={handleClick} >{`${table[Match[row]]}: ${base[row][col]}`}
          </Button>
        </Grid>
      </div>
    );
  }