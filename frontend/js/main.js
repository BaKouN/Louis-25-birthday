// width pure center = -935px;
// height pure center = -495px;

const squareCenter = {
  height: 25,
  width: 25,
};
const containerElt = document.getElementById("container");
const wToRemove = $(window).width() / 2 - squareCenter.width;
const hToRemove = $(window).height() / 2 - squareCenter.height;

console.log("width", wToRemove, "height", hToRemove);

$("#move1").click(() => {
  // x: 3330 , y : 1600
  const xStep1 = 3330;
  const yStep1 = 1600;
  gsap.to("#container", { duration: 2, backgroundPosition: "-2550px -1200px" });
});

$("#move2").click(() => {
  // x: 4900 , y : 2400
  const xStep2 = 3330;
  const yStep2 = 1600;
  gsap.to("#container", { duration: 2, backgroundPosition: "-4100px -2000px" });
});

$("#move3").click(() => {
  // x: 965, y: 3700
  const xStep3 = 3330;
  const yStep3 = 1600;
  gsap.to("#container", { duration: 2, backgroundPosition: "0px -3200px" });
});

$("#move4").click(() => {
  // x:7100, y: 3900
  const xStep4 = 3330;
  const yStep4 = 1600;
  gsap.to("#container", { duration: 2, backgroundPosition: "-6200px -3400px" });
});
