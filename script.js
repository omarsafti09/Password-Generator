document.getElementById("submit").addEventListener("click", function (event) {
  event.preventDefault();
  let charachters =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_-=+";
  var password = "";
  for (let i = 0; i < 12; i++) {
    var charachter = charachters[Math.floor(Math.random() * 76)];
    password += charachter;
  }
  document.getElementById("password").value = password;
  website = document.getElementById("website").value;
  if (website === "") {
    alert("Enter a valid website");
  } else {
    localStorage.setItem(website, password);
  }
});
