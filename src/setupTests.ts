// This file will run before all of our tests
// Import jest-dom for easier DOM tests: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";

// Unmount all mounted DOM elements
import { cleanup } from "@testing-library/react";
afterEach(cleanup);
