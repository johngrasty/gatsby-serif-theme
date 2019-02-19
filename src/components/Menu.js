import React from "react";
import { graphql, StaticQuery, Link } from "gatsby";

const Menu = props => {
  const { menuLinks } = props.data.site.siteMetadata;
  return (
    <div id="main-menu" className="navbar-menu">
      <div className="navbar-end">
        {menuLinks.map(link => (
          <Link key={link.name} className="navbar-item" to={link.link}>
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default props => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
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
    render={data => <Menu data={data} />}
  />
);
