import React from 'react'
import { postAPI } from '../services/PostService'
import PostItem from './PostItem'

const PostContainer = () => {
  const { data: posts } = postAPI.useFetchAllPostsQuery(5)
  return (
    <div>
      <div>
        {posts?.map((post) => (
          <PostItem post={post} key={post.id} />
        ))}
      </div>
    </div>
  )
}

export default PostContainer
