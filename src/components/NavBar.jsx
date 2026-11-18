import { Link, useLocation } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import PropTypes from "prop-types";

function NavBar({ items }) {
  const { pathname } = useLocation();

  return (
    <header className="site-header">
      <nav className="nav-inner" aria-label="Main navigation">
        <Link className="brand-mark" to="/" aria-label="Sai Shashank home">Sai<span>.</span></Link>
        <div className="nav-links">
          {items.map((item) => {
            const active = pathname === item.url || (item.url.startsWith("/services/") && pathname.startsWith("/services/"));
            return <Link key={item.name} to={item.url} className={active ? "nav-link nav-link-active" : "nav-link"} aria-current={active ? "page" : undefined}>{item.name}</Link>;
          })}
        </div>
        <Link className="nav-cta" to="/contact">Let’s talk <ArrowUpRight size={15} /></Link>
      </nav>
    </header>
  );
}

NavBar.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    icon: PropTypes.elementType.isRequired,
  })).isRequired,
};

export default NavBar;
