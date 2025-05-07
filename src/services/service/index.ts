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

// ✅ Get all services (for server-side usage)
export const getAllServices = async (): Promise<any> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/service`, {
      method: "GET",
      headers: {
        Authorization: (await cookies()).get("accessToken")!.value,
      },
      next: {
        tags: ["SERVICE"], // For ISR or cache revalidation
      },
    });

    return await res.json();
  } catch (error: any) {
    return { success: false, message: error.message };
  }
};


export const updateService = async (
  serviceData: FormData,
  serviceId: string
): Promise<any> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/service/${serviceId}`,
      {
        method: "PUT",
        body: serviceData,
        headers: {
          Authorization: (await cookies()).get("accessToken")!.value,
        },
      }
    );
    revalidateTag("SERVICE");
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};

