const TransactionReducer = ((state, action) => {
    switch (action.type) {

        case "ADD_TRANSACTION": {
            return [action.payload, ...state]
        }

        case "DEL_TRANSACTION": {
            return (
                [...state],
                state.filter((trans, index) => index !== action.payload)
            )
        }

        default: {
            return state;
        }
    }
})

export default TransactionReducer;