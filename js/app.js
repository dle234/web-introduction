const submitButton = document.querySelector(".submit-button");
const nameInput = document.querySelector(".input-name");
const checkBoxes = document.querySelectorAll(".checkbox");

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  name = nameInput.value;

  let number = 0;

  checkBoxes.forEach(function (checkbox) {
    if (checkbox.checked) {
      number++;
    }
  });

  submitMyTaste(name, number);
});

const submitMyTaste = (name, number) => {
  if (name === "") {
    alert("이름을 입력해주세요");
    return;
  }
  alert(`${name} 님 저와 ${number} 개의 취향이 일치하네요!`);
};
