var citation1 = WaveSurfer.create({
  container: '#citation1Wave',
  hideScrollbar: true,
  cursorWidth: 0,
});
citation1.load('./assets/audio/citation1AK.mp3');

$('#citation1').click(() => {
  citation1.play();
});

// var citation2 = WaveSurfer.create({
//   container: '#citation2Wave',
//   hideScrollbar: true,
//   cursorWidth: 0,
// });
// citation1.load('./assets/audio/test.mp3');

// $('#citation1').click(() => {
//   citation1.play();
// });
