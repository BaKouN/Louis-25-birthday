const squareCenter = {
  height: $("#square").width() / 2,
  width: $("#square").width() / 2,
};
const wToRemove = $(window).width() / 2 - squareCenter.width;
const hToRemove = $(window).height() / 2 - squareCenter.height;

$("#move1").click(() => {
  // x: 3330 , y : 1600
  const xStep1 = 3281;
  const yStep1 = 1717;
  gsap.to("#container", {
    duration: 2,
    backgroundPosition: `-${xStep1 - wToRemove}px -${yStep1 - hToRemove}px`,
  });
});

$("#move2").click(() => {
  // x: 4900 , y : 2400
  const xStep2 = 4885;
  const yStep2 = 2321;
  gsap.to("#container", {
    duration: 2,
    backgroundPosition: `-${xStep2 - wToRemove}px -${yStep2 - hToRemove}px`,
  });
});

$("#move3").click(() => {
  // x: 965, y: 3700
  const xStep3 = 757;
  const yStep3 = 3707;
  gsap.to("#container", {
    duration: 2,
    backgroundPosition: `-${xStep3 - wToRemove}px -${yStep3 - hToRemove}px`,
  });
});

$("#move4").click(() => {
  // x:7100, y: 3900
  const xStep4 = 6630;
  const yStep4 = 3425;
  gsap.to("#container", {
    duration: 2,
    backgroundPosition: `-${xStep4 - wToRemove}px -${yStep4 - hToRemove}px`,
  });
});

$("#move5").click(() => {
  const xStep5 = 1939;
  const yStep5 = 2495;
  gsap.to("#container", {
    duration: 2,
    backgroundPosition: `-${xStep5 - wToRemove}px -${yStep5 - hToRemove}px`,
  });
});

// 1769 2417
