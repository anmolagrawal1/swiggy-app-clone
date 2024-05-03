const Footer = () => {
    const year = new Date().getFullYear();
    return (
      <div className="footer">
        Created By
        <i class="fa-solid fa-heart"></i>
        <a href="https://www.linkedin.com/in/anmol-agrawal-941a35222/" target="_blank">
          Anmol Agrawal
        </a>
        <i class="fa-solid fa-copyright"></i>
        {year}
        <strong>
          Food<span>Store for you</span>
        </strong>
      </div>
    );
  };
 
  
  export default Footer;