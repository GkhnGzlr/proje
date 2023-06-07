const inputIncome = document.getElementById("add-income");
const inputAddButton = document.getElementById("button-addon2");
const expencesType = document.getElementById("choose");
const dateTime = document.getElementById("date-time");
const amount = document.getElementById("amount");
const saveButton = document.getElementById("save");

const jSonArr = [];

inputAddButton.addEventListener("click", () => {});

saveButton.addEventListener("click", () => {
  let jsonObj = {
    dt: dateTime.value,
    exp: expencesType.value,
    amnt: amount.value,
  };
  jSonArr.push(jsonObj);
});
console.log(jSonArr);