"use server";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export const createService = async (data: FormData) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/service/create`, {
      method: "POST",
      headers: {
        Authorization: (await cookies()).get("accessToken")!.value,
      },
      body: data,
    });
    revalidateTag("SERVICE");
    return res.json();
  } catch (error: any) {    
    return Error(error);
  }
};