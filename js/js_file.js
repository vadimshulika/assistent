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
      if(result[0].transcript == 'Представься' || result[0].transcript == 'Как тебя зовут'){
        synth.speak(name_assistent);
      }
      if(result[0].transcript == 'Сколько сейчас времени' || result[0].transcript == 'Который сейчас час' || 
      result[0].transcript == 'Время' || result[0].transcript == 'Назови время'){
        synth.speak(real_time);
      }
      alert('Вы сказали: ' + result[0].transcript);
    } else {
      console.log('Промежуточный результат: ', result[0].transcript);
    }
  };

  function speech () {
    //synth.speak (utterance);
    // Начинаем слушать микрофон и распознавать голос
    recognizer.start();
  }

  var synth = window.speechSynthesis;
  var utterance = new SpeechSynthesisUtterance('Чем я могу вам помочь?');

  //Ответы
  var name_assistent = new SpeechSynthesisUtterance('Меня зовут Стенчик');

  var now = new Date();
  var real_time = new SpeechSynthesisUtterance(now); 

  function talk () {
    
  }

  function stop () {
    synth.pause();
  }
