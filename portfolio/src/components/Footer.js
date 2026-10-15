import { profile } from "../data";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>
          Copyright © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <p className="footer__right">
          <span>{profile.location}</span>
          <a href="#top">Back to top</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
