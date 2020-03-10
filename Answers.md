1. What problem does the context API help solve?
The Context API is a component structure provided by the React framework, which enables us to share specific forms of data across all levels of the application. It's aimed at solving the problem of prop drilling

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
Actions are payloads of information that send data from your application to your store.

A reducer is a function that determines changes to an application's state. It uses the action it receives to determine this change. ... Redux relies heavily on reducer functions that take the previous state and an action in order to execute the next state.

Redux is a state container for JavaScript apps, often called a Redux store. It stores the whole state of the app in an immutable object tree.

when your Redux is a single source of truth, it means that the only way to change your data in UI is to dispatch redux action which will change state within redux reducer.
1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
Application state is global and can be accessed from anywhere whereas component state is local and can be accessed only within the component and passed to children via props.
when you have a large application its better to use application state over component state.
1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
redux thunk is a middleware we use to make our reducer flow asynchronous and to make the APi calls. Thunk returns an action-creator using which we can make axios calls from API.
1. What is your favorite state management system you've learned and this sprint? Please explain why!
API because you can get ride of the prop drilling.


