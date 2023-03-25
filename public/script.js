const icons = document.querySelectorAll(".social-icon");
const tooltip = document.querySelectorAll(".tooltip");
const socialRemove = document.querySelector("#social-remove");
const socialPlatform = document.querySelector("#social-platform");
const card = document.querySelector("#card");

for (let i = 0; i < icons.length; ++i) {
  icons[i].addEventListener("mouseover", () => {
    for (let j = 0; j < icons.length; ++j) {
      tooltip[j].classList.remove("hover-active");
    }
    tooltip[i].classList.add("hover-active");
  });
}
for (let i = 0; i < icons.length; ++i) {
  icons[i].addEventListener("mouseleave", () => {
    tooltip[i].classList.remove("hover-active");
  });
}
for (let i = 0; i < icons.length; ++i) {
  icons[i].addEventListener("click", () => {
    for (let j = 0; j < icons.length; ++j) {
      icons[j].classList.remove("click-active");
      icons[j].classList.add("click-inactive");
    }
    icons[i].classList.remove("click-inactive");
    icons[i].classList.add("click-active");
    const selectedIcon = icons[i].getAttribute("id");
    const selectedColor = icons[i].classList[1];
    socialPlatform.setAttribute("src", "images/" + selectedIcon + ".png");
    socialPlatform.setAttribute("alt", selectedIcon);
    card.style.borderTop = "10px solid #" + selectedColor;
    card.style.borderBottom = "10px solid #" + selectedColor;
  });
}

const right = document.getElementById("right");
const darkLightCheckbox = document.getElementById("checkbox");

socialRemove.addEventListener("click", () => {
  icons.forEach((icon) => {
    icon.classList.remove("click-active");
    icon.classList.remove("click-inactive");
  });
  socialPlatform.setAttribute("src", "");
  socialPlatform.setAttribute("alt", "");
  if (darkLightCheckbox.checked) {
    card.style.borderTop = "10px solid #eeeeee";
    card.style.borderBottom = "10px solid #eeeeee";
  } else {
    card.style.borderTop = "10px solid #222831";
    card.style.borderBottom = "10px solid #222831";
  }
});

const dpRemove = document.querySelector("#dp-remove");
const changeDP = document.querySelector("#change-dp");
const DP = document.querySelector("#dp");
dpRemove.addEventListener("click", () => {
  changeDP.value = "";
  DP.setAttribute("src", "images/person.png");
});
changeDP.addEventListener("change", function () {
  const chosedImage = this.files[0];
  if (chosedImage) {
    const reader = new FileReader();
    reader.addEventListener("load", function () {
      DP.setAttribute("src", reader.result);
    });
    reader.readAsDataURL(chosedImage);
  }
});

function changeName(name) {
  document.querySelector(".name-username h3").innerHTML = name.value;
}
function changeUsername(name) {
  document.querySelector(".name-username p span").innerHTML = name.value;
}
function changeContent(content) {
  document.querySelector(".card-content p").innerHTML = content.value;
}

function boxChecked() {
  if (darkLightCheckbox.checked) {
    right.style.backgroundImage =
      "linear-gradient(to bottom right,rgb(110, 110, 110),rgb(20, 20, 20))";
    card.style.boxShadow = "10px 10px 10px rgb(20, 20, 20)";
    card.style.backgroundColor = "#222831";
    card.style.color = "#eeeeee";
    DP.style.boxShadow = "1px 1px 5px #eeeeee";
    let flag = false;
    icons.forEach((icon) => {
      if (icon.classList.contains("click-active")) {
        flag = true;
      }
    });
    if (!flag) {
      card.style.borderTop = "10px solid #eeeeee";
      card.style.borderBottom = "10px solid #eeeeee";
    }
  } else {
    right.style.backgroundImage =
      "linear-gradient(to bottom right,rgb(220, 220, 220),rgb(130, 130, 130))";
    card.style.boxShadow = "10px 10px 10px rgb(130, 130, 130)";
    card.style.backgroundColor = "#eeeeee";
    card.style.color = "#222831";
    DP.style.boxShadow = "1px 1px 5px #222831";
    let flag = false;
    icons.forEach((icon) => {
      if (icon.classList.contains("click-active")) {
        flag = true;
      }
    });
    if (!flag) {
      card.style.borderTop = "10px solid #222831";
      card.style.borderBottom = "10px solid #222831";
    }
  }
}

const downloadBtn = document.querySelector("#download-btn");
downloadBtn.addEventListener("click", () => {
  const right = document.querySelector("#right");
  html2canvas(right).then(function (canvas) {
    canvas.toBlob(function (blob) {
      saveAs(blob, "my-post.png");
    });
  });
});
