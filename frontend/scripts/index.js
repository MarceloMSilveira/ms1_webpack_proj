const theForm = document.querySelector('#the-form');
const currentYearElement = document.querySelector('#this-year');
const currentYear = new Date().getFullYear();
currentYearElement.textContent = currentYear;

async function setTextUsingAPI() {
  const msgOfApi = await callApi();
  console.log(msgOfApi.msg);
  callApiElement.textContent = msgOfApi.msg;
}

//calling API:
const callApiElement = document.querySelector('#call-api');

theForm.addEventListener('submit',(evt)=>{
  evt.preventDefault();
  const name = document.querySelector('#input-name').value;
  if (checkName(name)){
    alert('Membro da família do Gato!')
  } else {
    alert('Intruso(a)')
  }
  setTextUsingAPI();
});




