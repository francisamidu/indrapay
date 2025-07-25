// action.ts
"use server";

// Notice the import path is different from the client
import {
  ServerValidateError,
  createServerValidate,
} from "@tanstack/react-form/nextjs";
import { formOpts } from "./shared-code";
import { LoginSchema, SignupSchema } from "./validation";

// Create the server action that will infer the types of the form from `formOpts`
const loginServerValidate = createServerValidate({
  ...formOpts,
  onServerValidate: ({ value }) => {
    if (!LoginSchema.safeParse(value.password).success) {
      return "Server validation: A password must be at least 8 characters long, include uppercase, lowercase, number, and special character";
    }
    if (!LoginSchema.safeParse(value.email).success) {
      return "Server validation: An email must be at least 8 characters long, include uppercase, lowercase, number, and special character";
    }
  },
});
const signupServerValidate = createServerValidate({
  ...formOpts,
  onServerValidate: ({ value }) => {
    if (!SignupSchema.safeParse(value.password).success) {
      return "Server validation: A password must be at least 8 characters long, include uppercase, lowercase, number, and special character";
    }
    if (!SignupSchema.safeParse(value.email).success) {
      return "Server validation: An email must be at least 8 characters long, include uppercase, lowercase, number, and special character";
    }
  },
});

export async function loginAction(prev: unknown, formData: FormData) {
  try {
    const validatedData = await loginServerValidate(formData);
    console.log("validatedData", validatedData);
  } catch (e) {
    if (e instanceof ServerValidateError) {
      return e.formState;
    }

    // Some other error occurred while validating your form
    throw e;
  }
}

export default async function signupAction(prev: unknown, formData: FormData) {
  try {
    const validatedData = await signupServerValidate(formData);
    console.log("validatedData", validatedData);
  } catch (e) {
    if (e instanceof ServerValidateError) {
      return e.formState;
    }

    // Some other error occurred while validating your form
    throw e;
  }
}
