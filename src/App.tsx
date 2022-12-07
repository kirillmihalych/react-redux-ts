import React, { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from './app/hooks'
import { increment } from './features/users/UserSlice'
import { fetchUsers } from './features/users/ActionCreators'
import PostContainer from './components/PostContainer'

const App = () => {
  // const { count, users, isLoading, error } = useAppSelector(
  //   (state) => state.user
  // )
  // const dispatch = useAppDispatch()

  // useEffect(() => {
  //   dispatch(fetchUsers())
  // }, [])

  return (
    <section>
      {/* <div>
        <h1>{count}</h1>
        <button onClick={() => dispatch(increment(1))}>inc</button>
      </div>
      <div>
        {isLoading && <h1> Loading</h1>}
        {error && <h1> errrrrrrrrror</h1>}
        {JSON.stringify(users, null, 2)}
      </div> */}
      <PostContainer />
    </section>
  )
}

export default App
