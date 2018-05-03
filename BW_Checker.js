function $(e) {return document.querySelector(e)}

const BadWords = /Fu*ck|As*ho*le*|Ass|Bi*tch|M*o*t*h*e*rf*u*c*k*er|Di*ck/gim;

const S = '&nbsp;&nbsp;&nbsp;&nbsp;';

function SearchBW() {
  var msg = $('#txt').value;
  var out = $('#out');
  
  msg = msg.replace(BadWords, '<censor>'+S+S+S+S+'</censor>');
  
  out.innerHTML = msg;
}
