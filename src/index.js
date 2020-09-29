import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './store'
import createStore from "./customeStore";
import * as action from './actions';
import {generatorExample, generatorExampleSecond} from "./genearator";

console.log(store, 'redux store ')
console.log(store.state,'state')
createStore.state = 1
console.log(createStore.state,'my redux store')
console.log(createStore.getState(), 'get state from my redux') // i received undefined because the state that defined
//in this page is totally different from the state in redux Custom

createStore.dispatch(action.bugAdded('1'));
console.log(createStore.getState(),'after call a action');
// subscribe is a function that send a notify that publish a message or publish state that state is
//updated and ui should recieve.

createStore.subscribe((store)=>{
    console.log('store changed', store)
})


const generator = generatorExample();
const gen2 = generatorExampleSecond();
console.log(generator,'genertor');
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())

for(let i of generatorExample()) {
    console.log(i)
}
console.log(gen2.next().value);
console.log(gen2.next().value);
console.log(gen2.next().value);
console.log(gen2.next().value);
for(let i of generatorExampleSecond(100)){
    console.log(i)
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
