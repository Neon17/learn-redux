import store from "./store.js";
import { bugAdded, bugRemoved, bugResolved } from "./actions.js";

console.log(store);

// if store having UI is not visible, then we should unsubscribe
const unsubscribe = store.subscribe(()=>{
    // this function is called every time the store is updated
    console.log("Store changed!", store.getState());
})

store.dispatch(bugAdded("Bug 1"));

unsubscribe();

// store.dispatch(bugRemoved(1));

store.dispatch(bugResolved(1));

console.log(store.getState());

