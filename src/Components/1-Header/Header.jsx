import "./header.css";
import { useNavigate } from "react-router-dom";
import megamenuimg from "../../imgs/2.webp";
const NavData = [
  { href: "#products", title: "منتجاتنا", navigatePage: "/" },
  { href: "#aboutus", title: "عنا", navigatePage: "about-us" },
  { href: "#contact", title: "تواصل معنا", navigatePage: "contact-us" },
];
const megaMenuData = [
  { href: "#terms", title: "الشروط والاحكام", navigatePage: "terms" },
  { href: "#shipping", title: "الشحن والتوصيل", navigatePage: "shipping" },
  { href: "#privacy", title: "سياسة الخصوصية", navigatePage: "privacy" },
  { href: "#return", title: "سياسة الاسترجاع", navigatePage: "return" },
];
export default function Header() {
  const navigate = useNavigate();
  return (
    <div className="header" id="header">
      <div className="container">
        <a
          className="logo"
          onClick={() => {
            navigate("/");
          }}>
          الماسه للمخبوزات
        </a>
        <ul className="main-nav">
          {NavData.map((item, index) => {
            return (
              <li key={index}>
                <a href={item.href} onClick={() => navigate(item.navigatePage)}>
                  {item.title}
                </a>
              </li>
            );
          })}
          <li>
            <a href="#" className=".menu">
              اخرى
            </a>
            {/*  Start Megamenu  */}
            <div className="Megamenu">
              <div className="image">
                <img src={megamenuimg} alt="Megamenu" />
              </div>
              <ul className="links">
                {megaMenuData.map((item, index) => {
                  return (
                    <li key={index}>
                      <a
                        href={item.href}
                        onClick={() => navigate(item.navigatePage)}>
                        {item.title}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
