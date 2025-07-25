import type React from "react";
import { withTitle } from "../metadata";
import { SignUp } from "@/components/sign-up";
import { JSX } from "react";

export const metadata = {
  title: withTitle("Signup for an Indra account in 3 steps"),
  description:
    "Create your Indrapay account quickly and securely in just 3 steps.",
};

export default function SignupPage(): JSX.Element {
  return <SignUp />;
}
