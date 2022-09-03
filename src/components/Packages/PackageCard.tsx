import React, { FC } from "react";
import { PackageType } from "./packagesData";

interface IPackageCard {
  packageCard: PackageType;
}
const PackageCard: FC<IPackageCard> = ({ packageCard }) => {
  return (
    <div className="rounded-[10px] w-auto flex-grow truncate border border-myGray7 desktop:w-[400px]">
      <div
        className={`${packageCard.rating === 1 ? "bg-myRosa1" : ""} ${
          packageCard.rating === 2 ? "bg-myRosa2" : ""
        } ${
          packageCard.rating === 3 ? "bg-myRosa3" : ""
        } pb-[40px] rounded-br-[10px] rounded-bl-[10px]`}
      >
        <div className="flex items-center justify-center gap-[10px] pt-[40px] pb-[30px]">
          {Array(packageCard.rating)
            .fill(0)
            .map((star, index) => (
              <svg
                key={index}
                width="30"
                height="28"
                viewBox="0 0 30 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 0L18.3677 10.3647H29.2658L20.4491 16.7705L23.8168 27.1353L15 20.7295L6.18322 27.1353L9.55093 16.7705L0.734152 10.3647H11.6323L15 0Z"
                  fill="black"
                  fillOpacity="0.7"
                />
              </svg>
            ))}
        </div>
        <h4 className="font24 uppercase pb-[46px] text-center">
          {packageCard.title}
        </h4>
        <p className="text-myRed text-center font-bold text-[30px] phone:text-[40px] leading-[52px]b-[40px]">
          {packageCard.time}
        </p>
      </div>
      <div className="px-[8px] phone:px-[30px] pb-[40px] flex items-start gap-2 phone:gap-[15px] w-full">
        <div className="pt-[3px]">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24 12C24 15.1826 22.7357 18.2348 20.4853 20.4853C18.2348 22.7357 15.1826 24 12 24C8.8174 24 5.76516 22.7357 3.51472 20.4853C1.26428 18.2348 0 15.1826 0 12C0 8.8174 1.26428 5.76516 3.51472 3.51472C5.76516 1.26428 8.8174 0 12 0C15.1826 0 18.2348 1.26428 20.4853 3.51472C22.7357 5.76516 24 8.8174 24 12ZM18.045 7.455C17.9379 7.34823 17.8103 7.26416 17.6699 7.20782C17.5295 7.15149 17.3792 7.12404 17.228 7.12712C17.0768 7.1302 16.9277 7.16375 16.7897 7.22575C16.6518 7.28776 16.5277 7.37695 16.425 7.488L11.2155 14.1255L8.076 10.9845C7.86274 10.7858 7.58067 10.6776 7.28922 10.6827C6.99776 10.6879 6.71969 10.8059 6.51357 11.0121C6.30745 11.2182 6.18938 11.4963 6.18424 11.7877C6.1791 12.0792 6.28728 12.3612 6.486 12.5745L10.455 16.545C10.5619 16.6517 10.6892 16.7358 10.8294 16.7923C10.9695 16.8487 11.1196 16.8764 11.2706 16.8736C11.4217 16.8708 11.5706 16.8376 11.7085 16.776C11.8465 16.7144 11.9706 16.6256 12.0735 16.515L18.0615 9.03C18.2656 8.81775 18.3784 8.53391 18.3756 8.23944C18.3728 7.94496 18.2546 7.66332 18.0465 7.455H18.045Z"
              fill="black"
            />
          </svg>
        </div>
        <p className="font20 text-myGray7">{packageCard.hoursQuarterly}</p>
      </div>
      <div className="px-[8px] phone:px-[30px] pb-[40px] flex items-start gap-2 phone:gap-[15px] w-full">
        <div className="pt-[3px]">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24 12C24 15.1826 22.7357 18.2348 20.4853 20.4853C18.2348 22.7357 15.1826 24 12 24C8.8174 24 5.76516 22.7357 3.51472 20.4853C1.26428 18.2348 0 15.1826 0 12C0 8.8174 1.26428 5.76516 3.51472 3.51472C5.76516 1.26428 8.8174 0 12 0C15.1826 0 18.2348 1.26428 20.4853 3.51472C22.7357 5.76516 24 8.8174 24 12ZM18.045 7.455C17.9379 7.34823 17.8103 7.26416 17.6699 7.20782C17.5295 7.15149 17.3792 7.12404 17.228 7.12712C17.0768 7.1302 16.9277 7.16375 16.7897 7.22575C16.6518 7.28776 16.5277 7.37695 16.425 7.488L11.2155 14.1255L8.076 10.9845C7.86274 10.7858 7.58067 10.6776 7.28922 10.6827C6.99776 10.6879 6.71969 10.8059 6.51357 11.0121C6.30745 11.2182 6.18938 11.4963 6.18424 11.7877C6.1791 12.0792 6.28728 12.3612 6.486 12.5745L10.455 16.545C10.5619 16.6517 10.6892 16.7358 10.8294 16.7923C10.9695 16.8487 11.1196 16.8764 11.2706 16.8736C11.4217 16.8708 11.5706 16.8376 11.7085 16.776C11.8465 16.7144 11.9706 16.6256 12.0735 16.515L18.0615 9.03C18.2656 8.81775 18.3784 8.53391 18.3756 8.23944C18.3728 7.94496 18.2546 7.66332 18.0465 7.455H18.045Z"
              fill="black"
            />
          </svg>
        </div>
        <p className="font20 text-myGray7">{packageCard.investment}</p>
      </div>
      <div className="px-[8px] phone:px-[30px] pb-[40px] flex items-start gap-2 phone:gap-[15px] w-full">
        <div className="pt-[3px]">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24 12C24 15.1826 22.7357 18.2348 20.4853 20.4853C18.2348 22.7357 15.1826 24 12 24C8.8174 24 5.76516 22.7357 3.51472 20.4853C1.26428 18.2348 0 15.1826 0 12C0 8.8174 1.26428 5.76516 3.51472 3.51472C5.76516 1.26428 8.8174 0 12 0C15.1826 0 18.2348 1.26428 20.4853 3.51472C22.7357 5.76516 24 8.8174 24 12ZM18.045 7.455C17.9379 7.34823 17.8103 7.26416 17.6699 7.20782C17.5295 7.15149 17.3792 7.12404 17.228 7.12712C17.0768 7.1302 16.9277 7.16375 16.7897 7.22575C16.6518 7.28776 16.5277 7.37695 16.425 7.488L11.2155 14.1255L8.076 10.9845C7.86274 10.7858 7.58067 10.6776 7.28922 10.6827C6.99776 10.6879 6.71969 10.8059 6.51357 11.0121C6.30745 11.2182 6.18938 11.4963 6.18424 11.7877C6.1791 12.0792 6.28728 12.3612 6.486 12.5745L10.455 16.545C10.5619 16.6517 10.6892 16.7358 10.8294 16.7923C10.9695 16.8487 11.1196 16.8764 11.2706 16.8736C11.4217 16.8708 11.5706 16.8376 11.7085 16.776C11.8465 16.7144 11.9706 16.6256 12.0735 16.515L18.0615 9.03C18.2656 8.81775 18.3784 8.53391 18.3756 8.23944C18.3728 7.94496 18.2546 7.66332 18.0465 7.455H18.045Z"
              fill="black"
            />
          </svg>
        </div>
        <div className="flex-1">
          <p className="font20 text-myGray7">
            Best for websites under 250 <br /> pages
          </p>
        </div>
      </div>
      <div className="h-[1px] bg-myGray5 mx-auto w-[90%] mb-[40px]"></div>
      <p className="font20 uppercase text-center pb-[40px]">
        {packageCard.initInvestment}
      </p>
      <div className="flex justify-center">
        <button className="btnStandard mb-[40px]">Send Proposal</button>
      </div>
    </div>
  );
};

export default PackageCard;
