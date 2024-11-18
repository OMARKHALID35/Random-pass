let generate = document.querySelector(".generate");
let serial = document.querySelector(".serial");

generate.onclick = function () {
  let characters =
    "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*";
  let charactersCount = 20;
  let randomSerial = "";
  for (i = 0; i < charactersCount; i++) {
    randomSerial += characters[Math.trunc(Math.random() * characters.length)];
  }
  //   let formattedString = randomSerial.match(/.{1,4}/g).join("_"); // تقسيم السلسلة وجمعها بعلامة -
  //   serial.textContent = formattedString;
  serial.textContent = randomSerial;
};
