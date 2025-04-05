// eslint-disable-next-line no-unused-vars
import * as React from "react";
import TagsCard from "./TagCard";

const encodeCoordinatesToURL = (coordinates) => {
  const latitude = coordinates.split(" ")[0];
  const longitude = coordinates.split(" ")[1];

  const regex = /(\d+)°(\d+)'(\d+(\.\d+)?)"(S|N|E|W)/;
  const match = latitude.match(regex);
  const match2 = longitude.match(regex);

  if (!match) {
    return null;
  }

  const encodedLatitude = `${match[1]}%C2%B0${match[2]}'${match[3]}%22${match[5]}`;
  const encodedLongitude = `${match2[1]}%C2%B0${match2[2]}'${match2[3]}%22${match2[5]}`;

  const encodedCoordinates = `${encodedLatitude}+${encodedLongitude}`;

  return encodedCoordinates;
}

const Card = ({ info }) => {
  // https://www.google.pl/maps/place/5%C2%B030'00.0%22S+77%C2%B030'00.0%22W/@-9.5016455,-76.7947559,6.1z
  const place = info.attributes.place;
  const encodedPlace = encodeCoordinatesToURL(place);

  if (!encodedPlace) {
    console.error("Invalid coordinates format");
    return <div>Ubicación en formato incorrecto</div>;
  }

  const linkToGoogleMaps =
    `https://www.google.com/maps/place/${encodedPlace}/@-9.5016455,-76.7947559,6.1z`;

  return (
    <>
      <a
        className="block max-w-full p-6 py-4 bg-white border border-gray-100 shadow hover:bg-gray-100"
      >
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          {info.attributes.magnitude.toFixed(1)} Ritcher scale
        </h5>
        <p className="font-bold text-gray-700 mb-3">
          Ubicación: {info.attributes.place}
          <a href={linkToGoogleMaps} target="_blank" rel="noopener noreferrer" className="bg-green-200 rounded-md mx-4 p-2 px-4 font-medium text-sm">
            Google Maps
          </a>
          <br />
          Fecha: {info.attributes.date} <br />
          Hora: {info.attributes.hour}
        </p>
        <TagsCard
          magType={info.attributes.mag_type}
          tsunami={info.attributes.tsunami}
        />
      </a>
    </>
  );
};

export default Card;
