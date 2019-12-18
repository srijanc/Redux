

// Creating store
const redux = require('redux')
const reduxLogger = require('redux-logger')

const createStore = redux.createStore
const combineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware
const logger = reduxLogger.createLogger()

// console.log("From index.js")

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'

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

function buyIceCream() {
    return {
        type: BUY_ICECREAM,
        info: 'Second redux action'
    }
}

// Reducer
// (previousState, action) => newState

// const initialState = {
//     numOfCakes: 10,
//     numOfIceCreams: 20
// }

const initialCakeState = {
    numOfCakes: 10
}

const initialIceCreamState = {
    numOfIceCream: 10
}

const cakeReducer = (state = initialCakeState, action) => {
    switch(action.type) {
        case BUY_CAKE: return {
            ... state,      // making copy of state object
            numOfCakes: state.numOfCakes - 1
        }

        default: return state
    }
}

const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch(action.type) {
        case BUY_ICECREAM: return {
            ... state,      // making copy of state object
            numOfIceCreams: state.numOfIceCreams - 1
        }

        default: return state
    }
}

// Combining reducers
const rootReducer = combineReducers ({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})

// Creating store
const store = createStore(rootReducer, applyMiddleware(logger))      // Can accept only one reducer
console.log('Initial State: ', store.getState());
const unsubscribe = store.subscribe(() => console.log('Updated State: ', store.getState()))

store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())

store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())

unsubscribe()