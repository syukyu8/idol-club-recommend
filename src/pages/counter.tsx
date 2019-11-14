import * as React from 'react'
import { bindActionCreators } from 'redux'
import { useDispatch, useMappedState } from 'redux-react-hook'
import { RootState } from '../store'
import { counterActions } from '../store/counter'
import { makeStyles, createStyles, Theme} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid'
//import { access } from 'fs';

const mapState = (state: RootState) => ({
  counter: state.counter
})
let stop =  0;

export default function Counter() {
  const action = bindActionCreators({ ...counterActions }, useDispatch())
  const { counter } = useMappedState(mapState)
  const [count, setCount] = React.useState(0);

  
  const Match = {
    0:"stream_style",
    1:"activity_frequency",
    2:"gender",
    3:"stream_content",
    4:"atmosphere",
    5:"looks",
    6:"hair_color",
    7:"belongs",
    8:"game_genre",
    9:"talk_style",
    10:"character",
    11:"movie_time",
    12:"channel_subscribers"
  }

  const database = [
    ["live","movie"],
    ["every","half","sometime"],
    ["male","female","unkown"],
    ["chat","playing_games","technology","asmr","dripping","sing"],
    ["cool","cute","neutral"],
    ["adult","child","evildoer"],
    ["red","blue","green","yellow","white","black","brown","purple","silver","gold","pink"],
    ["company","individual"],
    ["action","rpg","fps","music","novel","mystery","sport","adv","horror","simulation","boardgame"],
    ["hakihaki","ottori","hayakuti","mogomogo"],
    ["friendly","moderate","fine","sabasaba","tuntun"],
    ["ten_m","thirty_m","one_h","three_h","six_h","tweleve_h","twenty_four_h"],
    ["one_t","five_t","ten_t","fifty_t","one_handred_t","five_handred_t","thousand_t","more"]
  ]

  const table = {
    stream_style:"配信スタイル",
    activity_frequency:"活動頻度",
    gender:"性別",
    stream_content:"見たい動画内容",
    atmosphere:"雰囲気",
    looks:"見た目",
    hair_color:"髪色",
    belongs:"所属",
    game_genre:"好きなゲームジャンル",
    talk_style:"喋り方",
    character:"性格",
    movie_time:"動画時間",
    channel_subscribers:"チャンネル登録者数"
  }

  const base = [
    ["生放送","動画"],
    ["毎日","週半分","時々"],
    ["男性","女性","不明"],
    ["トーク","ゲーム実況","技術的な配信"," ASMR","垂れ流し","お歌"],
    ["かっこいい","かわいい","中性的"],
    ["大人","子供","人外"],
    ["赤色","青色","緑色","黄色","白色","黒色","茶色","紫色","銀色","金色","桃色"],
    ["企業","個人"],
    ["アクション","RPG","FPS","音ゲー","ノベルゲー","謎解き","スポーツ","アドベンチャー","ホラー","シミュレーション","ボードゲーム"],
    ["はきはき","おっとり","早口","もごもご"],
    ["優しい","控えめ","元気","サバサバ","ツンツン"],
    ["10分くらい","30分くらい","1時間くらい","3時間くらい","6時間くらい","12時間くらい","24時間くらい"],
    ["千人くらい","5千人くらい","1万人くらい","5万人くらい","10万人くらい","50万人くらい","100万人くらい","100万人以上"]
  ]

  function Question() {
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

    var arr = {...database};
    var long = arr.length;

    while (long){
      var j = Math.floor( Math.random() * long);
      var t = arr[--long];
      arr[long] = arr[j];
      arr[j] = t;
    }
    
    const handleClick = e => {
      e.preventDefault();
      const key = e.currentTarget.dataset.key;
      const value = e.currentTarget.dataset.value;
      console.log(key,value)
      pointTable[key][value]();
      setCount(count + 1)
      console.log(count)
      if(count >= 9){
        stop = 1;
        console.log("count",stop);
      }
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
    
    return(
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
  var max_counter = Math.max(counter.azuki_count,counter.chieri_count,counter.futaba_count,counter.iori_count,counter.iroha_count,counter.mememe_count,counter.mochi_count,counter.natori_count,counter.pino_count,counter.riko_count,counter.suzu_count,counter.tama_count)

  function Invite(){
    let array = [] 
    if(max_counter == counter.azuki_count){
      array.push({ href:"https://www.youtube.com/channel/UCmM5LprTu6-mSlIiRNkiXYg", name:"木曽あずき"})
    }
    if(max_counter == counter.chieri_count){
      array.push({ href:"https://www.youtube.com/channel/UCP9ZgeIJ3Ri9En69R0kJc9Q", name:"花京院ちえり"})
    }
    if(max_counter == counter.futaba_count){
      array.push({ href:"https://www.youtube.com/channel/UC5nfcGkOAm3JwfPvJvzplHg", name:"北上双葉"})
    }
    if(max_counter == counter.iori_count){
      array.push({ href:"https://www.youtube.com/channel/UCyb-cllCkMREr9de-hoiDrg", name:"ヤマトイオリ"})
    }
    if(max_counter == counter.iroha_count){
      array.push({ href:"https://www.youtube.com/channel/UCiGcHHHT3kBB1IGOrv7f3qQ", name:"金剛いろは"})
    }
    if(max_counter == counter.mememe_count){
      array.push({ href:"https://www.youtube.com/channel/UCz6Gi81kE6p5cdW1rT0ixqw", name:"もこ田めめめ"})
    }
    if(max_counter == counter.mochi_count){
      array.push({ href:"https://www.youtube.com/channel/UC02LBsjt_Ehe7k0CuiNC6RQ", name:"猫ノ木もち"})
    }
    if(max_counter == counter.natori_count){
      array.push({ href:"https://www.youtube.com/channel/UC1519-d1jzGiL1MPTxEdtSA", name:"八重沢なとり"})
    }
    if(max_counter == counter.pino_count){
      array.push({ href:"https://www.youtube.com/channel/UCMzxQ58QL4NNbWghGymtHvw", name:"カルロピノ"})
    }
    if(max_counter == counter.riko_count){
      array.push({ href:"https://www.youtube.com/channel/UCKUcnaLsG2DeQqza8zRXHiA", name:"牛巻りこ"})
    }
    if(max_counter == counter.suzu_count){
      array.push({ href:"https://www.youtube.com/channel/UCUZ5AlC3rTlM-rA2cj5RP6w", name:"神楽すず"})
    }
    if(max_counter == counter.tama_count){
      array.push({ href:"https://www.youtube.com/channel/UCOefINa2_BmpuX4BbHjdk9A", name:"夜桜たま"})
    }
    return array;
  }

  function App(){
    let array_app = Invite()
    console.log(array_app)
    if(stop == 1){
      console.log(stop)
      return(
      <div>
        <Grid container direction="column" alignItems="center" justify="center">
          あなたにオススメのVtuberは・・・
            {
            array_app.map(
              (item,index) => (
                <div key={index}>
                  <a href={item.href}>{item.name}</a>
                </div>
              )
            )
          }
        </Grid>
        </div>
      );
    }
  else {
    console.log(stop)
    return(
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
  return (
    <React.Fragment>
      <div data-testid="counter-count" style={{width: '100%',
        minHeight:'calc(100vh - 64px)',
        backgroundColor:'#fadce9',
        backgroundSize:'cover',
        backgroundRepeat: 'no-repeat'}}>
        <Grid container direction="column" alignItems="center" justify="center">
          <h1>Question</h1>
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
