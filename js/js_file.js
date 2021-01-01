  // Создаем распознаватель
  var recognizer = new webkitSpeechRecognition();

  // Ставим опцию, чтобы распознавание началось ещё до того, как пользователь закончит говорить
  recognizer.interimResults = true;

  // Какой язык будем распознавать?
  recognizer.lang = 'ru-Ru';

  // Используем колбек для обработки результатов
  recognizer.onresult = function (event) {
    var result = event.results[event.resultIndex];
    if (result.isFinal) {
      alert('Вы сказали: ' + result[0].transcript);
    } else {
      console.log('Промежуточный результат: ', result[0].transcript);
    }
  };

  function speech () {

    // Начинаем слушать микрофон и распознавать голос
    recognizer.start();
  }

  var synth = window.speechSynthesis;
  var utterance = new SpeechSynthesisUtterance('Чем я могу вам помочь?');

  function talk () {
    synth.speak (utterance);
  }

  function stop () {
    synth.pause();
  }
