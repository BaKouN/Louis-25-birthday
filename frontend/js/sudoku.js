$('.sudoku').on('input', 'input', function () {
  var $input = $(this);
  $input.attr('value', $input.val());
});

$('#gps-answer-input').on('keypress', (e) => {
  if (e.which == 13) {
    let answerRegex = new RegExp('^(?=.*\\bparachute\\b).*$', 'gmi');
    if (answerRegex.test(e.target.value)) {
      $('#gps-answer-input').val('Et ouais mon pote !');
      $('#gps-answer-input').prop('disabled', true);
      setTimeout(() => {
        $('#creditBtn').show();
      }, 2);
    } else {
      $('#gps-answer-input').val('NOPE!');
    }
  }
});

$('#creditBtn').on('click', () => {
  creditTl.play();
});

var creditSong = WaveSurfer.create({
  container: '#creditSong',
});
creditSong.load('./assets/audio/creditsong.mp3');

let creditTl = new TimelineMax({
  paused: true,
});

creditTl.to([], {
  onStart: () => {
    creditSong.play();
    moveElements(Amelia, 6);
  },
  duration: 6,
});

creditTl.to([], {
  onStart: () => {
    moveElements(Antoine, 6);
  },
  duration: 6,
});

creditTl.to([], {
  onStart: () => {
    moveElements(Rival, 6);
  },
  duration: 6,
});

creditTl.to([], {
  onStart: () => {
    moveElements(Haroun, 6);
  },
  duration: 6,
});

creditTl.to([], {
  onStart: () => {
    moveElements(Hadrien, 6);
  },
  duration: 6,
});

creditTl.to([], {
  onStart: () => {
    moveElements(Julien, 6);
  },
  duration: 6,
});

creditTl.to([], {
  onStart: () => {
    moveElements(Merle, 6);
  },
  duration: 6,
});

creditTl.to([], {
  onStart: () => {
    moveElements(Constance, 6);
  },
  duration: 6,
});

creditTl.to([], {
  onStart: () => {
    moveElements(Chaput, 6);
  },
  duration: 6,
});

creditTl.to([], {
  onStart: () => {
    moveElements(Maxime, 6);
  },
  duration: 6,
});

creditTl.to([], {
  onStart: () => {
    moveElements(Samsam, 6);
  },
  duration: 6,
});

creditTl.to([], {
  onStart: () => {
    moveElements(birthday, 6);
  },
  duration: 6,
});
