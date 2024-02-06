// Pop-up buttons sizes


const formround = document.getElementById('round');
const formemerald = document.getElementById('emerald');
const formpear = document.getElementById('pear');
const formoval = document.getElementById('oval');
const formmarquise = document.getElementById('marquise');
const formemeraldsquare = document.getElementById('emeraldsquare');
const formcushion = document.getElementById('cushion');


const btnr = document.getElementById('btn-round');
btnr.addEventListener('click', () => {

  if (formround.style.display === 'none') {
    // 👇️ this SHOWS the form
    formround.style.display = 'flex';
  } else {
    // 👇️ this HIDES the form
    formround.style.display = 'none';
  }
  formemerald.style.display = 'none';
  formpear.style.display = 'none';
  formoval.style.display = 'none';
  formmarquise.style.display = 'none';
  formemeraldsquare.style.display = 'none';
  formcushion.style.display = 'none';
});


const btnem = document.getElementById('btn-emerald');
btnem.addEventListener('click', () => {

  if (formemerald.style.display === 'none') {
    // 👇️ this SHOWS the form
    formemerald.style.display = 'flex';
  } else {
    // 👇️ this HIDES the form
    formemerald.style.display = 'none';
  }
  formround.style.display = 'none';
  formpear.style.display = 'none';
  formoval.style.display = 'none';
  formmarquise.style.display = 'none';
  formemeraldsquare.style.display = 'none';
  formcushion.style.display = 'none';
});


const btnp = document.getElementById('btn-pear');
btnp.addEventListener('click', () => {

  if (formpear.style.display === 'none') {
    // 👇️ this SHOWS the form
    formpear.style.display = 'flex';
  } else {
    // 👇️ this HIDES the form
    formpear.style.display = 'none';
  }
  formround.style.display = 'none';
  formemerald.style.display = 'none';
  formoval.style.display = 'none';
  formmarquise.style.display = 'none';
  formemeraldsquare.style.display = 'none';
  formcushion.style.display = 'none';
});


const btno = document.getElementById('btn-oval');
btno.addEventListener('click', () => {

  if (formoval.style.display === 'none') {
    // 👇️ this SHOWS the form
    formoval.style.display = 'flex';
  } else {
    // 👇️ this HIDES the form
    formoval.style.display = 'none';
  }
  formround.style.display = 'none';
  formemerald.style.display = 'none';
  formpear.style.display = 'none';
  formmarquise.style.display = 'none';
  formemeraldsquare.style.display = 'none';
  formcushion.style.display = 'none';
});


const btnmar = document.getElementById('btn-marquise');
btnmar.addEventListener('click', () => {

  if (formmarquise.style.display === 'none') {
    // 👇️ this SHOWS the form
    formmarquise.style.display = 'flex';
  } else {
    // 👇️ this HIDES the form
    formmarquise.style.display = 'none';
  }
  formround.style.display = 'none';
  formemerald.style.display = 'none';
  formoval.style.display = 'none';
  formpear.style.display = 'none';
  formemeraldsquare.style.display = 'none';
  formcushion.style.display = 'none';
});


const btnemsqr = document.getElementById('btn-emeraldsquare');
btnemsqr.addEventListener('click', () => {

  if (formemeraldsquare.style.display === 'none') {
    // 👇️ this SHOWS the form
    formemeraldsquare.style.display = 'flex';
  } else {
    // 👇️ this HIDES the form
    formemeraldsquare.style.display = 'none';
  }
  formround.style.display = 'none';
  formemerald.style.display = 'none';
  formoval.style.display = 'none';
  formmarquise.style.display = 'none';
  formpear.style.display = 'none';
  formcushion.style.display = 'none';
});


const btncus = document.getElementById('btn-cushion');
btncus.addEventListener('click', () => {

  if (formcushion.style.display === 'none') {
    // 👇️ this SHOWS the form
    formcushion.style.display = 'flex';
  } else {
    // 👇️ this HIDES the form
    formcushion.style.display = 'none';
  }
  formround.style.display = 'none';
  formemerald.style.display = 'none';
  formoval.style.display = 'none';
  formmarquise.style.display = 'none';
  formpear.style.display = 'none';
  formemeraldsquare.style.display = 'none';
});



// Pop-up buttons sizes

var btnss = document.getElementsByClassName("carats");
for (var i = 0; i < btnss.length; i++) {
    btnss[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active-carats");
    current[0].className = current[0].className.replace(" active-carats", "");
    this.className += " active-carats";
    });
};

// bottom nav stones

var liss = document.getElementsByClassName("li");
for (var i = 0; i < liss.length; i++) {
    liss[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active-li");
    current[0].className = current[0].className.replace(" active-li", "");
    this.className += " active-li";
    });
};