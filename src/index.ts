// import './components/@native-shim'

import './style.css'
import './components/giphy'

const appDiv: HTMLElement = document.querySelector('main')
appDiv.innerHTML = `
  <h1>Typescript LitElement Component Starter</h1>
  <p>Get your web components working with LitElement and Typescript</p>
  <tscd-giphyembed postid="uWtyaTIdDSMQ8"></tscd-giphyembed>
`
