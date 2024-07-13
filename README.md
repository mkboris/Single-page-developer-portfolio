# Frontend Mentor - Single-page developer portfolio solution

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Receive an error message when the `form` is submitted if:
  - Any field is empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: Hook the form up so it sends and stores the user's enquiry (you can use a spreadsheet or Airtable to save the enquiries)
- **Bonus**: Add your own details (image, skills, projects) to replace the ones in the design

### Screenshot

![](./design/preview.jpg)

### Links

- [Solution](https://github.com/mkboris/Single-page-developer-portfolio)
- [Live Site](https://single-page-developer-portfolio-rosy.vercel.app/)

### Built with

- Tailwind CSS
- JustValidate
- Getform
- Zapier
- Airtable

### What I learned

The design was fairly straightforward and didn't require much thought. I had a little struggle placing the rings background pattern not knowing the best approach on where to place it precisely either on the body or the within specific element container and preventing it shifting the whole layout and causing unwanted overflows. I manage to place them somehow wrestling a lot with figures. I'm still seeking a more effective approach to handle this moving forward.

So far, when building forms, I haven't typically received and stored the submitted data. With this project I used Getform to handle form submissions, integrating it with Zapier to automatically send the data to my Airtable base and table successfully whenever the form is submitted. Additionally, I used a library for form validation this time, and it worked really well.

## Author

- Frontend Mentor - [@mkboris](https://www.frontendmentor.io/profile/mkboris)
