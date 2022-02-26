const user = [
  {
    email: "steve.jobs@example.com",
    password: "password",
  },
];
if (!localStorage.getItem("user"))
  localStorage.setItem("user", JSON.stringify(user));

const getByEmail = (email) =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(
        JSON.parse(localStorage.getItem("user")).some(
          (user) => user.email === email
        )
      );
    }, 1000);
  });

const getByPassword = (password) =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(
        JSON.parse(localStorage.getItem("user")).some(
          (user) => user.password === password
        )
      );
    }, 1000);
  });

export default {
  getByEmail,
  getByPassword,
};
