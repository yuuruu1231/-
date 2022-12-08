import React from 'react';
import ReactDOM from 'react-dom/client';
import TodoList from './TodoList';
// import APP from './APP';

import 'antd/dist/reset.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TodoList />
  </React.StrictMode>
);
