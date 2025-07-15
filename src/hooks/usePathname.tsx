import { useEffect, useState } from "react";

export function usePathname(newPathname: string) {
  const [pathname, setCurrentPathname] = useState<string>("/");

  useEffect(() => {
    setCurrentPathname(window.location.pathname);
  }, [newPathname]);

  return { pathname };
}
