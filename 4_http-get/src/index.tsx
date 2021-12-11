import { render } from 'react-dom'
import { Users } from './Users/Users'
import './index.css'

const div = document.createElement('div')
document.body.appendChild(div)

render(
  <Users/>,
  div,
)
