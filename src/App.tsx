import React, { useEffect, useState } from "react";
import Header from "./components/shared/Header";
import Sidebar from "./components/shared/Sidebar";
import Main from "./components/shared/Main";
import Content from "./components/shared/Content";
import { Outlet, useNavigate } from "react-router-dom";

const App: React.FC<{}> = () => {
  let navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const getUser = () => {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
  };

  useEffect(() => {
    const checkUser = async () => {
      const user = await getUser(); // ตรวจสอบผู้ใช้
      if (!user) {
        navigate("/login", { replace: true });
      } else {
        setIsLoading(false); // สิ้นสุดการโหลดเมื่อมีผู้ใช้
      }
    };

    checkUser();
  }, [navigate]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  if (isLoading) {
    return <></>;
  }

  return (
    <div className={`${darkMode && "dark"}`}>
      {
        <>
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
        </>
      }
    </div>
  );
};

export default App;
