import { api } from "../client";

interface SignupData {
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  password: string;
}

export const registerUser = async (data: SignupData) => {
  try {
    const response = await api.auth.signup.$post({ json: data });
    return response.json(); // Or whatever data you expect back
  } catch (error: any) {
    console.error("Error during registration:", error);
    throw error; // Re-throw the error to be caught in the component
  }
};

  export const loginUser = async (data: any) => {
    const response = await api.auth.login.$post({ json: data });

    if (!response.ok) {
      return { error: "Authentication failed" };
    }

    const responseData = await response.json();

    localStorage.setItem("token", responseData.token);
  };

  export const getProfile = async () => {
    const token = localStorage.getItem("token");
    if (!token) throw new Error("No token found");

    // return client.api.auth..get("/profile", { headers: { Authorization: `Bearer ${token}` } });
  };

