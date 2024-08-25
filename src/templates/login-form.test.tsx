import { render, screen, waitFor } from "@testing-library/react";
import { LoginForm } from "./login-form";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

const user = userEvent.setup();

function setup() {
  const { container } = render(<LoginForm />);

  const emailInput = screen.getByLabelText("Email");
  const passwordInput = screen.getByLabelText("Password");

  async function typeEmail(email: string) {
    const emailInput = screen.getByLabelText("Email");
    await user.type(emailInput, email);
  }

  async function typePassword(password: string) {
    const passwordInput = screen.getByLabelText("Password");
    await user.type(passwordInput, password);
  }

  return {
    container,
    emailInput,
    passwordInput,
    typeEmail,
    typePassword,
  };
}

describe("LoginForm", () => {
  it("Login Form이 정상적으로 렌더링 되어야 합니다.", () => {
    const { emailInput, passwordInput } = setup();

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });

  it("이메일 형식을 지키지 않으면 에러 메시지가 나와야 합니다.", async () => {
    const { typeEmail, emailInput } = setup();

    await typeEmail("invalid-email");

    waitFor(() => {
      expect(emailInput).toHaveAccessibleErrorMessage(
        "이메일 형식이 아닙니다."
      );
    });
  });

  it("비밀번호가 6자 미만이면 에러 메시지가 나와야 합니다.", async () => {
    const { typePassword, passwordInput } = setup();

    await typePassword("12345");

    waitFor(() => {
      expect(passwordInput).toHaveAccessibleErrorMessage(
        "비밀번호는 6자 이상이어야 합니다."
      );
    });
  });
});
