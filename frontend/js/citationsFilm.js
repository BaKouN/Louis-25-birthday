let score = 0;

var citation1 = WaveSurfer.create({
  container: '#citation1-wave',
});
citation1.load('/assets/audio/kaamelott.mp3');

$('.citation1 .fa-play').click(() => {
  citation1.play();
});

var citation2 = WaveSurfer.create({
  container: '#citation2-wave',
});
citation2.load('/assets/audio/killbill.mp3');

$('.citation2 .fa-play').click(() => {
  citation2.play();
});

var citation3 = WaveSurfer.create({
  container: '#citation3-wave',
});
citation3.load('/assets/audio/oss117.mp3');

$('.citation3 .fa-play').click(() => {
  citation3.play();
});

$('#citation1-answer-input').on('keypress', (e) => {
  if (e.which == 13) {
    let userAnswer = e.target.value;
    if (userAnswer.toLowerCase() == 'kaamelott') {
      $('#citation1-answer-input').val('');
      $('#citation1-answer-input').attr('placeholder', 'OK pour celui là');
      $('#citation1-answer-input').prop('disabled', true);
      score++;
      checkScore();
    } else {
      $('#citation1-answer-input').val('');
      $('#citation1-answer-input').attr('placeholder', 'Ca ne va pas...');
    }
  }
});

$('#citation2-answer-input').on('keypress', (e) => {
  if (e.which == 13) {
    let userAnswer = e.target.value;
    if (
      (userAnswer.toLowerCase() == 'killbill') |
      (userAnswer.toLowerCase() == 'kill bill') |
      (userAnswer.toLowerCase() == 'kill bill 2') |
      (userAnswer.toLowerCase() == 'killbill 2')
    ) {
      $('#citation2-answer-input').val('');
      $('#citation2-answer-input').attr('placeholder', 'Une réussite !');
      $('#citation2-answer-input').prop('disabled', true);
      score++;
      checkScore();
    } else {
      $('#citation2-answer-input').val('');
      $('#citation2-answer-input').attr('placeholder', 'Ca ne colle pas.');
    }
  }
});

$('#citation3-answer-input').on('keypress', (e) => {
  if (e.which == 13) {
    let userAnswer = e.target.value;
    if (
      (userAnswer.toLowerCase() == 'oss117') |
      (userAnswer.toLowerCase() == 'oss 117')
    ) {
      $('#citation3-answer-input').val('');
      $('#citation3-answer-input').attr('placeholder', 'Bravo M. De Bontin');
      $('#citation3-answer-input').prop('disabled', true);
      score++;
      checkScore();
    } else {
      $('#citation3-answer-input').val('');
      $('#citation3-answer-input').attr(
        'placeholder',
        'Etes vous sûr de vous ?'
      );
    }
  }
});

function checkScore() {
  if (score >= 3) {
    moveElements(step6, animationDuration, 3);
  }
}
