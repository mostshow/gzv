const { app, html } = require("gzv")

const model = "hello, world"
const view = model => html`<h1>${model}</h1>`

app(model, view)