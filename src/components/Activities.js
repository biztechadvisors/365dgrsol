import React from "react";
import { Chip, Stack } from "@mui/material";
import { useGetEventsQuery } from "../store/servicesActivities";
import { Link } from "react-router-dom";

const Activities = () => {
  const { data: events } = useGetEventsQuery();
  console.log(events);

  const weddingEvents = Array.isArray(events)
    ? events.filter((event) => event.category === "Wedding")
    : [];
  console.log(weddingEvents);
  const filmShootEvents = Array.isArray(events)
    ? events.filter((event) => event.category === "Film Shoot")
    : [];
  console.log(filmShootEvents);
  const otherEvents = Array.isArray(events)
    ? events.filter((event) => event.category === "Events")
    : [];
  console.log(otherEvents);
  const partyEvents = Array.isArray(events)
    ? events.filter((event) => event.category === "Party")
    : [];
  console.log(partyEvents);
  const dinnerEvents = Array.isArray(events)
    ? events.filter((event) => event.category === "Dinner")
    : [];
  console.log(dinnerEvents);

  return (
    <div className="LocationsActivities_container-index__2L0cQ container mt-7">
      <section className="portfolio-area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="sectionTitle text-center">
                <p>Some Spectacular Videos</p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 col-lg-4">
              <div className="card">
                <div className="card_img">
                  <video height="240" width="320" controls>
                    <source
                      src="assets\eventVideos\bdayCouple.mp4"
                      type="video/mp4"
                    />
                    Your browser does not support the video
                  </video>

                  <h5 style={{ margin: "8px" }} className="img_overlay-title">
                    Birthday party
                  </h5>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card">
                <div className="card_img">
                  <video height="240" width="320" controls>
                    <source
                      src="assets\eventVideos\Wedding1.mp4"
                      type="video/mp4"
                    />
                    Your browser does not support the video
                  </video>
                  <h5 style={{ margin: "8px" }} className="img_overlay-title">
                    Wedding Story
                  </h5>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card">
                <div className="card_img">
                  <video height="240" width="320" controls>
                    <source
                      src="assets\eventVideos\djNight.mp4"
                      type="video/mp4"
                    />
                    Your browser does not support the video
                  </video>
                  <h5 style={{ margin: "8px" }} className="img_overlay-title">
                    DJ Party
                  </h5>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card">
                <div className="card_img">
                  <video height="240" width="320" controls>
                    <source
                      src="assets\eventVideos\Wedding2.mp4"
                      type="video/mp4"
                    />
                    Your browser does not support the video
                  </video>
                  <h5 style={{ margin: "8px" }} className="img_overlay-title">
                    Wedding Story
                  </h5>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card">
                <div className="card_img">
                  <video height="240" width="320" controls>
                    <source
                      src="assets\eventVideos\wedding3.mp4"
                      type="video/mp4"
                    />
                    Your browser does not support the video
                  </video>
                  <h5 style={{ margin: "8px" }} className="img_overlay-title">
                    Wedding Story
                  </h5>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card">
                <div className="card_img">
                  <video height="240" width="320" controls>
                    <source
                      src="assets\eventVideos\wedding4.mp4"
                      type="video/mp4"
                    />
                    Your browser does not support the video
                  </video>
                  <h5 style={{ margin: "8px" }} className="img_overlay-title">
                    Wedding Story
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div classname="text-center single_block">
        <h1 className="bg-image text-center">Choose Your Activity</h1>
      </div>
      <div className="mt-6">
        <h3 className="mb-4">Wedding</h3>
        <hr />

        <div className="row mt-4">
          {weddingEvents?.map((data, id) => (
            <Link to={`/WeddingFrom/${data.activityName}`}>
              <Stack key={id}>
                <div style={{ margin: "8px", padding: "12px" }}>
                  <Chip
                    variant="outlined"
                    className="col-xs-12 col-md-6 col-lg-3 mb-3"
                    width="280"
                    height="300"
                    label={data.activityName}
                  />
                </div>
              </Stack>
            </Link>
          ))}
        </div>

        <div className="clearfix"></div>
      </div>

      <div className="mt-6">
        <h3 className="mb-4">Film Shoot</h3>
        <hr />

        <div className="row mt-4">
          {filmShootEvents?.map((data, id) => (
            <Link to={`/WeddingFrom/${data.activityName}`}>
              <Stack key={id} spacing={1}>
                <div style={{ margin: "8px", padding: "12px" }}>
                  <Chip
                    variant="outlined"
                    className="col-xs-12 col-md-6 col-lg-3 mb-3"
                    width="280"
                    height="300"
                    label={data.activityName}
                  />
                </div>
              </Stack>
            </Link>
          ))}
        </div>

        <div className="clearfix"></div>
      </div>
      <div className="mt-6">
        <h3 className="mb-4">Events</h3>
        <hr />

        <div className="row mt-4">
          {otherEvents?.map((data, id) => (
            <Link to={`/WeddingFrom/${data.activityName}`}>
              <Stack key={id} spacing={1}>
                <div style={{ margin: "8px", padding: "12px" }}>
                  <Chip
                    variant="outlined"
                    className="col-xs-12 col-md-6 col-lg-3 mb-3"
                    width="280"
                    height="300"
                    label={data.activityName}
                  />
                </div>
              </Stack>
            </Link>
          ))}
        </div>
        <div className="clearfix"></div>
      </div>
      <div className="mt-6">
        <h3 className="mb-4">Party</h3>
        <hr />

        <div className="row mt-4">
          {partyEvents?.map((data, id) => (
            <Link to={`/WeddingFrom/${data.activityName}`}>
              <Stack key={id} spacing={1}>
                <div style={{ margin: "8px", padding: "12px" }}>
                  <Chip
                    variant="outlined"
                    className="col-xs-12 col-md-6 col-lg-3 mb-3"
                    width="280"
                    height="300"
                    label={data.activityName}
                  />
                </div>
              </Stack>
            </Link>
          ))}
        </div>

        <div className="clearfix"></div>
      </div>
      <div className="mt-6">
        <h3 className="mb-4">Dinner</h3>
        <hr />

        <div className="row mt-4">
          {dinnerEvents?.map((data, id) => (
            <Link to={`/WeddingFrom/${data.activityName}`}>
              <Stack key={id} spacing={1}>
                <div style={{ margin: "8px", padding: "12px" }}>
                  <Chip
                    variant="outlined"
                    className="col-xs-12 col-md-6 col-lg-3 mb-3"
                    width="280"
                    height="300"
                    label={data.activityName}
                  />
                </div>
              </Stack>
            </Link>
          ))}
        </div>

        <div className="clearfix"></div>
      </div>
    </div>
  );
};

export default Activities;
