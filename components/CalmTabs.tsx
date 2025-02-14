"use client";
import { JSX, useEffect, useRef, useState } from "react";

export default function TabsComponent({
  items,
}: {
  items: { title: String; content: JSX.Element }[];
}) {
  const firstBtnRef = useRef<HTMLButtonElement | null>(null);
  useEffect(() => {
    firstBtnRef.current?.focus();
  }, []);
  const [selectedTab, setTabs] = useState(0);
  return (
    <div className="">
      <div className="pt-9 pb-9 flex justify-center space-x-4">
        {items.map((item, index) => (
          <button
            onClick={() => {
              setTabs(index);
            }}
            ref={index === 0 ? firstBtnRef : null}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-xl shadow-sm hover:bg-gray-300 focus:outline-none focus:bg-[#3B82F6] focus:text-white focus:ring-2 focus:ring-black"
            key={index}
          >
            {item.title}
          </button>
        ))}
      </div>
      <div>
        {items.map((item, index) => (
          <div
            className={`${selectedTab === index ? null : "hidden"}`}
            key={index}
          >
            {item.content}
          </div>
        ))}
      </div>
    </div>
  );
}
