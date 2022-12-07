import { IUser } from '../../models/IUser'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface UserState {
  users: IUser[]
  isLoading: boolean
  error: string
  count: number
}

const initialState: UserState = {
  users: [],
  isLoading: false,
  error: '',
  count: 0,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    increment(state, action: PayloadAction<number>) {
      state.count += action.payload
    },
    usersFetching(state) {
      state.isLoading = true
    },
    usersFetchingSuccess(state, action: PayloadAction<IUser[]>) {
      state.isLoading = false
      state.error = ''
      state.users = action.payload
    },
    usersFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = true
      state.error = action.payload
    },
  },
})

export const {
  increment,
  usersFetching,
  usersFetchingSuccess,
  usersFetchingError,
} = userSlice.actions

export default userSlice.reducer
