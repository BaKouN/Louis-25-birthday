const accueil = {
  btnElt: '#start',
  containerElt: '#accueil',
  xPos: 2380,
  yPos: 4215,
};

const step1 = {
  btnElt: '#step1',
  containerElt: '#step1Elt',
  xPos: 4712,
  yPos: 4157,
};

const step3 = {
  btnElt: '#step3',
  containerElt: '#step3Elt',
  xPos: 3000,
  yPos: 2000,
};

const step6 = {
  btnElt: '#step6',
  containerElt: '#step6Elt',
  xPos: 8206,
  yPos: 4200,
};

const Amelia = {
  xPos: 8500,
  yPos: 2550,
};

const Antoine = {
  xPos: 8000,
  yPos: 2815,
};

const Rival = {
  xPos: 7361,
  yPos: 2313,
};

const Haroun = {
  xPos: 7200,
  yPos: 3200,
};

const Hadrien = {
  xPos: 6441,
  yPos: 3023,
};

const Julien = {
  xPos: 5814,
  yPos: 3354,
};

const Merle = {
  xPos: 4784,
  yPos: 3259,
};

const Constance = {
  xPos: 4782,
  yPos: 2729,
};

const Chaput = {
  xPos: 4185,
  yPos: 2419,
};

const Maxime = {
  xPos: 4600,
  yPos: 1500,
};

const Samsam = {
  xPos: 6517,
  yPos: 1580,
};

const birthday = {
  xPos: 7105,
  yPos: 2850,
};

const animationDuration = 2;
const hookDuration = 0.5;
let wToRemove = $(window).width() / 2;
let hToRemove = $(window).height() / 2;
let stateMachine = accueil;

const eltsArray = [accueil, step1, step3, step6];

// call with sourceObj and an array containing all the other objects
function moveElements(source, duration, delay) {
  // move background
  gsap.to('#container', {
    duration,
    delay,
    backgroundPosition: `
    -${source.xPos - wToRemove}px 
    -${source.yPos - hToRemove}px
    `,
  });
  // get sourceElt in the center of the screen
  if (source.containerElt) {
    gsap.to(source.containerElt, {
      duration,
      delay,
      x: `${wToRemove}px`,
      y: `${hToRemove}px`,
    });
  }
  // move all other elements in sync relatively to the source one
  eltsArray
    .filter((elt) => elt !== source)
    .forEach((object) => {
      gsap.to(object.containerElt, {
        duration,
        delay,
        x: `${wToRemove + object.xPos - source.xPos}px`,
        y: `${hToRemove + object.yPos - source.yPos}px`,
      });
    });
}

// set starting position to start
moveElements(accueil, 0);

$(accueil.btnElt).click(() => {
  moveElements(accueil, animationDuration);
  stateMachine = accueil;
});

$(step1.btnElt).click(() => {
  moveElements(step1, animationDuration);
  stateMachine = step1;
});

$(step3.btnElt).click(() => {
  moveElements(step3, animationDuration);
  stateMachine = step3;
});

$(step6.btnElt).click(() => {
  moveElements(step6, animationDuration);
  stateMachine = step6;
});

$(window).resize(() => {
  wToRemove = $(window).width() / 2;
  hToRemove = $(window).height() / 2;
  moveElements(stateMachine, 0);
});
