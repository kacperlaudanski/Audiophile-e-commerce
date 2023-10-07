import { useEffect, useState } from "react";

export function useResponsiveNavbar() {
  const [onDesktop, setOnDesktop] = useState<boolean | null>(
    window.innerWidth > 767
  );
  useEffect(() => {
    const handleWidthChange = () => {
      if (window.innerWidth > 767) {
        setOnDesktop(true);
      } else {
        setOnDesktop(false);
      }
    };
    window.addEventListener("resize", handleWidthChange);

    return () => window.removeEventListener("resize", handleWidthChange);
  }, []);

  return { onDesktop };
}
