# James Hall's Portfolio

[--Click here to visit the website--](https://impossible-box.vercel.app/)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

---

![portfolio](https://user-images.githubusercontent.com/95545311/162567337-41ca99e6-ebc4-40fc-a240-a853e0d85dfb.gif)

---

## How it works

I modeled the four elements inside the box and created their textures using a process called baking in Blender.
To create the effect,I converted the textures into three-fiber shaders that decides if we display the elements or not. This GLSL (close to C) language shaders lets you detect if one of the faces of the box is between camera and the textures. For each polygon of the model, we will therefore check through which side it is viewed so that we can display it or not. This way, you create an "impossible" effect where elements appear only when viewed from specific angles.

Click here to see more --->[ The line segment intersection algorithm by Bryce Boe](https://bryceboe.com/2006/10/23/line-segment-intersection-algorithm/).

The website is made with material ui and the contact form with email.js API.
