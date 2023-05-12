const createSlice = require ( '@reduxjs/toolkit').createSlice

const initialState = {
    numOfIcecreams: 20
}

const icecreamScoop = createSlice({
    name: 'icecream',
    initialState,
    reducers: {
        ordered:  state => {
            state.numOfIcecreams--;
        },
        restocked: (state, actions) => {
            state.numOfIcecreams += actions.payload
        }
    }
})

module.exports = icecreamScoop.reducer

module.exports.icecreamActions = icecreamScoop.actions

