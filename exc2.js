
const getCurrentTime = function () {
    return new Date();
  }
  
const getTime = function (callback) {
    const currentTime = callback();
    callback(currentTime);
}
getTime(getCurrentTime)

const returnTime = function (time) {
    console.log('The current time is: ' + time);
}

getTime(returnTime);
  