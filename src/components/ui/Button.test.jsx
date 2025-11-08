import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Button from '../components/ui/Button';

describe('Button Component', () => {
  it('renders children correctly', () => {
    render(
      <BrowserRouter>
        <Button>Click me</Button>
      </BrowserRouter>
    );
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('applies variant classes correctly', () => {
    const { container } = render(
      <BrowserRouter>
        <Button variant="primary">Primary</Button>
      </BrowserRouter>
    );
    const button = container.querySelector('button');
    expect(button).toHaveClass('bg-accent-600');
  });

  it('renders as link when "to" prop is provided', () => {
    render(
      <BrowserRouter>
        <Button to="/test">Go to test</Button>
      </BrowserRouter>
    );
    const link = screen.getByText('Go to test');
    expect(link.tagName).toBe('A');
  });

  it('renders disabled state correctly', () => {
    render(
      <BrowserRouter>
        <Button disabled>Disabled</Button>
      </BrowserRouter>
    );
    const button = screen.getByText('Disabled');
    expect(button).toHaveClass('opacity-50', 'cursor-not-allowed');
  });
});
