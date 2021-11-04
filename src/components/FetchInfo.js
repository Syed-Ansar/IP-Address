export const fetchInfo = (ip, setInfo) => {
  const url = `https://geo.ipify.org/api/v2/country,city?apiKey=at_yZyMocNEUXc2cBC4WcHQm4n4z0S3w&ipAddress=${ip}`;
  fetch(url)
    .then((request) => request.json())
    .then((data) => {
      const { ip, location, isp } = data;
      const { city, country, lat, lng, postalCode, timezone } = location;
      const info = {
        ip,
        location,
        isp,
        city,
        country,
        lat,
        lng,
        postalCode,
        timezone,
      };
      setInfo(info);
    });
};
