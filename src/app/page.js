import Image from "next/image";
import UserInfo from "./components/UserInfo";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/autOptions";

export default async function Home() {
  const session=await getServerSession(authOptions);
  console.log("Session in page.js:", session);
  return (
  <div>
      <h1>Hellow world!</h1>
      <p>from blient component</p>
      <UserInfo></UserInfo>
      <p>getting data from server component</p>
       {JSON.stringify(session)}
  </div>
  );
}
