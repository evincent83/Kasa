import LogoKasa from "../img/logofooter.svg";

export default function Footer() {
  return (
    <footer>
      <div className="footerAlign">
        <img src={LogoKasa} alt="Logo Kasa"></img>
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
}
