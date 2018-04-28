const { app, html } = require("gzv")

const model = 0

const view = (model, dispatch) => html`
    <div>
        <h1>${model}</h1>
        <button onclick=${_ => dispatch("INCREMENT")}>+</button>
        <button onclick=${_ => dispatch("DECREMENT")}>-</button>
    </div>`

const update = {
    INCREMENT: model => model + 1,
    DECREMENT: model => model - 1
}

app(model, view, update)