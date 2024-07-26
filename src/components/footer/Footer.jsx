import React from "react";
import classes from "./footer.module.css";
import { footerData } from "./data";
import FooterStructure from "./FooterStructure";

const Footer = () => {
  //   console.log(footerData);
  return (
    <section className={classes.footer_container}>
      <div className={classes.back_to_top}>
        <a href="#">Back to top</a>
      </div>
      <div>
        <FooterStructure data={footerData} />
      </div>
    </section>
  );
};

export default Footer;
