import React from "react";
import "./Footer.css";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
function Footer() {
  return (
    <>
      <footer className="netflix-footer">
        <div className="footer-container">
          <div className="footer-links row">
            <div className="colum">
              <div className="social-links">
                <a href="">
                  <FacebookRoundedIcon />
                </a>
                <a href="">
                  <InstagramIcon />
                </a>
                <a href="">
                  <YouTubeIcon />
                </a>
              </div>
              <a href="#">Aidio Description</a>
              <a href="#">Investor Relations</a>
              <a href="#">Legal Notice</a>
              <a href="#">Service Code</a>
            </div>
            <div className="colum">
              <a href="#">Help Center</a>
              <a href="#">Jobs</a>
              <a href="#">Cookie Prefernce</a>
            </div>
            <div className="colum">
              <a href="#">Gift Cards</a>
              <a href="#">Terms of Use</a>
              <a href="#">Corporate Information</a>
            </div>
            <div className="colum">
              <a href="#">Media Center</a>
              <a href="#">Privacy</a>
              <a href="">Contact Us</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;
