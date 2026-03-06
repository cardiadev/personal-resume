"use client";

import { useContext } from "react";
import { SleekContext } from "../Context";
import { socialIcon } from "../socialMedia";
import Link from "next/link";
import Image from "next/image";

const Sidebar = () => {
  const { navChange, nav, menus } = useContext(SleekContext);
  return (
    <div className="leftpart">
      <div>
        <div className="leftpart_inner logo" data-type="image">
          {" "}
          <Link href="/">
            <Image
              src="/assets/img/logo/dark.png"
              alt="Carlos Diaz Logo"
              width={150}
              height={50}
            />
            <h3>
              Carlos Diaz
            </h3>
          </Link>
        </div>
        <div className="menu">
          <ul className="transition_link">
            {menus.map((menu) => (
              <li
                className={menu.href === nav ? "active" : ""}
                key={menu.id}
              >
                <Link
                  href={menu.href === "home" ? "/" : `/${menu.href}`}
                  onClick={() => navChange(menu.href)}
                >
                  {menu.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        <div className="social">
          <ul>
            {socialIcon.map((item) => (
              <li key={item.id}>
                <a
                  className="social-icons"
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className={item.iconName} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="copyright">
          <p>
            {`© ${new Date().getFullYear()} | `}
            <a
              href="https://github.com/cardiadev"
              target="_blank"
              rel="noopener noreferrer"
            >
              Carlos Diaz
            </a>
            <br />
          </p>
          <p>Made with ♥️ and Good Vibes 😉</p>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
