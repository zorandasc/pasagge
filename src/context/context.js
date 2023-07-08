import React, { useState, useEffect } from "react";

const GatsbyContext = React.createContext();

//Provider, Consumer

const GatsbyProvider = ({ children }) => {
  const [size, setSize] = React.useState(null);
  const [height, setHeight] = React.useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const showSidebar = () => {
    setIsSidebarOpen(true);
  };
  const hideSidebar = () => {
    setIsSidebarOpen(false);
  };

  const toggleSidebar=()=>{
    setIsSidebarOpen(!isSidebarOpen);
  }

  useEffect(() => {
    if (window) {
      setSize(window.innerWidth);
      setHeight(window.pageYOffset);

      window.addEventListener("resize", () => {
        setSize(window.innerWidth);
      });
      window.addEventListener("scroll", () => {
        setHeight(window.pageYOffset);
      });
    }
    return () => {
       window.removeEventListener("resize", () => {});
       window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <GatsbyContext.Provider
      value={{
        isSidebarOpen,
        showSidebar,
        hideSidebar,
        toggleSidebar,
        size,
        height,
      }}
    >
      {children}
    </GatsbyContext.Provider>
  );
};

export { GatsbyContext, GatsbyProvider };
