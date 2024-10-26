import "./footer.css";
import { useNavigate } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TikTokIcon from "./Tiktok";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import img1 from "../../imgs/gallery-01.png";
import img2 from "../../imgs/gallery-02.png";
import img3 from "../../imgs/gallery-03.jpg";
import img4 from "../../imgs/gallery-04.png";
import img5 from "../../imgs/gallery-05.jpg";
import img6 from "../../imgs/gallery-06.png";
const socialIcons = [
  { href: "#", className: "facebook", icon: FacebookIcon },
  { href: "#", className: "instagram", icon: InstagramIcon },
  { href: "#", className: "tiktok", icon: TikTokIcon },
];
const importantLinks = [
  { href: "#terms", title: "الشروط والاحكام", navigatePage: "terms" },
  { href: "#shipping", title: "الشحن والتوصيل", navigatePage: "shipping" },
  { href: "#privacy", title: "سياسة الخصوصية", navigatePage: "privacy" },
  { href: "#return", title: "سياسة الاسترجاع", navigatePage: "return" },
];
const lineDetails = [
  {
    icon: LocationOnIcon,
    details: "Egypt, Giza, Inside The Sphinx, Room Number 220",
  },
  {
    icon: AccessTimeOutlinedIcon,
    details: "Business Hours: From 10:00 To 18:00",
  },
  { icon: LocalPhoneOutlinedIcon, details: "+20123456789 & +20198765432" },
];
const imgsData = [
  { src: img1 },
  { src: img2 },
  { src: img3 },
  { src: img4 },
  { src: img5 },
  { src: img6 },
];
export default function Footer() {
  const navigate = useNavigate();
  return (
    <div className="footer">
      <div className="container">
        <div className="box">
          <h3>الماسة للمخبوزات</h3>
          <ul className="social">
            {socialIcons.map((item, index) => {
              return (
                <li key={index}>
                  <a href={item.href} className={item.className}>
                    <item.icon fontSize="large" />
                  </a>
                </li>
              );
            })}
          </ul>
          <p className="text">الماسه للمخبوزات الجوده عنوانا</p>
        </div>
        <div className="box">
          <ul className="links">
            {importantLinks.map((item, index) => {
              return (
                <li key={index}>
                  <KeyboardDoubleArrowRightIcon
                    sx={{ mr: 1, color: "var(--main-color)" }}
                  />
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
        <div className="box">
          {lineDetails.map((item, index) => {
            return (
              <div className="line" key={index}>
                <item.icon className="icon" />
                <div className="info">{item.details}</div>
              </div>
            );
          })}
        </div>
        <div className="box footer-gallery">
          {imgsData.map((item, index) => {
            return (
              <img key={index} decoding="async" src={item.src} alt="gallary" />
            );
          })}
        </div>
      </div>
      <div className="copyright">
        <p>
          Developed by <a href="#"> ibrahim eltbakh </a>
        </p>
        <p> الماسه للمخبوزات ملك لشركة الماسة | elmasa.com 2024 &copy; </p>
      </div>
    </div>
  );
}
