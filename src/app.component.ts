import { generateName } from './utils'
import './components/giphy'

const templateElement = document.createElement('template')

export class AppRoot extends HTMLElement {
  static is = generateName('app-root')
  static template = () => `
      <style>
      
      </style>
      <h1>Hello TypeScript starter poop!!!</h1>
      <div>
        Thanks to Parcel booting up a configurable blank TypeScript projects have never been easier ! ❤️
      </div>
      <p>Check <pre>tsconfig.json</pre> and configure it as you please 😎</p>
      <tscd-giphyembed postid="1234567"></tscd-giphyembed>
    `
  constructor() {
    super()
    const shadowRoot = this.attachShadow({ mode: 'open' })
    templateElement.innerHTML = AppRoot.template()
    shadowRoot.appendChild(templateElement.content.cloneNode(true))
  }
}
customElements.define(AppRoot.is, AppRoot)
