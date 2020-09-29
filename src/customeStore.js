
import reducer from './reducer';

function createStore(reducer) {
    // create store expected a reducer function
    //state is a private variable
    let state;
    let listeners = [];

    function subscribe(listener) {
        //listener is a function that subscriber receive
        listeners.push(listener);
        console.log('store changed')
    }


    function dispatch(action) {
        //call the reducer for get the new state
        //notify subscriber
        state = reducer(state, action);
        //reducer send an action and recieve a last state of state
        //state recieve last state of state
        for (let i = 0;i < listeners.length; i++){
            listeners[i]()
        }
    }
    function getState() {
        return state;
    }

    return {
        subscribe,
        dispatch,
        getState,
    };
}

export default createStore(reducer);