// src/lib/auth.ts
import { api, tokenStorage } from "./apiClient";

type SignInResponse = {
  accessToken: string;
  refreshToken?: string;
  expiresIn?: number;
  user: { id: string; email: string }; // adapt to your user shape
};

/**
 * Sign in using email/password
 */
export async function signInWithEmail(email: string, password: string) {
  const response = await api.post("sign-in", {
    json: { email, password },
  });

  const data = (await response.json()) as SignInResponse;
  await (async () => {
    // store tokens after receiving them
    await tokenStorage.setToken(data.accessToken);
  })();

  return data.user;
}

/**
 * Sign up a new user
 */
export async function signUpUser(email: string, password: string) {
  const response = await api.post("sign-up", {
    json: { email, password },
  });

  const data = (await response.json()) as SignInResponse;

  await tokenStorage.setToken(data.accessToken);
  return data.user;
}

/**
 * Sign in via OAuth provider
 *
 * - `provider` might be 'google', 'github', etc.
 * - `code`, `state` are things you got from the OAuth callback on the frontend
 */
export async function signInWithOAuth(provider: string) {
  const response = await api.post(`auth/oauth/${provider}`);

  const data = (await response.json()) as SignInResponse;
  await tokenStorage.setToken(data.accessToken);
  return data.user;
}

/**
 * Sign out
 */
export async function signOut() {
  await api.post("auth/signout");
  await tokenStorage.setToken(null);
}
