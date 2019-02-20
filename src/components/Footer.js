import React from "react";
import { graphql, Link, StaticQuery } from "gatsby";

const Footer = props => (
  <>
    <section class="section has-background-link has-padding-5">
      <div className="content level has-text-white-ter">
        <div className="level-left">
          {" "}
          <strong>Phone: </strong>
          {props.data.site.siteMetadata.contact.phone}
          <strong>Email: </strong>{" "}
          <a href={`mailto:${props.data.site.siteMetadata.contact.email}`}>
            {props.data.site.siteMetadata.contact.email}
          </a>
        </div>
      </div>
    </section>
    <footer className="footer has-background-black-ter">
      <div className="content level has-text-white">
        <div className="level-left">
          <p className="level-item has-text-white is-size-5 has-text-weight-semibold">
            {props.data.site.siteMetadata.title}
          </p>
        </div>
        <div className="level-right">
          <Link className="level-item has-text-info" to="/">
            Home
          </Link>
          <Link className="level-item has-text-info" to="/contact">
            Contact
          </Link>
          <p className="copyright has-text-centered-mobile">
            © {new Date().getFullYear()} {props.data.site.siteMetadata.title}
          </p>
        </div>
      </div>
    </footer>
  </>
);

export default props => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
            contact {
              email
              phone
            }
          }
        }
      }
    `}
    render={data => <Footer data={data} />}
  />
);

const SubFooter = props => (
  <div className="sub-footer-strip">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="sub-footer">
            <ul>
              <li>
                <strong>Phone: </strong>
                {props.data.site.siteMetadata.contact.phone}
              </li>
              <li>
                <strong>Email: </strong>{" "}
                <a
                  href={`mailto:${props.data.site.siteMetadata.contact.email}`}
                >
                  {props.data.site.siteMetadata.contact.email}
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="https://www.zerostatic.io">www.zerostatic.io</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);
