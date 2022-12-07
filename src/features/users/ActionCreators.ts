import { AppDispatch } from '../../app/store'
import axios from 'axios'
import { IUser } from '../../models/IUser'
import {
  usersFetching,
  usersFetchingSuccess,
  usersFetchingError,
} from './UserSlice'

export const fetchUsers = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(usersFetching())
    const response = await axios.get<IUser[]>(
      'https://jsonplaceholder.typicode.com/users'
    )
    dispatch(usersFetchingSuccess(response.data))
  } catch (e) {
    dispatch(usersFetchingError('something went wrong'))
  }
}
