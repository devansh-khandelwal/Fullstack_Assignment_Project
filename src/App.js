import "./App.css";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";

function App() {
    // const { collapseSidebar } = useProSidebar();
    return (
        <div className="sidebarContainer">
            <Sidebar
                rootStyles={{
                    backgroundColor: "#D5DCF0",
                    height: "96vh",
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
    );
}

export default App;
