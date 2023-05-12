const createSlice = require('@reduxjs/toolkit').createSlice //uses immer library underneath
//create actions with the names of reducers

const initialState = {
    numOfCakes: 10
}


const cakeSlice = createSlice({
    name: 'cake',
    initialState,
    reducers: {

        ordered: (state, action) => {
            state.numOfCakes--;
        },

        restocked: (state, action) => {
            state.numOfCakes += action.payload;
        }
    }
})

module.exports = cakeSlice.reducer

//takes care of action type constant, action object, action creator, switch statements in reducer and immutable statements in reducers 
module.exports.cakeActions = cakeSlice.actions 