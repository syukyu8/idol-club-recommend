import { useMappedState } from 'redux-react-hook'
import { RootState } from '../../store'

export const mapState = (state: RootState) => ({
    counter: state.counter
  })
  export function Invite(){
    const { counter } = useMappedState(mapState)
    var max_counter = Math.max(counter.azuki_count,counter.chieri_count,counter.futaba_count,counter.iori_count,counter.iroha_count,counter.mememe_count,counter.mochi_count,counter.natori_count,counter.pino_count,counter.riko_count,counter.suzu_count,counter.tama_count)

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