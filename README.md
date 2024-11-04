Raster Interaction

This application enables the user to interact with the individual cells in the raster grid via a vertical list view, toggling their visibility on the image.

Interaction Overview

When a user hovers over an item in the vertical list on the left side, the corresponding grid cell on the right side becomes highlighted, providing a visual indication of the interaction.

when an item in the vertical list is clicked, the associated grid cell toggles its visibility. This functionality allows users to dynamically show or hide specific cells, enhancing interactivity and user engagement.

Interaction Logic

Event Handling

Mouse Events:

- On onMouseEnter, the component updates its state to apply the highlight effect. This is achieved by setting a state variable 
  (e.g., isHovered) to true.
- On onMouseLeave, the state is reset, removing the highlight effect.

State Management:

Redux Integration:

- Each cell’s visibility state (e.g., visible or hidden) is managed using Redux. The cellVisibilitySlice handles actions to toggle the  visibility state of cells when they are clicked.
- The toggleCell action creator is dispatched in response to the onClick event, updating the Redux store and triggering a re-render of affected components.

The component re-renders based on updated states, applying relevant styles conditionally.

This project is built using React and Typescript
Styling is done using CSS modules

Run Locally

Clone the project

https://github.com/Pavithra-Bhanumoorthy/Raster-Interaction.git


Install dependencies

npm install

Start the development server

npm run dev

Running Tests

To run tests, run the following command

npm run test