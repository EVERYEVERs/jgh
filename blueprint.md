# Project Blueprint

## Overview

A simple web application with theme toggling functionality.

## Current State

The application has a basic HTML structure, CSS styling, and JavaScript for dynamic behavior. It does not currently have a theme-switching feature.

## Plan: Dark/Light Mode Toggle

1.  **HTML:** Add a toggle button to `index.html` to allow users to switch between themes.
2.  **CSS:**
    *   Refactor `style.css` to use CSS variables for colors.
    *   Define two color palettes: one for light mode (default) and one for dark mode (applied via a `data-theme` attribute).
3.  **JavaScript:**
    *   In `main.js`, implement the logic for the toggle button.
    *   On click, toggle a `data-theme` attribute on the `<body>`.
    *   Use `localStorage` to save the user's theme preference.
    *   On page load, apply the saved theme.
4.  **Deployment:**
    *   Commit the changes with a descriptive message.
    *   Push the new feature to the GitHub repository.