import "./Rightbar.css"
export default function rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarWhapper">
        <div className="birthdaycontainer">
          <img  className="bithdayImg" src="assets/gift.png" alt="" />
          <span className="birthText">
            <b> mensjase de happy </b> y ademas<b>tengo 3 amigos </b>  viendo el perfil

          </span>
        </div>
        <img className="rightbarAd" src="assets/ad.jpg" alt="" />
      </div>
    </div>
  )
}