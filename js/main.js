const wrapper = document.querySelector(".wrapper");
const registerLink = document.querySelector(".register-link");
const loginLink = document.querySelector(".login-link");

registerLink.addEventListener("click", (e) => {
  e.preventDefault();
  wrapper.classList.add("active");
});

loginLink.addEventListener("click", (e) => {
  e.preventDefault();
  wrapper.classList.remove("active");
});

const registerForm = document.querySelector(".form-box.register form");
registerForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = registerForm.querySelector("input[type='text']").value;
  const email = registerForm.querySelector("input[type='email']").value;
  const password = registerForm.querySelector("input[type='password']").value;
  const confirmPassword = registerForm.querySelector("#confirm-password").value;

  if (password === confirmPassword) {
    const userData = {
      username: username,
      email: email,
      password: password,
    };

    localStorage.setItem("userData", JSON.stringify(userData));

    alert("Conta criada com sucesso!");
    wrapper.classList.remove("active");
  } else {
    alert("As senhas não coincidem. Tente novamente.");
  }
});

const loginForm = document.querySelector(".form-box.login form");
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = loginForm.querySelector("input[type='text']").value;
  const password = loginForm.querySelector("input[type='password']").value;

  const storedData = JSON.parse(localStorage.getItem("userData"));

  if (
    storedData &&
    storedData.username === username &&
    storedData.password === password
  ) {
    alert("Login bem-sucedido!");
    window.location.href = "home.html";
  } else {
    alert("Usuário ou senha incorretos. Tente novamente.");
  }
});
