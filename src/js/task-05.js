const inputElement = document.querySelector("#name-input")
const nemeOutputEl = document.querySelector("#name-output")
inputElement.addEventListener("input", (e) => {
    
    nemeOutputEl.textContent = e.target.value.length !==0 ? `${e.target.value}` : `Anonymous`;
})


