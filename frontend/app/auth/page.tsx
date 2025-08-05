"use client";

import CentralPanel from "@/app/components/ui/centralPanel/centralPanel";
import Header from "@/app/components/header/header";
import toast from "react-hot-toast";
import AuthForm from "./authForm";
export default function AuthPage() {
  return (
    <div className="flex justify-center items-center m-auto w-[95%] max-w-96">
      <div className="w-full">
        <CentralPanel>
          <div className="flex flex-col justify-between gap-3 px-5 py-10 size-full">
            <Header />

            <AuthForm />
          </div>
        </CentralPanel>
      </div>
    </div>
  );
}
