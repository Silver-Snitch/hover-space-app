import { CLEAR_SESSION, SET_SESSION } from '../constants/actionTypes'

const initialState = {
  isLoggedIn: false
}

const session = (state = initialState, action) => {
  console.log("Session details")
  console.log(action)
  console.log(state)
  switch (action.type) {
    case SET_SESSION:
      return Object.assign({},
        action.session,
        { isLoggedIn: true })

    case CLEAR_SESSION:
      return initialState

    default:
      return state
  }
}

export default session
