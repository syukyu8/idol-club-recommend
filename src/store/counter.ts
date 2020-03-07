import { createAggregate } from 'redux-aggregate'

export interface CounterState {
  tama_count: number,
  futaba_count: number,
  iroha_count: number,
  chieri_count: number,
  pino_count: number,
  mememe_count: number,
  natori_count: number,
  iori_count: number,
  mochi_count: number,
  suzu_count: number,
  riko_count: number,
  azuki_count: number,
  stop: number
}

const initialState: CounterState = {
  tama_count: 0,
  futaba_count: 0,
  iroha_count: 0,
  chieri_count: 0,
  pino_count: 0,
  mememe_count: 0,
  natori_count: 0,
  iori_count: 0,
  mochi_count: 0,
  suzu_count: 0,
  riko_count: 0,
  azuki_count: 0,
  stop: 0
}

const mutations = {
  clear: (): CounterState => initialState,
  increment: (state: CounterState): CounterState => ({
    ...state,
    stop: state.stop + 1
    //tama_count: state.tama_count + 1,
    // futaba_count: state.futaba_count + 1,
    //iroha_count: state.iroha_count + 1,
    // chieri_count: state.chieri_count + 1,
    // pino_count: state.pino_count + 1,
    // mememe_count: state.mememe_count + 1,
    // natori_count: state.natori_count + 1,
    // iori_count: state.iori_count + 1,
    // mochi_count: state.mochi_count + 1,
    // suzu_count: state.suzu_count + 1,
    // riko_count: state.riko_count + 1,
    // azuki_count: state.azuki_count + 1

  }),
  decrement: (state: CounterState): CounterState => ({
    ...state,
    //tama_count: state.tama_count - 1,
    // futaba_count:state.futaba_count - 1,
    //iroha_count:state.iroha_count - 1,
    // chieri_count:state.chieri_count - 1,
    // pino_count:state.pino_count - 1,
    // mememe_count:state.mememe_count - 1,
    // natori_count:state.natori_count - 1,
    // iori_count:state.iori_count - 1,
    // mochi_count:state.mochi_count - 1,
    // suzu_count:state.suzu_count - 1,
    // riko_count:state.riko_count - 1,
    // azuki_count:state.azuki_count - 1
  }),
  increment_tama: (state: CounterState): CounterState => ({
    ...state,
    tama_count: state.tama_count + 1
  }),
  increment_futaba: (state: CounterState): CounterState => ({
    ...state,
    futaba_count: state.futaba_count + 1
  }),
  increment_iroha: (state: CounterState): CounterState => ({
    ...state,
    iroha_count: state.iroha_count + 1
  }),
  increment_chieri: (state: CounterState): CounterState => ({
    ...state,
    chieri_count: state.chieri_count + 1
  }),
  increment_pino: (state: CounterState): CounterState => ({
    ...state,
    pino_count: state.pino_count + 1
  }),
  increment_mememe: (state: CounterState): CounterState => ({
    ...state,
    mememe_count: state.mememe_count + 1
  }),
  increment_natori: (state: CounterState): CounterState => ({
    ...state,
    natori_count: state.natori_count + 1
  }),
  increment_iori: (state: CounterState): CounterState => ({
    ...state,
    iori_count: state.iori_count + 1
  }),
  increment_mochi: (state: CounterState): CounterState => ({
    ...state,
    mochi_count: state.mochi_count + 1
  }),
  increment_suzu: (state: CounterState): CounterState => ({
    ...state,
    suzu_count: state.suzu_count + 1
  }),
  increment_riko: (state: CounterState): CounterState => ({
    ...state,
    riko_count: state.riko_count + 1
  }),
  increment_azuki: (state: CounterState): CounterState => ({
    ...state,
    azuki_count: state.azuki_count + 1
  }),
  // incrementBy: (state: CounterState, count: number): CounterState => ({
  //   tama_count: state.tama_count + count
  // }),
  // decrementBy: (state: CounterState, count: number): CounterState => ({
  //   tama_count: state.tama_count - count
  // })
}

export const namespace = 'counter/'
const { reducerFactory, creators, types } = createAggregate(mutations, namespace)

export const counterReducer = reducerFactory(initialState)
export const counterActions = creators
export const counterTypes = types
