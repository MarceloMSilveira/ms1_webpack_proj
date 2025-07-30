export default function checkName(name) {
  const familia = ['Licia','Marcelo','Felipe','Eric','Toby'];
  if (familia.includes(name)) {
    return true;
  } else {
    return false;
  }
}