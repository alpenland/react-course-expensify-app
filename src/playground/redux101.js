import { createStore } from 'redux';

//action generator: functions that return action objects
const incrementCount = ({ incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({ count } = {}) => ({
    type: 'SET',
    count
});

const resetCount = () => ({
    type: 'RESET'
});

//Actions describe that something has happened
//Reducers specify exactly HOW the state changes

//Reuducers
// 1. Pure Functions - the output is only determined by the input
//    input is state and actions - cannot use or change things outside of the function
//    truly local only!
// 2. Never change state or action
//    these get passed in, but we never want to change them - only read off them
//    and then return new object from them

const countReducer = (state = {count: 0}, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'SET':
            return {
                count: action.count
            };
        case 'RESET':
            return {
                count: 0
            };
        default:
            return state;
    }
}

const store = createStore(countReducer);

//store tracks our changing data over time
//to call createStore, must pass function in and that function gets called right away
//set default state since it gets called right away, otherwise would be undefined

//Actions let us change values in the reduc store
//Action - an object that gets sent to the store. 
//  It describes an action that the store shold take


const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

// store.dispatch({
//     type: 'INCREMENT', //action type name - only requried item
//     incrementBy: 5
// });

store.dispatch(incrementCount({ incrementBy: 5 }));

// store.dispatch({
//     type: 'INCREMENT' //action type name
// });

store.dispatch(incrementCount());

// store.dispatch({
//     type: 'RESET' //action type name
// });

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

// store.dispatch({
//     type: 'DECREMENT' //action type name
// });

// store.dispatch({
//     type: 'DECREMENT', //action type name
//     decrementBy: 10
// });

// store.dispatch ({
//     type: 'SET',
//     count: 101
// });

store.dispatch(setCount( {count: 101} ));