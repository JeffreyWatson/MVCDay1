import { ProxyState } from "../AppState.js";


// class valueService {
//   addValue() {
//     ProxyState.values = [...ProxyState.values, new Value({ title: Math.random() })]
//   }
//   removeValue(id) {
//     const values = ProxyState.values.filter(v => v.id !== id)
//     ProxyState.values = values
//   }
// }

// export const valuesService = new ValuesService();
export const racerService = new RacerService()

