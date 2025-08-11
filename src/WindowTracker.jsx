import { useEffect } from "react";
import { useState } from "react";

export default function WindowTracker() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const [scrollPosition, setScrollPosition] = useState({
    x: window.scrollX,
    y: window.scrollY,
  });

  const [isOnline, setIsOnline] = useState(navigator.onLine);

  // Window resize effect
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  //   Scroll tracking effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition({
        x: window.scrollX,
        y: window.scrollY,
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //   Online/offline status effect
  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  //   Local storage effect
  useEffect(() => {
    const data = {
      windowSize,
      scrollPosition,
      timestamp: new Date().toISOString(),
    };

    localStorage.setItem("windowTracker", JSON.stringify(data));
  }, [windowSize, scrollPosition]);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        console.log("Page is hidden");
      } else {
        console.log("Page is visible");
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  });

  return (
    <div>
      <h3>Window & Scroll Tracker</h3>

      <div>
        <div>
          <h4>Window Size</h4>
          <p>Width: {windowSize.width}px</p>
          <p>Height: {windowSize.height}px</p>
        </div>
      </div>
    </div>
  );
}
