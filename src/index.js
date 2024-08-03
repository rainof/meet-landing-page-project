import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

const appData = {
  quote: "Group Chat for Everyone",
  description: "Meet makes it easy to connect with others face-to-face virtually and collaborate across any device.",
  download_button: "Download",
  download_version: "v1.3",
  what_button: "What is it?",
  section_1: "01",
  section_1_title: "Built for modern use",
  section_1_quote: "Smarter meetings, all in one place",
  section_1_description: "Send messages, share files, show your screen, and record your meetings — all in one workspace. Control who can join with invite-only team access, data encryption, and data export.",
  section_2: "02",
  section_2_title: "Experience more together",
  section_2_description: "Stay connected with reliable HD meetings and unlimited one-on-one and group video sessions."
}

root.render(
  <React.StrictMode>
    <App data={appData} />
  </React.StrictMode>
);

reportWebVitals();
