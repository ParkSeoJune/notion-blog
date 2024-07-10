import { useEffect, useRef } from "react";

const Giscus = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current || ref.current.hasChildNodes()) return;
    const scriptElem = document.createElement("script");
    scriptElem.src = "https://giscus.app/client.js";
    scriptElem.async = true;
    scriptElem.crossOrigin = "anonymous";
    scriptElem.setAttribute("data-repo", "ParkSeoJune/notion-blog");
    scriptElem.setAttribute("data-repo-id", "R_kgDOMQ5J3g");
    scriptElem.setAttribute("data-category", "Comments");
    scriptElem.setAttribute("data-category-id", "DIC_kwDOMQ5J3s4Cgr8G");
    scriptElem.setAttribute("data-mapping", "pathname");
    scriptElem.setAttribute("data-strict", "0");
    scriptElem.setAttribute("data-reactions-enabled", "1");
    scriptElem.setAttribute("data-emit-metadata", "0");
    scriptElem.setAttribute("data-input-position", "bottom");
    scriptElem.setAttribute("data-theme", "dark");
    scriptElem.setAttribute("data-lang", "ko");
    scriptElem.setAttribute("data-loading", "lazy");
    scriptElem.setAttribute("crossorigin", "anonymous");
    ref.current.appendChild(scriptElem);
  }, []);

  return <section className="max-w-[1000px] w-full px-4 mt-8" ref={ref} />;
};

export default Giscus;
