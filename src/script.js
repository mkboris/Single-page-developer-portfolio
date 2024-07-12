"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const validator = new window.JustValidate("#form");

  validator
    .addField("#name", [
      {
        rule: "required",
      },
      {
        rule: "minLength",
        value: 3,
      },
      {
        rule: "maxLength",
        value: 15,
      },
    ])
    .addField("#email", [
      {
        rule: "required",
      },
      {
        rule: "email",
      },
    ])
    .addField("#message", [
      {
        rule: "required",
      },
      {
        rule: "minLength",
        value: 5,
      },
    ])
    .onSuccess(function (event) {
      event.preventDefault();

      formSubmit(event.target);

      alert("Thanks for your message! I will get back to you soon.");
      location.reload();
    });
});

function formSubmit(form) {
  const formData = new FormData(form);

  fetch("https://getform.io/f/bnlelkmb", {
    method: "POST",
    body: formData,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
}
