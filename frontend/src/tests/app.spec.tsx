import '@testing-library/jest-dom'
import App from '../App';
import { render } from "@testing-library/react";

test("renders the App component", () => {
  render(<App />)
  expect(true).toBeTruthy();
});

