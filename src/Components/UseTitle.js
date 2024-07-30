import { useEffect } from "react";

const useTitle = (title, icon) => {
  useEffect(() => {
    document.title = title;
    if (icon) {
      const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
      link.type = 'image/x-icon';
      link.rel = 'shortcut icon';
      link.href = icon;
      document.getElementsByTagName('head')[0].appendChild(link);
    }
  }, [title, icon]);
};

export default useTitle;
