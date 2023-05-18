import React from "react";
import { Chip, Stack } from "@mui/material";
import {
  useGetDinnerQuery,
  useGetFilmShootQuery,
  useGetOtherEventsQuery,
  useGetPartyQuery,
  useGetWeddingQuery,
} from "../store/servicesActivities";
import { Link } from "react-router-dom";

const Activities = () => {
  const { data: Dinner } = useGetDinnerQuery();
  const { data: Filmshoot } = useGetFilmShootQuery();
  const { data: otherEvents } = useGetOtherEventsQuery();
  const { data: Party } = useGetPartyQuery();
  const { data: Wedding } = useGetWeddingQuery();

  return (
    <div className="LocationsActivities_container-index__2L0cQ container mt-7">
      <div className="mt-6">
        <h3 className="mb-4">Wedding</h3>
        <hr />

        <div className="row mt-4">
          {Wedding?.map((data, id) => (
              <Link to={`/WeddingFrom/${data.activities}`}>
              <Stack key={id} spacing={1}>
                <Chip
                  className="col-xs-12 col-md-6 col-lg-3 mb-3"
                  width="280"
                  height="300"
                  label={data.activities}
                />
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
          {Filmshoot?.map((data, id) => (
            <Link to={`/WeddingFrom/${data.activities}`}>
            <Stack key={id} spacing={1}>
              <Chip
                className="col-xs-12 col-md-6 col-lg-3 mb-3"
                width="280"
                height="300"
                label={data.activities}
              />
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
            <Link to={`/WeddingFrom/${data.activities}`}>
            <Stack key={id} spacing={1}>
              <Chip
                className="col-xs-12 col-md-6 col-lg-3 mb-3"
                width="280"
                height="300"
                label={data.activities}
              />
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
          {Party?.map((data, id) => (
            <Link to={`/WeddingFrom/${data.activities}`}>
            <Stack  key={id} spacing={1}>
              <Chip
                className="col-xs-12 col-md-6 col-lg-3 mb-3"
                width="280"
                height="300"
                label={data.activities}
              />
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
          {Dinner?.map((data, id) => (
            <Link to={`/WeddingFrom/${data.activities}`}>
            <Stack key={id} spacing={1}>
              <Chip
                className="col-xs-12 col-md-6 col-lg-3 mb-3"
                width="280"
                height="300"
                label={data.activities}
              />
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
