import React from "react";
import "../App.css"

export const Portfolio = () => {
  return (
    <div>
      <div className="main-wrapper page-contactus">
        <section className="bredcrumb">
          <div
            className="bg-image text-center"
            style={{ backgroundImage: "url('assets/img/bg-bredcrumb.jpg')" }}
          >
            <h1>Portfolio</h1>
          </div>
          <div className="">
            <ul className="pager middle">
              <li>Home</li>
              <li>
                <a href="javascript:void(0)">Portfolio</a>
              </li>
            </ul>
          </div>
        </section>

        <section className="portfolio-area">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="sectionTitle text-center">
                  <h2>Our Portfolio</h2>
                  <p>Some Spectacular Videos</p>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 col-lg-4">
                <div className="card">
                  <div className="card_img">
                    <a>
                      <video height="240" width="320" controls>
                        <source
                          src="assets\eventVideos\bdayCouple.mp4"
                          type="video/mp4"
                        />
                        Your browser does not support the video
                      </video>
                      <h4 className="img_overlay-title">Birthday party</h4>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="card">
                  <div className="card_img">
                    <a>
                      <video height="240" width="320" controls>
                        <source
                          src="assets\eventVideos\Wedding1.mp4"
                          type="video/mp4"
                        />
                        Your browser does not support the video
                      </video>
                      <h4 className="img_overlay-title">Wedding Story</h4>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="card">
                  <div className="card_img">
                    <a>
                      <video height="240" width="320" controls>
                        <source
                          src="assets\eventVideos\djNight.mp4"
                          type="video/mp4"
                        />
                        Your browser does not support the video
                      </video>
                      <h4 className="img_overlay-title">DJ party</h4>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="card">
                  <div className="card_img">
                    <a>
                      <video height="240" width="320" controls>
                        <source
                          src="assets\eventVideos\Wedding2.mp4"
                          type="video/mp4"
                        />
                        Your browser does not support the video
                      </video>
                      <h4 className="img_overlay-title">Wedding Story</h4>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="card">
                  <div className="card_img">
                    <a>
                      <video height="240" width="320" controls>
                        <source
                          src="assets\eventVideos\wedding3.mp4"
                          type="video/mp4"
                        />
                        Your browser does not support the video
                      </video>
                      <h4 className="img_overlay-title">Wedding Story</h4>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="card">
                  <div className="card_img">
                    <a>
                      <video height="240" width="320" controls>
                        <source
                          src="assets\eventVideos\wedding4.mp4"
                          type="video/mp4"
                        />
                        Your browser does not support the video
                      </video>
                      <h4 className="img_overlay-title">Wedding Story</h4>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="card">
                  <div className="card_img">
                    <a>
                      <video height="240" width="320" controls>
                        <source
                          src="assets\eventVideos\wedding5.mp4"
                          type="video/mp4"
                        />
                        Your browser does not support the video
                      </video>
                      <h4 className="img_overlay-title">Wedding Story</h4>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="card">
                  <div className="card_img">
                    <a>
                      <video height="240" width="320" controls>
                        <source
                          src="assets\eventVideos\garbaVid.mp4"
                          type="video/mp4"
                        />
                        Your browser does not support the video
                      </video>
                      <h4 className="img_overlay-title">Garba Event</h4>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="newsletter bg-sand">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-3 col-12">
                <h4 className="text-center text-md-left">
                  <span className="text-primary">Subscribe</span> <br />
                  For Latest <span className="text-primary">Update</span>
                </h4>
              </div>
              <div className="col-lg-9 col-12">
                <form>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputName"
                      aria-describedby="userName"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail"
                      aria-describedby="userEmail"
                      placeholder="Your email"
                      required
                    />
                  </div>
                  <div className="">
                    <button className="btn btn-primary btn-default bold w-100">
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
