# Task Manager Application

This is a Task Manager application built using ReactJS. It allows users to manage their tasks by adding, editing, deleting, and marking tasks as completed. The application includes features like filtering tasks based on completion status and sorting tasks by priority or due date.

## Table of Contents

- [Components](#components)
- [Task Component Functionality](#task-component-functionality)
- [TaskForm Component](#taskform-component)
- [Features](#features)
- [UI Enhancements](#ui-enhancements)
- [State Management](#state-management)
- [Instructions to Run Locally](#instructions-to-run-locally)

## Components

1. **App Component**: The root component that renders the entire application.
2. **TaskForm Component**: Includes a form for adding or editing tasks.
3. **TaskList Component**: Displays the list of tasks.
4. **Task Component**: Represents each individual task item in the list.

## Task Component Functionality

- Displays task details including title, description, priority, due date, and completion status.
- Includes a checkbox to mark tasks as completed.
- Provides buttons to edit or delete tasks.

## TaskForm Component

- Includes input fields for task title, description, priority, and due date.
- Includes buttons for adding or editing tasks.
- Ensures proper error handling and validation for form inputs.

## Features

- Filtering tasks based on completion status (completed, pending).
- Sorting tasks by priority or due date.

## UI Enhancements

- Animations, transitions, or modern UI/UX practices to enhance user experience.

## State Management

- State is managed using React's useState and useEffect hooks within components.
- Context API is utilized for global state management if necessary.

## Instructions to Run Locally

To run this application locally, follow these steps:

1. **Clone the Repository**: Clone this repository to your local machine using:

    ```bash
    git clone <repository-url>
    ```

2. **Install Dependencies**: Navigate into the project directory and install the necessary dependencies using npm or yarn:

    ```bash
    cd task-manager-app
    npm install
    ```

    or

    ```bash
    cd task-manager-app
    yarn install
    ```

3. **Run the Application**: Once the dependencies are installed, start the development server:

    ```bash
    npm start
    ```

    or

    ```bash
    yarn start
    ```

4. **View in Browser**: Open your web browser and navigate to `http://localhost:3000` to view the Task Manager application.

5. **Use the Application**: You can now use the Task Manager application locally in your browser. Add, edit, delete, and mark tasks as completed as needed.
