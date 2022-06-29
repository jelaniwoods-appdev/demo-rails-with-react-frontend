import * as React from "react";
import * as ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client';
import { Editor } from './editor';


document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById('root');
    const root = createRoot(container);
    root.render(<Editor />);
});
