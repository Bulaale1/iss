/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable no-extra-semi */



//require all exported functions
const { fetchMyIP,fetchCoordsByIP,fetchISSFlyOverTimes,nextISSTimesForMyLocation ,printPassTimes } =
 require('./iss_promised');

fetchMyIP()
  .then(fetchCoordsByIP)
  .then(fetchISSFlyOverTimes)
  .then(body => console.log(body));
  nextISSTimesForMyLocation()
  .then((passTimes) => {
    printPassTimes(passTimes);
  })
  .catch((error) => {
    console.log("Unhandled Promise Rejection Warning: ", error.message);
  });