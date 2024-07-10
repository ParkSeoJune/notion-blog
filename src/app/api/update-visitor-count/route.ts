import { db } from "@/firebaseConfig";
import {
  doc,
  setDoc,
  getDoc,
  increment,
  serverTimestamp,
} from "firebase/firestore";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  const cookieStore = cookies();
  const visitCookie = cookieStore.get("visited");

  const today = new Date().toISOString().split("T")[0];
  const visitorRef = doc(db, "visitors", today);

  if (!visitCookie) {
    cookieStore.set("visited", "true", {
      maxAge: 60 * 60 * 24,
    });

    const docSnap = await getDoc(visitorRef);

    if (docSnap.exists()) {
      await setDoc(
        visitorRef,
        { count: increment(1), lastUpdated: serverTimestamp() },
        { merge: true }
      );
    } else {
      await setDoc(visitorRef, {
        count: 1,
        lastUpdated: serverTimestamp(),
      });
    }
  } else {
    console.log("Visit cookie already exists"); // 디버그 메시지 추가
  }

  return NextResponse.json({ message: "Visitor count updated" });
}
