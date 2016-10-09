import React from 'react'
import { connect } from 'react-redux'
import { bodyClicked } from './Actions'
import {MyForm, Raw} from './MyForm'

const clicked = (dispatch) => {
  dispatch(bodyClicked())
}

const App = ({ dispatch, state }) => (
  <div>
    <h1 onClick={clicked.bind(null, dispatch)}>Click Me and watch the console!</h1>
    <MyForm />
    <Raw value={state.form.MyForm}/>
  </div>
)

const mapStateToProps = (state) => {
  return { state }
}
export default connect(mapStateToProps)(App) 
