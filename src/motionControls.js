module.exports = function (els) {
  if (window.DeviceOrientationEvent) {
    window.addEventListener("deviceorientation", handleOrientation, true);
  } else {
    document.body.textContent = 'BORKED yr browser does not support deviceorientation'
  }


  function handleOrientation(event) {
    // var absolute = event.absolute;

    var alpha    = event.alpha; // 0 - 360 compass direction
    var beta     = event.beta; // -180 - 180 front to back
    var gamma    = event.gamma; // -90 - 90 left to right

    // console.log(absolute, alpha, beta, gamma)
  }
}
