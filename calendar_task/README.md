# Calendar Task

Completed test covering the following functionality:

- Undeliverable days (Tues, Fri and Sat) are non selectable
- Clicking on button will open a modal with a calendar view
- Clicking 'change date' button will update the delivery date
- Clicking 'cancel, don't change' button will not make any changes to delivery date
- Calendar icon updates to show selected date on close of modal

After deliberating between using a package for the calendar (such as ![react-calendar](https://github.com/wojtekmaj/react-calendar)) or making a calendar from scratch, I opted for making the calendar from scratch, as I felt this would be the more flexible option and the easiest to extend upon. Due to time constraints, I took the decision to only display the current month in the modal, and not allow a user to flick back and forth between months. Given more time, I would extend the calendar to show future months (previous months are less relevant as delivery cannot be made to past dates!). Today's date is never available for delivery - only future dates that are also deliverable dates (Mon, Wed, Thurs and Sun). Dates in the past have also been made non selectable.

Other future improvements:

- Styling: improve styling mainly of principle button, but also modal.
- Accessibility: hover has been added to buttons inside the modal and the selectable dates, but I would have liked to check colour contrasts to make sure they meet WCAG guidelines. Also check that modal and dates are fully accessible to a screen reader.
- Tests: one test checking overall functionality, but given more time I would test my util functions as well.  

## Getting started

To get started with the task, ensure you have both `node` and `yarn` installed locally on your machine and both commands are available to be called.

1. Install the required dependencies with `yarn install`
2. Start the development server by running `yarn start`
3. Once the server starts successfully, you should be able to view the task on `http://localhost:3000/`
