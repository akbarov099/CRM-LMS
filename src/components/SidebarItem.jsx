import { NavLink } from "react-router-dom";

export default function SidebarItem({ Icon, text, path }) {
  return (
    <NavLink to={path}>
      <li className="sidebar_item">
        <p className="item_text">{text}</p>
        <Icon className="item_icon" />
      </li>
    </NavLink>
  );
}
