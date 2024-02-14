"use server";

import { signOut } from "@/auth";

export const logout = async () => {
  // some server stuff (kalau mau ada logic dulu sebelum logout di server side)
  await signOut();
};
