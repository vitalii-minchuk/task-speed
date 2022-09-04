import React, { FC } from "react";

const FooterInput: FC = () => {
  return (
    <>
      <div className="relative w-full xl:w-[658px] h-[79px] rounded-[8px] overflow-hidden">
        <input
          placeholder="Enter your website"
          type="text"
          className="w-full h-full z-0 px-[24px] bg-myBGFilter text-lg outline-none absolute top-0 bottom-0 right-0 left-0"
        />
        <button className="hidden sm:absolute z-10 rounded-[8px] top-[50%] translate-y-[-50%] right-[20px] w-[224px] h-[56px] bg-black sm:flex items-center justify-center gap-[10px] px-[24px] py-[20px]">
          <p className="text-white whitespace-nowrap text-[16px] leading-[16px] font-semibold text-center">
            Send me a Proposal
          </p>
          <div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 12H19"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 5L19 12L12 19"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </button>
      </div>
      <button className="sm:hidden rounded-[8px] mt-[20px] w-[224px] h-[56px] bg-black flex items-center justify-center gap-[10px] px-[24px] py-[20px]">
        <p className="text-white whitespace-nowrap text-[16px] leading-[16px] font-semibold text-center">
          Send me a Proposal
        </p>
        <div>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 12H19"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 5L19 12L12 19"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </button>
    </>
  );
};

export default FooterInput;
