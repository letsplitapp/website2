import * as React from "react";
import { Link } from "gatsby";

const Footer = () => {
  return (
    <footer>
      <div>Copyright © 2022 Let’s Split. All rights reserved.</div>
      <div>
        <ul>
          <li>
            <Link to="/privacy/">Privacy Policy</Link>
          </li>
          <li>
            <a href="/terms-of-use.pdf" target="_blank">
              Terms of Use
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
