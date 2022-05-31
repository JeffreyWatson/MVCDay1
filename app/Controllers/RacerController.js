import { ProxyState } from "../AppState.js";
import { racerService } from "../Services/RacerService.js";
import { Pop } from "../Utils/Pop.js";


//Private
function _draw() {
  let racer = ProxyState.racer
  let template = ''
  racer.forEach(r => template += r.Template)
  document.getElementById('racer').innerHTML = template
}

//Public
export class RacerController {
  constructor() {

    _draw()
  }

  addValue() {
    valuesService.addValue()
  }

  async removeValue(id) {
    const yes = await Pop.confirm('Remove Value')
    if (yes) {
      valuesService.removeValue(id)
    }
  }
}
