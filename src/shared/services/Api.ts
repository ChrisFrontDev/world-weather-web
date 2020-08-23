const APY_KEY = '37f3996f75583a82006b7c3d0443802c';

interface latlng {
  lat: number;
  lng: number;
}

const getWeather = ({ lat, lng }: latlng) => {
  return fetch(
    `http://api.openweathermap.org/data/2.5/find?lat=${lat}&lon=${lng}&cnt=15&APPID=${APY_KEY}&units=metric`,
  ).then((response) => response.json());
};

export { getWeather };
