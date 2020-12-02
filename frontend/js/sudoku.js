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
        endingAnimation();
      }, 2000);
    } else {
      $('#gps-answer-input').val('NOPE!');
    }
  }
});

function endingAnimation() {
  $('#ending').show();
  gsap.fromTo(
    '#ending h1',
    1.5,
    {
      'border-right-color': 'rgba(255,255,255,1)',
    },
    {
      'border-right-color': 'rgba(255,255,255,0)',
      'repeat': -1,
      'ease': SteppedEase.config(1),
    },
    0
  );
  gsap.to('#ending h1', {
    duration: 5,
    scrambleText: {
      text: "Alors, pret a t'envoyer en l'air? ;)",
      chars: '0123456789',
    },
    onComplete: () => {
      setTimeout(() => {
        $('#creditBtn').show();
      }, 2000);
    },
  });
}

$('#creditBtn').on('click', () => {
  creditTl.play();
});

var creditSong = WaveSurfer.create({
  container: '#creditSong',
});
creditSong.load('/assets/audio/creditsong.mp3');

let creditTl = new TimelineMax({
  paused: true,
});

creditTl.to([], {
  onStart: () => {
    creditSong.play();
    moveElements(Amelia, 6);
    setTimeout(() => {
      $('#ending').hide();
    }, 300);
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
