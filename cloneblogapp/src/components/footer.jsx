import "./footer.css";

function Footer() {
  const day = new Date().toDateString();

  return (
    <div className="footer">
      <p>@2023 Copyright:</p>
      <p>Vick Brav</p>
      <p>{day}</p>
    </div>
  );
}

export default Footer;
