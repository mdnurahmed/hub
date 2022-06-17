import logo from "./logo.svg";
import "./App.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state/index";
import { Menu } from "antd";
import {
  MailOutlined,
  DeliveredProcedureOutlined,
  SafetyOutlined,
} from "@ant-design/icons";
import { Helmet } from "react-helmet";
import CreateCompany from "./CreateCompany";
import CreateHub from "./CreateHub";
import ShowHubs from "./ShowHubs";

function MyMenu() {
  const state = useSelector((state) => state.menu);
  const dispatch = useDispatch();

  const { keyPress } = bindActionCreators(actionCreators, dispatch);
  let view = <CreateCompany />;
  if (state.currentKey == "create_hub") view = <CreateHub />;
  if (state.currentKey == "list_hub") view = <ShowHubs />;
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Hub App</title>
      </Helmet>
      <Menu
        mode="horizontal"
        selectedKeys={[state.currentKey]}
        onClick={(e) => keyPress(e.key)}
      >
        <Menu.Item key="create_company" icon={<DeliveredProcedureOutlined />}>
          Add Company
        </Menu.Item>
        <Menu.Item key="create_hub" icon={<SafetyOutlined />}>
          Add Hub
        </Menu.Item>
        <Menu.Item key="list_hub" icon={<MailOutlined />}>
          Show Hubs
        </Menu.Item>
      </Menu>
      {view}
    </div>
  );
}

export default MyMenu;
