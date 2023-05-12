const createSlice = require('@reduxjs/toolkit').createSlice

const initialState = {
    numOfIcecreams: 20
}

const icecreamScoop = createSlice({
    name: 'icecream',
    initialState,
    reducers: {
        ordered: state => {
            state.numOfIcecreams--;
        },
        restocked: (state, actions) => {
            state.numOfIcecreams += actions.payload
        }
    },
    //if you want to manipulate the state based on another reducer - use ExtraReducers
    //here, for instance, we are giving away 1 scoop of ice cream, everytime you buy a cake
    extraReducers: {
        ['cake/ordered']: (state, action) => {
            state.numOfIcecreams--;
        }
    }
})

module.exports = icecreamScoop.reducer

module.exports.icecreamActions = icecreamScoop.actions

