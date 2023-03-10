import "./styles/App.css";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import logo from "./images/logo3.png";

function App() {
    return (
        <div className="container">
            <div className="logoConatiner">
                <img src={logo} alt="logo" />
            </div>
            <div className="sidebarContainer">
                <Sidebar
                    rootStyles={{
                        backgroundColor: "white",
                        height: "86.5vh",
                    }}
                >
                    <Menu>
                        <MenuItem> Score Card </MenuItem>
                        <MenuItem> Risk Management </MenuItem>
                        <MenuItem> Prior Authorization </MenuItem>
                        <MenuItem> Claims </MenuItem>
                        <MenuItem> My Profile </MenuItem>
                    </Menu>
                </Sidebar>
            </div>
        </div>
    );
}

export default App;
