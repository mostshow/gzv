const { app, html } = require("gzv")

const model = { name: "" }

const view = (model, dispatch) => html`
    <div>
        <h1>Hello${model.name === "" ? "!" : `, ${model.name}!`}</h1>
        Name: <input type="text" oninput=${e =>
            dispatch({
                type: "UPDATE_TEXT",
                value: e.target.value
            })
        }/>
    </div>`

const update = {
    UPDATE_TEXT: (model, action) =>
        Object.assign({}, model, { name: action.value })
}

app(model, view, update)