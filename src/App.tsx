import React, { useState } from "react";
import Header from "./components/shared/Header";
import Sidebar from "./components/shared/Sidebar";
import Main from "./pages/Main";
import Content from "./pages/Content";
import { Outlet } from "react-router-dom";

const App: React.FC<{}> = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`${darkMode && "dark"}`}>
      <Header
        toggleSidebar={toggleSidebar}
        toggleDarkMode={toggleDarkMode}
        darkMode={darkMode}
      />
      <Sidebar isSidebarOpen={isSidebarOpen} />
      <Main>
        <Content>
          <Outlet />
        </Content>
      </Main>
    </div>
  );
};

export default App;
