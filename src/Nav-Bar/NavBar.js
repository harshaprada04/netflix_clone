import { NavLink } from "react-router-dom";
import "./navbar.css";
import { useState, useEffect, useRef } from "react";

import SearchPage from "../Page/SearchPage";


function NavBar() {
  const [isModalOpen, setModalOpen] = useState(false);
  const ref = useRef();
  useOnClickOutside(ref, () => setModalOpen(false));
  function useOnClickOutside(ref, handler) {
    useEffect(() => {
      const listener = (event) => {
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }
        handler(event);
      };
      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);
      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      };
    }, [ref, handler]);
  }
  return (
    <div className="main">
      <header>
        <h2 className="header_title">NETFLIX</h2>
      </header>

      <nav>
        <ul className="list_item">
          <li>
            <NavLink className="nav" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="nav" to="/tvshow">
              Tv Show
            </NavLink>
          </li>
          <li>
            <NavLink className="nav" to="/movies">
              Movies
            </NavLink>
          </li>
          <li>
            <NavLink className="nav" to="/mylist">
              My Lists
            </NavLink>
          </li>
          {isModalOpen ? (
            <li ref={ref}>
              <NavLink to="/search">
                <SearchPage />
              </NavLink>
            </li>
          ) : (
            <button style={{background:"gray", color:"white", width:"52px", height:"22px", fontSize:"13px"}}onClick={() => setModalOpen(true)}> Search</button>
          )}
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
