"use server";
export const registerUser = async (formData: FormData) => {
  const res = await fetch(`https://tour-buddy-server.vercel.app/api/register`, {
    method: "POST",
    body: formData,
    cache: "no-store",
  });
  const userInfo = await res.json();
  return userInfo;
};
