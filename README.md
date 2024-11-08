# Responsive Sign-Up Form with React & Tailwind CSS

This project is a simple, responsive sign-up form built with React, using `react-hook-form` for form validation and Tailwind CSS for styling. It provides a minimalistic and clean UI for users to enter their information and claim a free trial.

## Demo

You can see the live demo of this project by clicking the link below:

[Live Demo](https://candid-bienenstitch-7c445c.netlify.app)

## Features

- **Responsive Layout**: The form and surrounding elements adjust to different screen sizes, providing an optimal user experience on both desktop and mobile devices.
- **Form Validation**: `react-hook-form` is used to handle form validation, ensuring required fields are filled and displaying error messages if they are not.
- **Custom Styling**: Tailwind CSS classes are used throughout, giving the form a modern look with custom colors, spacing, and font styling.
- **Error Handling**: Error messages display dynamically below each input if the user submits incomplete information.

## Components

- **Username, Lastname, Email, Password Fields**: Basic input fields with real-time validation. Email and password have additional validation rules to ensure they meet required formats and lengths.
- **Submit Button**: A prominent button for users to claim their free trial, which handles submission via `onSubmit` handler.
- **Terms and Services Link**: A small footer message with a link to Terms and Services, styled to match the form.

## Getting Started

1. **Install Dependencies**: Run `npm install` to install all required packages.
2. **Run the App**: Use `npm start` to start the development server.
3. **Customize**: Adjust form fields or validation rules within the `Inputs` type or `register` methods as needed.

## Dependencies

- **React**
- **react-hook-form**
- **Tailwind CSS**

## License

Feel free to use and modify this code.
