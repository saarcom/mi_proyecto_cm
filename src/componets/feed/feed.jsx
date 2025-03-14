import Post from "../post/post"
import  Share  from "../share/share"
import "./Feed.css"

import {Posts} from  "../../dummyData"

export default function Feed() {
  return (
    <div className="feed">
      <div className="feedWrapper">
      <Share/>
      {Posts.map((p)=>(
        <Post key={p.id} post={p} />
      ))}
     
      
      </div>
    </div>
  )
}