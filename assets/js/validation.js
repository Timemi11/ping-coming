let submitbtn = document.getElementById("submit");
var input = document.getElementById("input-submit");

function validation(text) {
  let errormassage = document.querySelector(".error-ms");
  if (input.value.trim().match(text)) {
    errormassage.style.display = "none";
    input.style.border = "1px solid hsl(223, 87%, 63%)";
  } else {
    input.style.border = "1px solid hsl(354, 100%, 66%)";
    errormassage.style.display = "block";
  }
}

submitbtn.onclick = (e) => {
  e.preventDefault();
  let regex = /([a-z]\w+[@]\w+\.(com|ac.th))/gi;
  validation(regex);
};
