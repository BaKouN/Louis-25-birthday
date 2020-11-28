/**
 * Crossword init file.
 *
 * It caontains configuration data that can also be fetched from server.
 */

/* global Crossword */
var crosswordConfig = {
  sizeX: 19,
  sizeY: 18,
  across: [
    {
      number: 2,
      x: 2,
      y: 2,
      desc: 'Véhicule pratique pour contourner la bretagne',
      length: 6,
    },
    {
      number: 6,
      x: 9,
      y: 8,
      desc: 'Mais la plupart de tes potes en sont..',
      length: 9,
    },
    {
      number: 7,
      x: 1,
      y: 9,
      desc: 'Ta comparse de festival',
      length: 6,
    },
    {
      number: 10,
      x: 5,
      y: 12,
      desc: 'Surnom de ta meilleure...',
      length: 8,
    },
    {
      number: 11,
      x: 4,
      y: 16,
      desc: 'Surnom de ta meilleure...',
      length: 6,
    },
    {
      number: 12,
      x: 5,
      y: 19,
      desc: 'Ton décor préféré pour les selfies',
      length: 8,
    },
  ],
  down: [
    {
      number: 1,
      x: 3,
      y: 1,
      desc: 'Tu hais ces personnes',
      length: 9,
    },
    {
      number: 3,
      x: 16,
      y: 5,
      desc: "L'instrument qui te représente",
      length: 7,
    },
    {
      number: 4,
      x: 6,
      y: 6,
      desc: 'Réalisateur de génie',
      length: 9,
    },
    {
      number: 5,
      x: 10,
      y: 7,
      desc: 'Un de tes deux styles de musique favori',
      length: 8,
    },
    {
      number: 8,
      x: 8,
      y: 9,
      desc: "1ere partie du nom d'un groupe de métal incroyable",
      length: 7,
    },
    {
      number: 9,
      x: 12,
      y: 10,
      desc: '2eme partie du nom du groupe',
      length: 10,
    },
  ],
};

// Initialize crossword.
Crossword.init(crosswordConfig);
