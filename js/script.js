const elForm = document.querySelector(".site-form");
let elSelect = elForm.querySelector(".site-select");
let elText = document.querySelector(".mintext");

elForm.addEventListener('click', function(evt){
  evt.preventDefault();

  let elSelectValue = elSelect.value;

  if (elSelectValue == "yupqa") {
    elText.textContent = "Yupqa";
  }else if (elSelectValue == "ortacha") {
    elText.textContent = "Ortacha";
  }else if (elSelectValue == "qalin") {
    elText.textContent = "Qalin";
  };
});



const elFormS = document.querySelector(".hero__fromF");
let elRadioF = document.querySelector(".hero__radio");
let elRadioS = document.querySelector(".hero__radio-two");
let elRadioT = document.querySelector(".hero__radio-three");
let elSizeF = document.querySelector(".radio__input");
let elSizeS = document.querySelector(".radio__input-two");
let elSizeT = document.querySelector(".radio__input-three");
let elSize = document.querySelector(".results__span-size");

elRadioF.addEventListener('click', function(evt){
  evt.preventDefault();

  let elRadioFcheck = elRadioF.checked;

  if (elRadioFcheck == true) {
    elSize.textContent = '';
    elSize.textContent = elSizeF.textContent;
  };
});

elRadioS.addEventListener('click', function(evt){
  evt.preventDefault();

  let elRadioScheck = elRadioS.checked;

  if (elRadioScheck == true) {
    elSize.textContent = '';
    elSize.textContent = elSizeS.textContent;
  };
});

elRadioT.addEventListener('click', function(evt){
  evt.preventDefault();

  let elRadioTcheck = elRadioT.checked;

  if (elRadioTcheck == true) {
    elSize.textContent = '';
    elSize.textContent = elSizeT.textContent;
  };
});

let elFormCheckbox = document.querySelector('.intro__form');
let elList = document.querySelector('.results__listF');
let elCheckboxF = document.querySelector('.intro__checkbox');
let elCheckboxS = document.querySelector('.intro__checkbox-two');
let elCheckboxT = document.querySelector('.intro__checkbox-three');
let elCheckboxFF = document.querySelector('.intro__checkbox-four');
let elCheckboxFS = document.querySelector('.intro__checkbox-five');
let elCheckboxFT = document.querySelector('.intro__checkbox-six');
let createLiF = document.createElement('li');
let createLiS = document.createElement('li');
let createLiT = document.createElement('li');
let createLiFF = document.createElement('li');
let createLiFS = document.createElement('li');
let createLiFT = document.createElement('li');
let pomidor = 'Pomidor';
let kurka = 'Kurka goshti';
let zaytun = 'Zaytun';
let tuzlanganBodiring = 'Tuzlangan bodiring';
let qoziqorin = 'Qoziqorin';
let qazi = 'Qazi';

elCheckboxF.addEventListener('change', function(event){
  event.preventDefault();

  if (elCheckboxF.checked == true) {
    createLiF.textContent = pomidor;
    elList.appendChild(createLiF);
  } else if (elCheckboxF.checked == false) {
    elList.removeChild(createLiF);
  };
});

elCheckboxS.addEventListener('change', function(event){
  event.preventDefault();

  if (elCheckboxS.checked == true) {
    createLiS.textContent = kurka;
    elList.appendChild(createLiS);
  } else if (elCheckboxS.checked == false) {
    elList.removeChild(createLiS);
  };
});

elCheckboxT.addEventListener('change', function(event){
  event.preventDefault();

  if (elCheckboxT.checked == true) {
    createLiT.textContent = zaytun;
    elList.appendChild(createLiT);
  } else if (elCheckboxT.checked == false) {
    elList.removeChild(createLiT);
  };
});

elCheckboxFF.addEventListener('change', function(event){
  event.preventDefault();

  if (elCheckboxFF.checked == true) {
    createLiFF.textContent = tuzlanganBodiring;
    elList.appendChild(createLiFF);
  } else if (elCheckboxFF.checked == false) {
    elList.removeChild(createLiFF);
  };
});

elCheckboxFS.addEventListener('change', function(event){
  event.preventDefault();

  if (elCheckboxFS.checked == true) {
    createLiFS.textContent = qoziqorin;
    elList.appendChild(createLiFS);
  } else if (elCheckboxFS.checked == false) {
    elList.removeChild(createLiFS);
  };
});

elCheckboxFT.addEventListener('change', function(event){
  event.preventDefault();

  if (elCheckboxFT.checked == true) {
    createLiFT.textContent = qazi;
    elList.appendChild(createLiFT);
  } else if (elCheckboxFT.checked == false) {
    elList.removeChild(createLiFT);
  };
});


let elFormCheckboxinfo = document.querySelector('.info__form');
let elListinfo = document.querySelector('.results__list-info');
let elCheckbox = document.querySelector('.info__checkbox');
let elCheckboxtwo = document.querySelector('.info__checkbox-two');
let create = document.createElement('li');
let createtwo = document.createElement('li');
let Achchiq = 'Achchiq';
let Sosiskali = 'Sosiskali';

elCheckbox.addEventListener('change', function(event){
  event.preventDefault();

  if (elCheckbox.checked == true) {
    create.textContent = Achchiq;
    elListinfo.appendChild(create);
  } else if (elCheckbox.checked == false) {
    elListinfo.removeChild(create);
  }
});

elCheckboxtwo.addEventListener('change', function(event){
  event.preventDefault();

  if (elCheckboxtwo.checked == true) {
    createtwo.textContent = Sosiskali;
    elListinfo.appendChild(createtwo);
  } else if (elCheckboxtwo.checked == false) {
    elListinfo.removeChild(createtwo);
  }
});