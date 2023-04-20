import { cleanup, render } from "@testing-library/react";
import UserDetails from "../UserDetails";

afterEach(cleanup);

// Syntax
// it("what work is it doing", () => {})

it("should show Username in user details section", () => {
  const { getByTestId } = render(<UserDetails />);

  const userName = getByTestId("user-name");
  expect(userName).toBeTruthy();
});

it("should show user email in user details section", () => {
  const { getByTestId } = render(<UserDetails />);

  const userEmail = getByTestId("user-email");
  expect(userEmail).toBeTruthy();
});
