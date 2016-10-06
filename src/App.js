import React from 'react'
import { connect } from 'react-redux'
import { bodyClicked } from './Actions'

const clicked = (dispatch) => {
  dispatch(bodyClicked())
}

const App = ({ dispatch }) => (
  <h1 onClick={clicked.bind(null, dispatch)}>Click Me and watch the console!</h1>
)

const mapStateToProps = (state) => state
export default connect(mapStateToProps)(App) 
