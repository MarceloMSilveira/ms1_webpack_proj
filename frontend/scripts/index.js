import callApi from "./callApi.js";
import checkName from "./checkName.js";

const theForm = document.querySelector('#the-form');
const callApiElement = document.querySelector('#call-api');
const currentYearElement = document.querySelector('#this-year');

//seting date to current year:
const currentYear = new Date().getFullYear();
currentYearElement.textContent = currentYear;

//calling external API
async function setTextUsingAPI() {
  const msgOfApi = await callApi();
  console.log(msgOfApi.msg);
  callApiElement.textContent = msgOfApi.msg;
}
setTextUsingAPI();

//dealing with submit
theForm.addEventListener('submit',(evt)=>{
  evt.preventDefault();
  const name = document.querySelector('#input-name').value;
  if (checkName(name)){
    alert('Membro da família do Gato!')
  } else {
    alert('Intruso(a)')
  }
});




