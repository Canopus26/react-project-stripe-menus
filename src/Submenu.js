import React, { useState, useRef, useEffect } from "react";
import { useGlobalContext } from "./context";

const Submenu = () => {
  const [column, setColumn] = useState("col-2");
  const container = useRef(null);
  const {
    isSubmenuOpen,
    location,
    page: { page, links },
  } = useGlobalContext();
  useEffect(() => {
    setColumn("col-2");
    if (links.length === 3) {
      setColumn("col-3");
    }
    if (links.length > 3) {
      setColumn("col-4");
    }
    const submenu = container.current;
    //console.log(location);
    const { center, bottom } = location;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;
  }, [location, links]);
  return (
    <aside
      className={`${isSubmenuOpen ? "submenu show" : "submenu"}`}
      ref={container}
    >
      <h4>{page}</h4>
      <div className={`submenu-center ${column}`}>
        {links.map((link, index) => {
          const { label, icon, url } = link;
          return (
            <article key={index}>
              <a href={url}>
                {icon}
                {label}
              </a>
            </article>
          );
        })}
      </div>
    </aside>
  );
};

export default Submenu;
