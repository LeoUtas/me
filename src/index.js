import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

// Create a root.
const container = document.querySelector('#root');
const root = createRoot(container);
root.render(<App tab="home" />);
