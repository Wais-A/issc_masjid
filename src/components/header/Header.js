import Image from 'next/image';
import Logo from '../../Assets/Logo-white.png';
import './Header.css';

export default function Header() {
  return (
    <section className="header-section">
      <div className="header-content">
        <div className="logo-container">
          <Image className="logo" src={Logo} alt="logo" />
        </div>
        <div className="text-container">
          <h1 className="titleText InTheNameOfAllah">﷽</h1>
          <h1 className="titleText arabicTitle">الجمعية الاسلامية لمقاطعة سكولكل</h1>
          <h1 className="titleText englishTitle">Islamic Society of Schuylkill County</h1>
          <h6 className="titleText tagline">Promoting Peace through the teachings of Prophet Muhammad</h6>
        </div>
      </div>
    </section>
  );
}