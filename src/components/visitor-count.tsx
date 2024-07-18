"use client";

import { useEffect, useState } from "react";
import { db } from "@/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { format } from "date-fns";

const VisitorCount = () => {
  const [todayCount, setTodayCount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    const fetchVisitorData = async () => {
      const todayDate = format(new Date(), "yyyy-MM-dd");
      const visitorDocs = await getDocs(collection(db, "visitors"));

      let todayCount = 0;
      let totalCount = 0;

      visitorDocs.forEach((doc) => {
        totalCount += doc.data().count;
        if (doc.id === todayDate) {
          todayCount = doc.data().count;
        }
      });

      setTodayCount(todayCount);
      setTotalCount(totalCount);
    };

    fetchVisitorData();
  }, []);

  return (
    <div className="flex flex-col">
      <p className="text-xs">오늘의 방문자 수: {todayCount}</p>
      <p className="text-xs">총 방문자 수: {totalCount}</p>
    </div>
  );
};

export default VisitorCount;
