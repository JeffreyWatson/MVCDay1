import { Racer } from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Racer').Racer[]} */
  racer = [new Racer('🦊', 'Fox', '3'), new Racer('🐺', 'Wolf', '30'), new Racer('🐢', 'Tortoise', '11'), new Racer('🦎', 'Jeffrey', '5')]
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
