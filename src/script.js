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

      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;

      const airtableToken =
        "pat2hpsKD21jbX5ha.4185a7144737e4570e8ac1fa5b7a18fc7b0816d8279088aec15b5a598cd51810";
      const airtableBaseId = "appC1goKaYTRIqSSB";
      const airtableTableName = "Enquiries";

      const data = {
        fields: {
          Name: name,
          Email: email,
          Message: message,
        },
      };

      axios
        .post(
          `https://api.airtable.com/v0/${airtableBaseId}/${airtableTableName}`,
          data,
          {
            headers: {
              Authorization: `Bearer ${airtableToken}`,
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          alert("Thanks for your message! I will get back to you soon.");
          location.reload();
        })
        .catch((error) => {
          alert(
            "There was an error submitting your enquiry. Please try again."
          );
          console.error(error);
        });
    });
});

// pat2hpsKD21jbX5ha.4185a7144737e4570e8ac1fa5b7a18fc7b0816d8279088aec15b5a598cd51810
