"use server";
export const registerUser = async (formData: FormData) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/register`,
    {
      method: "POST",
      body: formData,
      credentials: "include",
    }
  );
  const userInfo = await res.json();
  return userInfo;
};
