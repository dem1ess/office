import { configureStore } from '@reduxjs/toolkit'
import userReducer from './reducers/UserSlice'
import propertyReducer from './reducers/PropertySlice'
import transactionReducer from './reducers/TransactionSlice'
import purchaseReducer from './reducers/PurchaseSlice'

export const store = configureStore({
	reducer: { user: userReducer, property: propertyReducer, transaction: transactionReducer, purchase: purchaseReducer },
})

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
