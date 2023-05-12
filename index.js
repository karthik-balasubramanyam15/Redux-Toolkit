const store = require('./app/store');
const cakeActions = require('./features/cake/cakeSlice').cakeActions;
const icecreamActions = require('./features/icecream/icecreamScoop').icecreamActions
const fetchUsers = require('./features/user/userList').fetchUsers

console.log('Initial state: ', store.getState());

const unsubscribe = store.subscribe(() => {
});

// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.restocked(4));


// store.dispatch(icecreamActions.ordered())
// store.dispatch(icecreamActions.ordered())
// store.dispatch(icecreamActions.ordered())
// store.dispatch(icecreamActions.restocked(5));

store.dispatch(fetchUsers());

unsubscribe();