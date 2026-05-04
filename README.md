# Where's Waldo

A browser-based "Where's Waldo" game built as part of The Odin Project. The goal is to find hidden characters within an image as quickly as possible.

## Overview

Live Link: https://memory-game-zre1.vercel.app/

This project focuses on handling user interaction with images, tracking click positions, and validating selections. It emphasizes working with coordinates, state management, and dynamic UI updates.

## Tech Stack

Frontend
- React
- JavaScript
- HTML
- CSS

Backend
- Node.js
- Express
- Database (for storing character positions and scores)

## Features

- Click-based character detection on an image
- Position validation system
- Timer to track completion time
- Score tracking and leaderboard

## How It Works

The user clicks on the image to locate a character. The app captures the click coordinates and sends them to the backend, which checks if the selection is within an acceptable range of the target character’s position. The game continues until all characters are found.

## Project Context

Built as part of The Odin Project curriculum to practice full-stack development, including frontend interaction and backend validation.
