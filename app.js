const choo = require('choo')
const app = choo()

const mainView = require('./views/main')

app.model(require('./models/main'))
app.router((route) => [
  route('/', mainView)
])

const tree = app.start()
document.body.appendChild(tree)