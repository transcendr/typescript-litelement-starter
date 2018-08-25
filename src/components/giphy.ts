import { LitElement, html } from '@polymer/lit-element'

interface NonContentView {
  type: string
}

interface GiphyEmbedProps {
  giphyId: string
}

class GiphyEmbed extends LitElement implements GiphyEmbedProps {
  giphyId: string

  static get properties() {
    return {
      postid: String,
    }
  }

  constructor() {
    super()
    console.log(this)
  }

  __setRoot(root: object) {
    this.root = root
  }

  _firstRendered() {
    this.__initRender()
  }

  __initRender() {
    this.__setRoot(this.shadowRoot)
  }

  _render({ postid }) {
    this.timesRendered++
    this.giphyId = postid
    // console.log(this);
    let placeholder = this.__renderContentView({
      type: 'loading',
    })
    return placeholder
  }

  __renderContentView(options: NonContentView) {
    console.log('renderNonContentView options', options)
    return html`
      <img src="https://i.giphy.com/${this.giphyId}.gif" />
    `
  }
}

export default GiphyEmbed

//https://stackoverflow.com/questions/46496097/prevent-duplicate-component-registration-when-using-webpack2-with-hot-reload
try {
  customElements.define('tscd-giphyembed', GiphyEmbed)
} catch (e) {
  console.log('Web component already exists')
}
