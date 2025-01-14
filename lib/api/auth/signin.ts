import { User } from "@/types/user";

export interface LoginReq {
  email: string;
  password: string;
}

export interface LoginRes {
  token: string;
  user: User;
  error?: string;
}

const signin = async (body: LoginReq): Promise<LoginRes> => {
  const response = await fetch("/api/v1/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const data = response.json();

  return data;
};

export default signin;
