import React from 'react'
import { RouteData, Link } from 'react-static'
//

export default () => (
  <RouteData
    render={({ post }) => (
      <div>
        <Link to="/blog/">{'<'} Back</Link>
        <br />
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    )}
  />
)
