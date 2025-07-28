const familia = ['Licia','Marcelo','Felipe','Eric','Toby'];

function checkName(name) {
  if (familia.includes(name)) {
    return true;
  } else {
    return false;
  }
}