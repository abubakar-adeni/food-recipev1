import React from "react";
import "../styles/footer.css";

function Footer() {
  return (
    <div>
      <footer style={{ position: "relative" }}>
        <div>
          <h2 className="text-primary text-center">Eat, Cook, Repeat</h2>
          <p className="text-muted text-center">
            Share your best recipe by uploading here !
          </p>
        </div>

        <p className="footer-copyright pl-5">
          © Made by {" "} 
          <span>
          <a href="https://github.com/abubakar-adeni?tab=repositories">Abubakar Adeni</a>
          </span>
        </p>
      </footer>
    </div>
  );
}

export default Footer;
