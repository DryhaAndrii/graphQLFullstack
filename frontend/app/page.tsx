"use client";

import Header from "./components/header/header";
import CentralPanel from "./components/ui/centralPanel/centralPanel";

export default function Home() {
  return (
    <div className="flex justify-center items-center py-4 w-screen h-full">
      <div className="w-[95%] min-w-[300px] max-w-[600px] h-[95%]">
        <CentralPanel>
          <div className="flex flex-col gap-5 p-2 md:p-4 w-full h-full">
            <Header />
          </div>
        </CentralPanel>
      </div>
    </div>
  );
}
