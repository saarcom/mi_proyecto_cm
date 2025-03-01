import "../topbar/Topbar.css"
import { Search } from "@mui/icons-material"
import {Person,Chat,Notifications}  from "@mui/icons-material"


export default function Topbar() {
  return (
    <div className="topbarContainer">
        <div className="topbarLeft">
            <span className="logo">FAcebook de rolo</span>
        </div >
        <div className="topbarCenter"></div>
            <div className="searchbar">
            <Search className="searchIcon"/>
            <input placeholder="buscar por amigos, publicavion o video" className="searchInput"/>
            
            </div>
        <div className="topbarRight">
            <div className="topbarLink">
            <span className="topbarLink">Pagina Inicio</span>
            <span className="topbarLink">TimeLine</span>
            
            </div>
            <div className="topbarIcons">
                <div className="topbarIconItem">
                <Person/>
                <span className="topbarIconBadge">1</span>
                </div>
                <div className="topbarIconItem">
                <Chat/>
                <span className="topbarIconBadge">3</span>
                </div>
                <div className="topbarIconItem">
                <Notifications/>
                <span className="topbarIconBadge">22</span>
                </div>
            </div>
            <div>
            <img src="/assets/person/1.jpg" alt ="" className="topbarImg"/>
            icono
            </div>
        </div>

    </div>
    
  )
}