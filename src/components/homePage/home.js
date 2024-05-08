import Announcements from "@/Pages/Events/Announcements/Announcements";
import "./home.css";
import Khutba from "@/Pages/Events/Khutba/Khutba";

export default function HomePage() {
  return (
    <section className="home-page">
      <div className="content-container">
        <div className="section announcements-section">
          <h1 className="section-title">
            <span className="title-divider">━━━━</span>
            Announcements
            <span className="title-divider">━━━━</span>
          </h1>
          <Announcements />
        </div>
        <div className="section updates-section">
          <h1 className="section-title">
            <span className="title-divider">━━━━━</span>
            Updates
            <span className="title-divider">━━━━━</span>
          </h1>
          <Khutba />
        </div>
      </div>
    </section>
  );
}