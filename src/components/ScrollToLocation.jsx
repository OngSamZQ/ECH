import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToLocation() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      if (hash) {
        document.getElementById(hash.slice(1))?.scrollIntoView({
          behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
          block: "start",
        });
      } else {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      }
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash, key]);

  return null;
}
