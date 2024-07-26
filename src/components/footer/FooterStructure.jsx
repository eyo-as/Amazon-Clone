import React from "react";
import classes from "./footer.module.css";
import logo from "../../assets/images/amazon_PNG11.png";
import { Link } from "react-router-dom";

const FooterStructure = ({ data }) => {
  return (
    <section className={classes.container}>
      <div>
        <span className={classes.detail_contaier}>
          {data?.map((section, i) => (
            <div key={i}>
              <span className={classes.title}>{section.title}</span>
              <span>
                {section?.links.map((items, i) => (
                  <ul>
                    <li>
                      <a href="#">{items.linkTitle}</a>
                    </li>
                  </ul>
                ))}
              </span>
            </div>
          ))}
        </span>
      </div>

      <hr style={{ color: "white" }} />

      <div className={classes.copyright}>
        <div>
          <Link to="/">
            <img src={logo} className={classes.logo_img} alt="amazon logo" />
          </Link>
        </div>
        <div className={classes.language}>
          <p>English</p>
        </div>
        <div className={classes.currency}>
          <p>USD - U.S. Dollar</p>
        </div>
        <div className={classes.state}>
          <p>United States</p>
        </div>
      </div>
    </section>
  );
};

export default FooterStructure;
