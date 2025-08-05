import { z } from "zod";

export const emailSchema = z
  .string()
  .min(1, { message: "Email is required" })
  .email({ message: "Invalid email address" })
  .max(100, { message: "Email must be less than 100 characters" });

export const passwordSchema = z
  .string()
  .min(8, { message: "Password needs to be a least 8 characters long" })
  .max(20, { message: "Password should to be 20 characters long maximum" })
  .refine((password) => /[A-Z]/.test(password), {
    message: "Password needs to have at least 1 uppercase character",
  })
  .refine((password) => /[a-z]/.test(password), {
    message: "Password needs to have at least 1 lowercase character",
  })
  .refine((password) => /[0-9]/.test(password), {
    message: "Password needs to have at least 1 number",
  })
  .refine((password) => /[!@#$%^&*(),.?":{}|<>]/.test(password), {
    message: "Password needs to have at least 1 special character",
  });

export const LoginSchema = z.object({
  email: emailSchema,

  password: passwordSchema,
});

export type LoginSchemaType = z.infer<typeof LoginSchema>;

export const SignupSchema = z.object({
  agreeToTerms: z.boolean().refine((value) => value, {
    message: "You must agree to the terms and conditions",
  }),
  email: emailSchema,

  password: passwordSchema,
});

// Type inference for TypeScript
export type SignupSchemaType = z.infer<typeof SignupSchema>;

export const initialLoginFormState = {
  email: "invalid-email",
  password: "short",
};
// Optional: Form initial state
export const initialSignupFormState: SignupSchemaType = {
  email: "",
  password: "",
  agreeToTerms: false,
};
