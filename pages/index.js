import Header from '../components/Header';

const Home = () => {
  return (
    <>
      <section className="hero">
        <Header />
        <div className="hero__content">
          <h1 className="hero__title">Hero messagge</h1>
        </div>
        {/* <Picture
          imgProps={{ className: 'hero__background', alt: 'background' }}
          phone={imgLandingPhone}
          tablet={imgLandingTablet}
          desktop={imgLandingDesktop}
        /> */}
      </section>
      <section className="container">
        <h1>clickk</h1>
      </section>
    </>
  );
};

export default Home;
