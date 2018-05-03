function $(e) {return document.querySelector(e)}

const BadWords = /Fu*ck|As*ho*le*|Ass|Bi*tch|M*o*t*h*e*rf*u*c*k*er|Di*ck/gim;

function SearchBW() {
  var msg = $('#txt').value;
  var out = $('#out');
  
  msg = msg.replace(/\n/gim, '<br>');
  msg = msg.replace(BadWords, '<censor>**Censored**</censor>');
  
  out.innerHTML = msg;
}
