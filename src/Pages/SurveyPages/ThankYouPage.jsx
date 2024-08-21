import React from "react";

import { useTranslation } from "react-i18next";

export default function ThankYouPage() {
  const {translation}=useTranslation();
  return (
    <div className="bg-[fdfdfd] container mx-auto mt-60">
      {translation('welcomeMessage')}
      {/* <h1 className="text-center font-semibold text-[#ecb206] text-4xl">
        Thank you
      </h1>
      <p className="text-center my-5">For Perticipation On the Survey.</p> */}
    </div>
  );
}
  