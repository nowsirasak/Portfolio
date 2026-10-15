import { render, screen } from "@testing-library/react";
import App from "./App";
import { profile } from "./data";

// jsdom has no IntersectionObserver / matchMedia; stub them for Framer Motion.
beforeAll(() => {
  window.IntersectionObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  };
  window.matchMedia =
    window.matchMedia ||
    (() => ({ matches: false, addListener() {}, removeListener() {}, addEventListener() {}, removeEventListener() {} }));
  window.scrollTo = () => {};
});

test("renders the hero headline", () => {
  render(<App />);
  expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(profile.headline);
});
