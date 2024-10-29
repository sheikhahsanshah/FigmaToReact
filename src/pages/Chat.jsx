import React, { Suspense, lazy, useState, useEffect } from "react";
import { CircularProgress } from "@mui/material";

const Chat = lazy(() => import("../components/Chat"));
const Sidebar = lazy(() => import("../components/Sidebar"));

const ChatPage = () => {
  const [showSidebar, setShowSidebar] = useState(window.innerWidth > 991);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 991);

  useEffect(() => {
    const handleResize = () => {
      const isDesktopView = window.innerWidth > 991;
      setIsDesktop(isDesktopView);
      setShowSidebar(isDesktopView);
    };

    // Set initial values
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSidebarClose = () => {
    setShowSidebar(false);
  };

  return (
    <div className="flex relative h-screen max-h-screen overflow-hidden bg-white">
      {/* Sidebar */}
      <Suspense
        fallback={
          isDesktop && (
            <div className="w-[400px] p-2 grid place-items-center">
              <CircularProgress />
            </div>
          )
        }
      >
        <div
          className={`${
            isDesktop ? 'relative w-[400px]' : 'fixed w-full md:w-[400px]'
          } h-screen transition-transform duration-300 ease-in-out transform ${
            showSidebar ? 'translate-x-0' : '-translate-x-full'
          } bg-white shadow-lg z-50`}
        >
          <Sidebar open={showSidebar} onClose={handleSidebarClose} />
        </div>
      </Suspense>

      {/* Main Chat Area */}
      <Suspense
        fallback={
          <div className="flex-grow h-screen flex justify-center items-center p-2">
            <CircularProgress />
          </div>
        }
      >
        <div
          className={`flex-grow h-screen overflow-hidden transition-[margin] duration-300 ease-in-out ${
            isDesktop && showSidebar ? 'ml-[400px]' : 'ml-0'
          }`}
        >
          <Chat setShowSidebar={setShowSidebar} />
        </div>
      </Suspense>

      {/* Mobile Overlay */}
      {!isDesktop && showSidebar && (
        <div
          onClick={handleSidebarClose}
          className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-300"
        />
      )}
    </div>
  );
};

export default ChatPage;