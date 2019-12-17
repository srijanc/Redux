

// Creating store
const redux = require('redux')
const createStore = redux.createStore

// console.log("From index.js")

const BUY_CAKE = 'BUY_CAKE'

// Define Action
// {
//     type: BUY_CAKE
//     info: 'First redux action'
// }

// Action creator: Returns an action
function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'First redux action'
    }
}

// Reducer
// (previousState, action) => newState

const initialState = {
    numOfCakes: 10
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case BUY_CAKE: return {
            ... state,      // making copy of state object
            numOfCakes: state.numOfCakes - 1
        }

        default: return state
    }
}

// Creating store
const store = createStore(reducer)
console.log('Initial State: ', store.getState());
const unsubscribe = store.subscribe(() => console.log('Updated State: ', store.getState()))

store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())

unsubscribe()