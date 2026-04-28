
export const About = () => {
  return (
    <div className="text-light">
      <div className="container">
        {/* Hero Section */}
        <section className="text-center py-5">
          <h1 className="fw-bold display-4 text-info">Crafting Digital Experiences</h1>
          <p className="lead mt-3 text-muted">
            Passionate full-stack developer crafting digital experiences with modern technologies and creative solutions.
          </p>
          <div className="d-flex justify-content-center gap-3 mt-4">
            <button className="btn btn-outline-info">Explore My Projects</button>
            <button className="btn btn-success">My Services</button>
          </div>
        </section>

        {/* Stats Section */}
        <section className="container py-5">
          <h2 className="fw-bold mb-4">Let’s Get Introduced</h2>
          <p className="text-muted">
            Discover my journey and expertise through numbers that speak louder than words.
          </p>
          <div className="row text-center mt-4">
            <div className="col-md-3 mb-3">
              <div className="stat-box p-3 bg-secondary rounded">
                <h4>2+ Years</h4>
                <p className="text-muted">Experience</p>
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="stat-box p-3 bg-secondary rounded">
                <h4>18+</h4>
                <p className="text-muted">Completed Projects</p>
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="stat-box p-3 bg-secondary rounded">
                <h4>5+</h4>
                <p className="text-muted">Countries Worked</p>
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="stat-box p-3 bg-secondary rounded">
                <h4>8+</h4>
                <p className="text-muted">Happy Clients</p>
              </div>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="container text-center py-5">
          <div className="video-box position-relative d-inline-block">
            <img
              src="/assets/video-thumbnail.jpg"
              alt="Anas Intro"
              className="img-fluid rounded"
            />
            <button className="btn btn-danger position-absolute top-50 start-50 translate-middle rounded-circle">
              ▶
            </button>
          </div>
          <p className="mt-3 fw-bold">Ariyan Rahman Anas | Full</p>
        </section>
      </div>
    </div>
  );
}
