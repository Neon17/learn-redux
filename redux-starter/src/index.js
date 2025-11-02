import store from "./store.js";

console.log(store);

// if store having UI is not visible, then we should unsubscribe
const unsubscribe = store.subscribe(()=>{
    // this function is called every time the store is updated
    console.log("Store changed!", store.getState());
})

store.dispatch({
    type: "bugAdded",
    payload: {
        description: "Bug 1"
    } 
});

unsubscribe();

store.dispatch({
    type: "bugRemoved",
    payload: {
        id: 1
    }
});

