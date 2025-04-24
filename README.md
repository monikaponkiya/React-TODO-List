# TODO APP

A simple and responsive TODO List app built with **React**, **TypeScript**, and **Ant Design**. It supports task creation, status change, filtering, pagination, and deletion, with API integration.

### Features

- Add new todos
- View todos in a styled table (Ant Design)
- Toggle status via checkbox with confirmation
- Green tag for Completed, Yellow tag for Pending
- Filter todos (All, Completed, Pending)
- Pagination with page state handling
- Displays "No records found" when list is empty

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Ant Design](https://ant.design/)
- [DummyJSON API](https://dummyjson.com/) (or any backend)

### Creating the Project with React + TypeScript + Vite

1. Clone the repository

```js
git clone https://github.com/monikaponkiya/React-TODO-List
```

2. Navigate to the project directory:

```js
cd React-TODO-List
```

3. Install dependencies:

```js
npm install
```

### Running the Application

To start the development server:

```js
npm run dev
```

The application will be available at http://localhost:5173

## Environment Variable Configuration

Create a `.env` file in the root directory and configure the following:

```js
VITE_REACT_APP_BASE_URL = https://dummyjson.com/todos
```
## Project Structure

```js
src/
├── pages/
│   ├── add-TODO            # Input form to add todos
│   ├── app-TODO.tsx        # Table with todos
│   |── filter-TODO.tsx     # Status filter dropdown
│   |── item-TODO.tsx       # Each item
│   └── list-TODO.tsx       # list of TODOS
|
├── util/
│   ├── type.ts             # TypeScript types
│   └── constant.ts         # Constant for Todo
│   └── todo-api.ts         # API methods (add, get, delete)
└── App.tsx                 # Main entry
```

## Additional Assessments

This repository also includes two additional scripts inside the `assessments/` folder:

- `DSA.js` – Solution to the DSA assignment.
- `mongodb-aggregate.js` – Script for MongoDB database operations.

Please navigate to the [assessments](./assessments) folder to view them.