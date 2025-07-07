# 📝 Todo List App

A simple Todo List built using **React**, **Tailwind CSS v4**, and **Atomic Design** principles. This app was developed as a task for a frontend interview for Alwasaet, focusing on clean architecture.

> ![Screenshot of the Site](https://github.com/NouranAlSharawneh/todoAlwasaet/blob/main/public/assets/Webapp.png)

Check out the app here: [https://todo-alwasaet.vercel.app/](https://todo-alwasaet.vercel.app/)

---

## Objective

To build a modern, responsive Todo List app with support for:

- Task creation, deletion filtering, and completion
- Modal-based task input
- Unit testing
- Clean and reusable UI components (Atomic Design)
- Bonus feature local storage persistence

---

## Technologies Used

| Layer         | Tech/Library                                |
| ------------- | ------------------------------------------- |
| Framework     | [React](https://reactjs.org/)               |
| Styling       | [Tailwind CSS v4](https://tailwindcss.com/) |
| State Storage | LocalStorage + React `useState`             |
| Testing       | [Jest](https://jestjs.io/)                  |
| Architecture  | Atomic Design Pattern                       |

---

## Thought Process

- **Atomic Design**: UI is broken into Atoms (buttons, inputs), Molecules (form fields), and Organisms (modal, task list).
- **Reusability**: Components needs to be modular and scalable.
- **UX**: Focus on minimal and intuitive interactions.

---

## Functional Requirements

- Create a new task via modal popup
- Assign category and color to task
- Filter tasks by status (All, Active, Completed)
- Swipe to delete a task
- Persist tasks in `localStorage`
- Mark task as complete (checkbox)
- Limit task text to 30 characters
- Responsive UI

---

## Non-Functional Requirements

- App must follow Atomic Design principles
- State must persist across reloads using `localStorage`
- Code must be modular, and testable
- Modal UX must not break flow
- Filter logic must be efficient
- Unit tests must cover core logic (using Jest)

---

## Folder Structure

A folder strurcture digram was created in **Lucidchart** to visualize the logical of breaking the componets down following the **Atomic Design architecture**.

> ![Folder Structure](https://github.com/NouranAlSharawneh/todoAlwasaet/blob/main/public/assets/FolderStructure.png)

## Low-Fidelity Design

A low-fidelity wireframe was sketched during the planning phase to outline the core layout and interactions. It captures:

- A clear Todo list UI with checkbox toggles
- A filter dropdown for task status
- A floating “Add Task” button that triggers a popup modal
- Modal with category selector, color picker, and input with a character limit

> ![Low Fidelity Sketch](https://github.com/NouranAlSharawneh/todoAlwasaet/blob/main/public/assets/sketch.png)  
> _(Sketch shows Todo layout, filters, popup design)_

This sketch helped me identify the component boundaries for the Atomic Design architecture.

---

## Flow Diagram

An Activity flow digram was created to visualize the logical flow of task creation, validation, filtering, task deletion, and UI state transitions.

> ![Flow Diagram](https://github.com/NouranAlSharawneh/todoAlwasaet/blob/main/public/assets/ActivityDigram.png)

### Flow Summary:

1. App loads and pulls tasks from localStorage
2. If no tasks exist → show empty state
3. Tasks display with status filtering (All / Active / Completed)
4. Modal opens to create task → input is validated
5. If valid, new task is saved and state is updated
6. User can mark a task as checked _(status completed)_, delete a task, and filter tasks.
7. Updated task list persists in `localStorage`

---

## Bonus part of the Task: Custom `useLocalStorage` Hook

As the bonus feature task, the app is going to uses a reusable custom hook to persist state in the browser's local storage. This feature will allow the Todo List Website maintain its state _(tasks list)_ across reloads without needing a backend or database.

```js
import { useState, useEffect } from "react";

export function useLocalStorage(key, defaultValue) {
  const [value, setValue] = useState(() => {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : defaultValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
```
