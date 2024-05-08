import HomePage from "@/components/homePage/home";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import SideBar from "@/components/sideBar/sideBar";
import './page.css';

export default function Home() {
  return (
    <main className="home-main">
      <Header />
      <div className="home-container">
        <section className="sidebar-section">
          <SideBar />
        </section>
        <section className="content-section">
          <HomePage />
        </section>
      </div>
      <Footer />
    </main>
  );
}
