// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders AutoUnified title', () => {
    render(<App />);
    const titleElement = screen.getByText(/AutoUnified/i);
    expect(titleElement).toBeInTheDocument();
});
