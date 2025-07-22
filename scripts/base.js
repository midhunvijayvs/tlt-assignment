
document.addEventListener("DOMContentLoaded", function () {
  const selectBox1 = document.querySelector(".select-box-1");
  const selected1 = selectBox1.querySelector(".selected");
  const textElement1 = selected1.querySelector(".text");
  const optionsBox1 = selectBox1.querySelector(".options-box");
  const allOptions1 = optionsBox1.querySelectorAll("li");

  const selectBox2 = document.querySelector(".select-box-2");
  const selected2 = selectBox2.querySelector(".selected");
  const textElement2 = selected2.querySelector(".text");
  const optionsBox2 = selectBox2.querySelector(".options-box");
  const allOptions2 = optionsBox2.querySelectorAll("li");

  // Toggle dropdown
  selected1.addEventListener("click", function (e) {
    selectBox1.classList.toggle("open");
  });

  selected2.addEventListener("click", function (e) {
    selectBox2.classList.toggle("open");
  });

  // Select option
  allOptions1.forEach((option, index) => {
  option.addEventListener("click", function () {
    if (index >= 0 && index <= 2) {
      textElement1.textContent = "Specialist (" + this.textContent + ")";
    } else {
      textElement1.textContent = "Others (" + this.textContent + ")";
    }
    selectBox1.classList.remove("open");
  });
});


  allOptions2.forEach(option => {
    option.addEventListener("click", function () {
      textElement2.textContent = this.textContent;
      selectBox2.classList.remove("open");
    });
  });

  // Close on outside click
  document.addEventListener("click", function (e) {
    if (!selectBox1.contains(e.target)) {
      selectBox1.classList.remove("open");
    }
  if (!selectBox2.contains(e.target)) {
      selectBox2.classList.remove("open");
    }
  });
});



