import { withTitle } from "../metadata";
import { SignIn } from "@/components/sign-in";
import { JSX } from "react";

export const metadata = {
  title: withTitle("Sign in to your Indrapay account"),
  description:
    "Sign in to manage your Indrapay account, access your dashboard, and handle cross-border payments securely.",
};

export default function SigninPage(): JSX.Element {
  return <SignIn />;
}
