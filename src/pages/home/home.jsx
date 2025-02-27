
import  Topbar from "../../componets/topbar/topbar";
import Sidebar from "../../componets/sidebar/sidebar";
import Feed from "../../componets/feed/feed"
import Rightbar from "../../componets/rightbar/rightbar"

import "./Home.css"

export default function Home() {
  return (
    <>
      <Topbar />
      <div className="homeContainer">
      <Sidebar/>
      <Feed/>
      <Rightbar/>
       demo


      </div>
    </>
  );
}
