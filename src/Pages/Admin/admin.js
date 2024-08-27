// import { Space } from "antd";
import "./admin.css";
import AppHeader from "D:/Blockchain/Blockchain_Olympiad/src/Components/Admin/AppHeader";
import PageContent from "D:/Blockchain/Blockchain_Olympiad/src/Components/Admin/PageContent";
import SideMenu from "D:/Blockchain/Blockchain_Olympiad/src/Components/Admin/SideMenu";

function admin() {
  return (
    <div className="admin">
      <AppHeader />
      <div className="SideMenuAndPageContent">
        <SideMenu></SideMenu>
        <PageContent></PageContent>
      </div>
    </div>
  );
}
export default admin;
