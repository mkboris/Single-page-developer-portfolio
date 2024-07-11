"use strict";

document.addEventListener("DOMContentLoaded", function () {
  //   const validate = new window.JustValidate('#form');
  const validator = new window.JustValidate("#basic_form");

  validator
    .addField("#basic_name", [
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
    .addField("#basic_email", [
      {
        rule: "required",
      },
      {
        rule: "email",
      },
    ])

    .addField("#basic_message", [
      {
        rule: "required",
      },
      {
        rule: "minLength",
        value: 5,
      },
    ]);

  location.reload();
});
