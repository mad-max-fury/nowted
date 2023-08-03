import { useState, useEffect } from "react";

const usePositionFixed = (elementRef, thresh) => {
  const [isPositionFixed, setIsPositionFixed] = useState(false);

  const handleScroll = () => {
    if (!elementRef.current) return;

    const elementRect = elementRef.current.getBoundingClientRect();
    const shouldFix = elementRect.top <= thresh; // Change this value to set the threshold for fixing the element
    setIsPositionFixed(shouldFix);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [elementRef]);

  return isPositionFixed;
};

export default usePositionFixed;
