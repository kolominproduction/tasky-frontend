import { createRoot } from 'react-dom/client';

import { App } from './app/App';

const root = document.getElementById('root');
const container = createRoot(root as HTMLElement);
container.render(<App />);
