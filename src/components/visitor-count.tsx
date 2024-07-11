"use client";

import { useEffect, useState, useRef } from "react";
import { db } from "@/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { format } from "date-fns";

const VisitorCount = () => {
  const [todayCount, setTodayCount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const hasUpdatedVisitorCount = useRef(false);

  useEffect(() => {
    if (hasUpdatedVisitorCount.current) return;

    const updateVisitorCount = async () => {
      const res = await fetch("/api/update-visitor-count");
      if (res.ok) {
        await res.json();

        hasUpdatedVisitorCount.current = true;
      } else {
        console.error("Error updating visitor count:", res.statusText);
      }
    };

    updateVisitorCount();
  }, []);

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
