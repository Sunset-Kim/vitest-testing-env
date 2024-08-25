import { useForm } from "react-hook-form";
import { TextField } from "../components/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "../lib/schema/login-schema";

export function LoginForm() {
  const {
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
  });

  return (
    <form>
      <TextField
        label="Email"
        type="email"
        descriptionMessage="이메일 주소를 입력해주세요."
        error={errors.email?.message}
        {...register("email")}
      />
      <TextField
        label="Password"
        type="password"
        descriptionMessage="6자 이상의 비밀번호를 입력해주세요."
        error={errors.password?.message}
        {...register("password")}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
