"use server";

import { verifySession } from "@/lib/sessions";
import axios from "axios";

export const uploadImage = async (file) => {
  const { token, role } = await verifySession();
  if (!(token && role === "Admin")) {
    throw new Error("Unauthorized access");
  }

  try {
    const formData = new FormData();
    formData.append("image", file);

    const response = await axios.post(
      "https://test-fe.mysellerpintar.com/api/upload",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
        maxBodyLength: Infinity, // Important for large files
        maxContentLength: Infinity, // Important for large files
      }
    );

    if (!response.data || !response.data.imageUrl) {
      throw new Error("No image URL returned from server");
    }

    return { imageUrl: response.data.imageUrl };
  } catch (error) {
    console.error("Server upload error:", error);
    throw new Error(
      error.response?.data?.message || error.message || "Image upload failed"
    );
  }
};
