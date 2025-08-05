// src/lib/apiClient.ts
import ky from "ky";

// A simple secure storage – adapt with AsyncStorage / MMKV or cookie logic as needed
export const tokenStorage = {
  async getToken() {
    return localStorage.getItem("authToken");
  },
  async setToken(token: string | null) {
    if (token != null) localStorage.setItem("authToken", token);
    else localStorage.removeItem("authToken");
  },
};

export const api = ky.extend({
  prefixUrl: "http://localhost:3000/api/",
  credentials: "include", // send cookies if you use session-based auth
  hooks: {
    beforeError: [
      async (error: any) => {
        const { response } = error;
        if (response) {
          try {
            const body = await response.json();
            error.message =
              body.message || `Request failed (${response.status})`;
          } catch {
            // fallback: keep default or use statusText
            error.message = response.statusText || error.message;
          }
        }
        return error;
      },
    ],
    beforeRequest: [
      async (request) => {
        const token = await tokenStorage.getToken();
        if (token) {
          request.headers.set("Authorization", `Bearer ${token}`);
        }
        return request;
      },
    ],
    afterResponse: [
      async (_request, _options, response) => {
        if (response.status === 401) {
          // Handle token refresh if you have a refresh flow
          // (Example omitted—refresh logic lives separately)
          await tokenStorage.setToken(null);
        }
        return response;
      },
    ],
  },
});
