const elForm = document.querySelector('.form-js');
const elInput = document.querySelector('.input-js');
const elSpeechBtn = document.querySelector('.form-btn-speech');
const elAddBtn = document.querySelector('.form-btn-add-todo');
const elList = document.querySelector('.output');
const elTimeList = document.querySelector('.time__list')
const recognition = new webkitSpeechRecognition();


elAddBtn.addEventListener('click', function(evt) {
    evt.preventDefault();
    const dateFunc = new Date();
    const dateOutput = `${String(dateFunc.getHours()).padStart(2, '0')}:${String(dateFunc.getMinutes()).padStart(2, '0')}, ${dateFunc.getDate()}/${dateFunc.getMonth() + 1}/${dateFunc.getFullYear()}`
    const outputSpeechItem = document.createElement('li');
    const outputSpeechItemTime = document.createElement('li');
    outputSpeechItem.classList.add('output__item', "animate__animated", "animate__fadeInDown")
    outputSpeechItemTime.classList.add('time__item', "animate__animated", "animate__fadeInDown")
    elList.appendChild(outputSpeechItem);
    elTimeList.appendChild(outputSpeechItemTime);
    outputSpeechItem.textContent = elInput.value;
    outputSpeechItemTime.textContent = dateOutput;
    if(elInput.value.toLowerCase() === 'clear'){
            elList.innerHTML = '';
            elTimeList.innerHTML = '';
            elInput.value = '';
        }
    elInput.value = ''
});

elSpeechBtn.addEventListener('click', function(evt){
    evt.preventDefault();
    recognition.start();
    recognition.onresult = function(event) {
        const resultSpeech = event.results[0][0].transcript;
        elInput.value = resultSpeech;
        if (resultSpeech.toLowerCase() === 'clear') {
            elList.innerHTML = ''; 
            elTimeList.innerHTML = '';
            elInput.value = '';
        }
    };
});




















