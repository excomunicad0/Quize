import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './styles/index.css';
import './styles/reset.css';
import './styles/normalize.css';
import './styles/variables.css';

createRoot(document.getElementById('root')!).render(<App />);
