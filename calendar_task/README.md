# Calendar Task

Completed test covering the following functionality:

- Undeliverable days (Tues, Fri and Sat) are non selectable
- Clicking on button will open a modal with a calendar view
- Clicking 'change date' button will update the delivery date
- Clicking 'cancel, don't change' button will not make any changes to delivery date
- Calendar icon updates to show selected date on close of modal

After deliberating between using a package for the calendar (such as [react-calendar](https://github.com/wojtekmaj/react-calendar)) or making a calendar from scratch, I opted for making the calendar from scratch, as I felt this would be the more flexible option and the easiest to extend upon. Due to time constraints, I took the decision to only display the current month in the modal, and not allow a user to flick back and forth between months. Given more time, I would extend the calendar to show future months (previous months are less relevant as delivery cannot be made to past dates!). Today's date is never available for delivery - only future dates that are also deliverable dates (Mon, Wed, Thurs and Sun). Dates in the past have also been made non selectable. 

The calendar currently on the Butternut Box site updates the delivery date the moment a user selects a different date (see video below) - this calendar does not have the functionality, and the user must press 'change date' for the delivery date to update. 

https://user-images.githubusercontent.com/36238916/210087175-45c38c41-cdb5-435b-b82a-1cf72cf59a71.mov

Other future improvements:

- Styling: improve styling mainly of principle button, but also modal.
- Accessibility: hover has been added to buttons inside the modal and the selectable dates, but I would have liked to check colour contrasts to make sure they meet WCAG guidelines. Also check that modal and dates are fully accessible to a screen reader.
- Tests: one test checking overall functionality, but given more time I would test my util functions as well.  
- More fun! Add animations, colour and creativity.
- Add a close 'x' button to the modal, and also allow closing when clicking on the overlay. 

## Getting started

To get started with the task, ensure you have both `node` and `yarn` installed locally on your machine and both commands are available to be called.

1. `cd calendar_task` 
2. Install the required dependencies with `yarn install`
3. Start the development server by running `yarn start`
4. Once the server starts successfully, you should be able to view the task on `http://localhost:3000/`

## Technical Requirements

To be able to build the task, ensure your local Node and Yarn versions match the current supported version requirements:

- Node >= v14.17.0
- Yarn >= v1.22

To easily control your `node` version and easily switch between them, we recommend installing [NVM](https://github.com/nvm-sh/nvm) and using that to install and easily switch to a different version.

You can find out your current Node version by running `node --version` in your terminal.
