import { MoreVert } from "@mui/icons-material"
import "./Post.css"

export default function post(){
    return (
        <div className="post">
              <div className="postWraper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className="postprofileImg" src="/assets/person/1.jpg" alt="" />
                        <span className="postUserName">rolando ramos</span>
                        <span className="postDate"> 26 de febrero 2025</span>
                    </div>
                    <div className="postTopRight">
                    <MoreVert/>
                    </div>
                </div>
                <div className="postCenter">
                    <span className="posttext"> hola este es un poste de mensaje :/ </span>
                    <img className="postImg" src="assets/post/1.jpg" alt="" />
                </div>
                <div className="postBottom"></div>
                    <div className="postBottonLeft">
                        <img className="postLike" src="assets/like.png" alt="" />
                        <img className="postLike" src="assets/heart.png" alt="" />
                        <span className="postLikeCounter">32 people like it</span>
                        
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">9 comentario</span>
                    </div>
               </div>

        </div>
    )
}