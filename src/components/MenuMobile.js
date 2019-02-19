import React from "react";
import { graphql, StaticQuery, Link } from "gatsby";

const MenuMobile = props => {
  const { menuLinks } = props.data.site.siteMetadata;
  return (
    <div
      id="main-menu-mobile"
      className={`navbar-menu main-menu-mobile ${
        props.active ? "is-active" : ""
      } is-hidden-desktop`}
    >
      {menuLinks.map(link => (
        <Link key={link.name} className="navbar-item" to={link.link}>
          {link.name}
        </Link>
      ))}
    </div>
  );
};

export default props => (
  <StaticQuery
    query={graphql`
      query MenuMobileQuery {
        site {
          siteMetadata {
            menuLinks {
              name
              link
            }
          }
        }
      }
    `}
    render={data => <MenuMobile active={props.active} data={data} />}
  />
);
