import React from 'react';
import Dashboard from './components/Dashboard';


const App = () => {
  return (
    <div className="app">
      <div className="header">
        <h1>Student Dashboard</h1>
      </div>
      <Dashboard />
      {/* Render other components here if needed */}
    </div>
  );
};


export default App;

