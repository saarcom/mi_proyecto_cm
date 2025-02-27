
import "../sidebar/Sidebar.css";
import { HelpOutline, RssFeed , WorkOutline,Event,School,Group  } from "@mui/icons-material";


export default function sidebarr() {
  return (
    <div className="sidebarr">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListTeam">
            <RssFeed className="sidebarIcono"/>
            <span className="siderbarListItemText">
              Feed
            </span>
          </li>
          
          <li className="sidebarListTeam">
            <HelpOutline className="sidebarIcono"/>
            <span className="siderbarListItemText">
              Preguntas
            </span>
          </li>

          <li className="sidebarListTeam">
            <WorkOutline className="sidebarIcono"/>
            <span className="siderbarListItemText">
              trabajo
            </span>
          </li>

          <li className="sidebarListTeam">
            <Event className="sidebarIcono"/>
            <span className="siderbarListItemText">
              eventos
            </span>
          </li>

          <li className="sidebarListTeam">
            <School className="sidebarIcono"/>
            <span className="siderbarListItemText">
              Cursos
            </span>
          </li>

          <li className="sidebarListTeam">
            <Group className="sidebarIcono"/>
            <span className="siderbarListItemText">
              grupo
            </span>
          </li>

        </ul>

        <button className="sidebarButton">Mostrar Mas</button>
        <hr className="sidebarHR" />
        <ul className="sidebarFriendList">

          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="/assets/person/2.jpg" alt="" />
            <span className="">Rolando Ramos </span>
          </li>
          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="/assets/person/3.jpg" alt="" />
            <span className="">pepe </span>
          </li>
          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="/assets/person/4.jpg" alt="" />
            <span className="">Jose  </span>
          </li>
          




          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="/assets/person/4.jpg" alt="" />
            <span className="">Jose  </span>
          </li>
          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="/assets/person/4.jpg" alt="" />
            <span className="">Jose  </span>
          </li>
          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="/assets/person/4.jpg" alt="" />
            <span className="">Jose  </span>
          </li>
          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="/assets/person/4.jpg" alt="" />
            <span className="">Jose  </span>
          </li>
          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="/assets/person/4.jpg" alt="" />
            <span className="">Jose  </span>
          </li>
          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="/assets/person/4.jpg" alt="" />
            <span className="">Jose  </span>
          </li>
          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="/assets/person/4.jpg" alt="" />
            <span className="">Jose  </span>
          </li>
          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="/assets/person/4.jpg" alt="" />
            <span className="">Jose  </span>
          </li>
          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="/assets/person/4.jpg" alt="" />
            <span className="">Jose  </span>
          </li>
          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="/assets/person/4.jpg" alt="" />
            <span className="">Jose  </span>
          </li>




        </ul>

      </div>
    </div>
  )
}