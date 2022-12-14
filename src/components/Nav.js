import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

export default function NavBar() {
  return (
    <>
      <nav id="navigation" className="slideDownLater">
        <ul>
          <li>
            <AnchorLink href="#home">
              <button>HOME</button>
            </AnchorLink>
          </li>

          <li>
            <AnchorLink href="#about">
              <button>ABOUT</button>
            </AnchorLink>
          </li>

          <li>
            <AnchorLink href="#portfolio">
              <button>PORTFOLIO</button>
            </AnchorLink>
          </li>

          <li>
            <li>
              <AnchorLink href="#contact">
                <button>CONTACT</button>
              </AnchorLink>
            </li>{" "}
          </li>
        </ul>
      </nav>
    </>
  );
}
