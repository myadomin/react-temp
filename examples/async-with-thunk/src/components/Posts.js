import React from 'react'

const Posts = ({ posts }) => {
  // posts是posts.js输出的扁平化数据data
  // 转换为postsData用于map
  const postsData = (posts.postIds || []).map(id => posts.byId[id])
  return (
    <ul>
      {postsData.map(obj => {
        return <li key={obj.id}>{obj.title}</li>
      })}
    </ul>
  )
}

export default Posts