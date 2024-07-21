// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import Sidebar from './components/Sidebar';
import TemplatesPage from './pages/TemplatesPage';
import AddTemplatePage from './pages/AddTemplatePage';
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="app">
          <Sidebar />
          <div className="content">
            <Routes>
              <Route path="/templates" element={<TemplatesPage />} />
              <Route path="/addTemplate" element={<AddTemplatePage />} />
              <Route path="/" element={<TemplatesPage />} />
            </Routes>
          </div>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
