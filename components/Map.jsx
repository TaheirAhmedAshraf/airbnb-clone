import React from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { getCenter } from "geolib";

function Map({ searchResult }) {
  const [selectedLocation, setSelectedLocation] = React.useState({});
  // Transform the search result object into an object
  const coordinates = searchResult.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  const center = getCenter(coordinates);

  const [viewport, setViewport] = React.useState({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  });

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/ashraf9053/cksua1vmd04qj17pqdta20hfa"
      mapboxApiAccessToken={process.env.mapbox_key}
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      {searchResult.map((result) => (
        <div key={result.long}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <p
              role="img"
              onClick={() => setSelectedLocation(result)}
              className="cursor-pointer text-2xl animate-bounce"
              aria-label="push-pin"
            >
              📌
            </p>
          </Marker>
{selectedLocation.long === result.long ? (
    <Popup 
    onClose={()=> setSelectedLocation({})}
    closeOnClick={true}
    latitude={result.lat}
    longitude={result.long}
    >
    {result.title}
    </Popup>
):false}

        </div>
      ))}
    </ReactMapGL>
  );
}

export default Map;
