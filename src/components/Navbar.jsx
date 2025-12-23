import { navbarItems } from "./NavbarItems";

export default function Navbar() {
  const menuStyle = {
    listStyle: "none",
    display: "flex",
    gap: "20px",
  };
  return (
    <nav>
      <ul style={menuStyle}>
        {navbarItems.map((item) => {
          return (
            <li key={item.id} >
              <a href={item.path}>{item.name}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
