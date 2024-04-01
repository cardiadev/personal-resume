import { useContext } from "react";
import { TokyoContext } from "../Context";
import { socialIcon } from "../socialMedia"

const Sidebar = () => {
  const { navChange, nav, menus } = useContext(TokyoContext);
  return (
    <div className="leftpart w-[450px] h-[100vh] fixed flex items-center z-[12] px-[100px] py-[0px] bg-white">
      <div className="leftpart_inner w-full h-auto">
        <div className="logo" data-type="image">
          {" "}
          {/* You can use image or text as logo. data-type values are: "image" and "text" */}
          <a href="/">
            <img
              className="max-w-[150px]"
              src="assets/img/logo/dark.png"
              alt="image"
            />
            <h3 className="font-poppins font-black text-[31px] tracking-[5px]">
              Carlos Diaz
            </h3>
          </a>
        </div>
        <div className="menu px-[0px] py-[50px] w-full float-left">
          <ul className="transition_link m-0 list-none">
            {menus.map((menu) => (
              <li
                className={`m-0 w-full float-left ${
                  menu.href == nav ? "active" : ""
                }`}
                key={menu.id}
              >
                <a
                  className="text-[#767676] capitalize inline-block font-medium font-montserrat transition-all duration-300 hover:text-black"
                  href={`#${menu.href}`}
                  onClick={() => navChange(menu.href)}
                >
                  {menu.name}
                </a>
              </li>
            ))}
          </ul>
        </div>


        <div className="social w-full float-left mt-[240px] mb-[100px]">
                <ul className="m-0 list-none">
                  {socialIcon.map((item) => (
                    <li className="inline-block" key={item.id}>
                      <a
                        className="social-icons text-black transition-all duration-300 hover:text-black"
                        href={item.link}
                        target="_blank"
                      >
                        <i className={item.iconName} />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>



        <div className="copyright w-full float-left">
          <p className="text-[15px] font-montserrat leading-[25px]">
            {`© ${new Date().getFullYear()} | `} 
            <a
              className="text-[#787878] font-semibold transition-all duration-300 hover:text-black"
              href="https://github.com/cardiadev"
              target="_blank"
            >
              Carlos Diaz
            </a>
            <br />
          </p>
          <p className="text-[12px]">Made with ♥️ and Good Vibes 😉</p>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
