# Think in REDUX

We are building Bug Tracker in this starter redux project.

- ### Design the store
  
    ```js
    {
        bugs: [
            {
                id: 1,
                description: "",
                resolved: false
            }
        ], // bugs is one slice and current user is another slice, this store has 2 slices
        currentUser: {}
    }
    ```

- ### Define the actions

    Think about what user can perform in our bug tracking application. Action is a plain JS object that describes what happened.

    - Add a Bug
    - Mark as Resolved
    - Delete a Bug
  
    ```js
        {
            type: "ADD_BUG", // or bugAdded can be type anyhow only property redux expects in action objects is type
            description: "",
            /* payload: {
                id: 1
            } */ //instead of putting description like that, we can do this (like Flux of Facebook)
        }
    ```

- ### Create a reducer

    In redux, reducer have to be pure, meaning it gives same result despite calling multiple times, it works in isolated environment

    ```js
    let lastId = 0;

    function reducer(state=[], action) {
        // here we implement business logic
        if (action.type === 'bugAdded') {
            return [
                ...state, 
                {
                    id: ++lastId,
                    description: action.payload.description
                }
            ];
        }
        else if (action.type === 'bugRemoved') {
            return state.filter(bug => bug.id !== action.payload.id);
        }
        return state;
    }
    ```

- ### Creating a store
  
    After determining the type of reducer, we can create a store.

    ```js
    import { createStore } from 'redux';
    import reducer from './reducer';

    const store = createStore(reducer); // higher order function

    export default store;
    ```