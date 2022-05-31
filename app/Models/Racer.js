import { generateId } from "../Utils/generateId.js"

export class Racer {
  constructor(emoji, name, number) {
    this.emoji = emoji
    this.name = name
    this.number = number
  }

  get Template() {
    return /*html*/`
          <div class="bg-dark m-2 text-light">
            <h3>${this.emoji}</h3>
            <h3>${this.name}${this.number}</h3>
          </div>
    `
  }
}
