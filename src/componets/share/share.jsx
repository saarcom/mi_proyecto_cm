
import { EmojiEmotions, Label, PermMedia, Room } from "@mui/icons-material"
import "./Share.css"
export default function share() {
  return (
    <div className="share">
        <div className="shareWrapper">
            <div className="shareTop"></div>
            <img className="shareProfileImg" src="/assets/person/1.jpg" alt="" />
            <input type="text" placeholder="¿Qué hay en tu mente?" className="shareInput" />
            <hr className="shareHr"/>
            <div className="shareBottom">
                <div className="shareOptions">

                    <div className="shareOption">
                    <PermMedia htmlColor="tomato" className="shareIcon"/>
                        <span className="shareOptionText">Foto/Video</span>
                    </div>

                    <div className="blue">
                    <Label htmlColor="tomato" className="shareIcon"/>
                        <span className="shareOptionText">Etiqueta</span>
                    </div>


                    <div className="shareOption">
                    <Room  htmlColor="green"className="shareIcon"/>
                        <span className="shareOptionText">Localidad</span>
                    </div>

                    <div className="shareOption">
                    <EmojiEmotions htmlColor="goldenrod" className="shareIcon"/>
                        <span className="shareOptionText">Emoticon</span>
                    </div>

                    <button className="shareButton">Compartir</button>
                </div>

                
            </div>
        </div>
    </div>
  )
}