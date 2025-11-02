import store from "./store.js";
import * as actions from "./actionTypes";
import { bugAdded, bugRemoved } from "./actions.js";

console.log(store);

// if store having UI is not visible, then we should unsubscribe
const unsubscribe = store.subscribe(()=>{
    // this function is called every time the store is updated
    console.log("Store changed!", store.getState());
})

store.dispatch(bugAdded("Bug 1"));

unsubscribe();

store.dispatch(bugRemoved(1));

