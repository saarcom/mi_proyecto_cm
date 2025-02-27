import { MoreVert } from "@mui/icons-material"
import "./Post.css"
import {Users} from  "../../dummyData"


export default function post({post}){
    console.log(post)

    const user=Users.filter(u=>u.id===1)
    console.log(user[0].username);
    return (
        <div className="post">
              <div className="postWraper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className="postprofileImg" src={Users.filter((u)=> u.id === post?.userId)[0].profilePicture}  alt="" />
                        <span className="postUserName">
                            {Users.filter((u)=> u.id === post?.userId)[0].username}
                        </span>
                        <span className="postDate">{post.date} </span>
                    </div>
                    <div className="postTopRight">
                    <MoreVert/>
                    </div>
                </div>
                <div className="postCenter">
                    <span className="posttext">{post?.desc} </span>
                    <img className="postImg" src={post.photo} alt="" />
                </div>
                <div className="postBottom"></div>
                    <div className="postBottonLeft">
                        <img className="postLike" src="assets/like.png" alt="" />
                        <img className="postLike" src="assets/heart.png" alt="" />
                        <span className="postLikeCounter">{post.like}</span>
                        
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment} comentario</span>
                    </div>
               </div>

        </div>
    )
}