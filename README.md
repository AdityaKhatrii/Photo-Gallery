# Unsplash Photo Gallery Application

## Description
This is a responsive photo gallery application built with React that fetches and displays high-quality images from the Unsplash API. The application features infinite scrolling, allowing users to discover an endless stream of beautiful photographs. Users can view the photographer's name below each image, and the app handles loading states and errors gracefully.

## Live Demo
You can view the live application [here](https://unsplash-photo-galleryy.netlify.app/).

## Features
- **Responsive Design**: Adjusts to different screen sizes, displaying 1-2 columns on small screens and 3-4 columns on larger screens.
- **Infinite Scrolling**: Automatically loads more photos as the user scrolls down.
- **Error Handling**: Displays an error message if the API request fails.
- **Loading Indicator**: Shows a spinner while new images are being fetched.

## Technologies Used
- **React**: JavaScript library for building user interfaces.
- **Axios**: Promise-based HTTP client for making requests to the Unsplash API.
- **Unsplash API**: Provides access to a vast library of high-quality images.
- **CSS**: For styling the application.

## Installation
To run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/photo-gallery-app.git
   cd photo-gallery-app
   npm install
   VITE_UNSPLASH_ACCESS_KEY=your_access_key_here
   npm run dev
   
- **Usage**: Once the application is running, you can scroll down to load more photos automatically. Each photo displays the image along with the photographer's name.
  
- **Contributing**: This project is licensed under the MIT License - see the LICENSE file for details.
  
- **Acknowledgments**: Thanks to Unsplash for providing high-quality images.