


"use server";

import { dbConnect } from '@/lib/dbConnect';

const registerUser = async (payload) => {
  try {
    const result = await dbConnect("test_user").insertOne(payload);

    return {
      acknowledged: result.acknowledged,
      insertedId: result.insertedId.toString(), // ✅ FIX
    };

  } catch (error) {
    console.error("Error registering user:", error);
    return { success: false, message: "Registration failed" };
  }
};

export default registerUser;

