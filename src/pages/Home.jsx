import backgroundImage from "../public/images/background.jpg"
import backgroundImage1 from "../public/images/background1.jpg"
import backgroundImage2 from "../public/images/background2.jpg"

const Home = () => {

  return (
    <>
    <main className="main-content">
        <div className="hero-text">
          <h1>QuickList – Shop Fast. Live Smart.</h1>
          <p>Emphasizes convenience and intelligent shopping, ideal for a modern, fast-paced audienc</p>
          <button>Shop Now</button>
        </div>
      </main>

      <aside className="carousel">
        <div className="person">
          <img src={backgroundImage} alt="Lara" />
        </div>
        <div className="person">
          <img src={backgroundImage2} alt="David" />
        </div>
        <div className="person">
          <img src={backgroundImage1} alt="David" />
        </div>
      </aside>
      </>
  );
};

export default Home;
