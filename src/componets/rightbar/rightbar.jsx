import "./Rightbar.css"
export default function rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarWhapper">
        <div className="birthdaycontainer">
          <img  className="bithdayImg" src="assets/gift.png" alt="" />
          <span className="birthText">
            <b> mensjase de happy </b> y ademas<b>tengo 3 amigos </b>  viendo el perfil
            <br />demmo de prueba

          </span>
        </div>
        <img className="rightbarAd" src="assets/ad.jpg" alt="" />
        <h4 className="rightTitle"> Amigos en linea</h4>
        <ul className="rightbarFriendList">
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className="rightbarProfileImg" src="assets/person/4.jpg" alt="" />
              <span className="rightbarOnline" > </span>
            </div>
            <span className="rightbarUserName" > Juna jose Perz</span>
          </li>
        </ul>
      </div>
    </div>
  )
}