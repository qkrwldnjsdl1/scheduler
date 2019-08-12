# Interview Scheduler

## Dependencies
- axios
- normalize.css
- react
- react-dom
- react-scripts


## Getting Started

- Fork this repository, then clone your fork of this repository.
- Also visit https://github.com/lighthouse-labs/scheduler-api for the database and fork the repository, then clone into the local machine
- You will need to run both repository on your terminal
- Install dependencies using the npm install command.
- Start the API server using the npm start local command.
- Start the web server using the npm start local command. The app will be served at http://localhost:3000.
- Go to http://localhost:3000 in your browser.



## Functions of the Scheduler are:

- Can create appointments on a specific day and time of a week
- Can choose the interviewers when creating the appointment
- Can edit the existing appointment
- Can delete the existing appointment
- Show errors upon errors
- Show how many spots are available in each day


## Final Product


**Here is the overview of the project. It has list of days and infomation about the existing appointments of days.**

!["screenshot description"](https://github.com/qkrwldnjsdl1/scheduler/blob/master/image/Overview.png)

**This is initial state of the form in the scheduler. When you click the (+) button it renders the form componenets**

!["screenshot description"](https://github.com/qkrwldnjsdl1/scheduler/blob/master/image/Empty.png)

**In here you can enter student name and select interviewer to create or edit new appointment or cancel by clicking the cancel button**
!["screenshot description"](https://github.com/qkrwldnjsdl1/scheduler/blob/master/image/Form.png)

**Once you saved the appointment it will render the infomation about the appointment.**

!["screenshot description"](https://github.com/qkrwldnjsdl1/scheduler/blob/master/image/Show.png)

**When you click the delete button, it will ask for confirmation**

!["screenshot description"](https://github.com/qkrwldnjsdl1/scheduler/blob/master/image/Confirm.png)

**And when you confirm for cancelation, it will delete the appointment and renders the empty component**

!["screenshot description"](https://github.com/qkrwldnjsdl1/scheduler/blob/master/image/Deleting.png)

**If there are any errors on saving or deleting the appointments, it will show error.**

!["screenshot description"](https://github.com/qkrwldnjsdl1/scheduler/blob/master/image/Error.png)

