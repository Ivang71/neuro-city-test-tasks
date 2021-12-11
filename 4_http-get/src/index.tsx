import { render } from 'react-dom'
import { Users } from './Users/Users'

const div = document.createElement('div')
document.body.appendChild(div)

render(
  <Users/>,
  div,
)
