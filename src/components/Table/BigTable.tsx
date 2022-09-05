import React, { FC } from "react";
import { TickSvg } from "../../svgs/TickSvg";
import { TableDataType } from "./tableData";

interface IBigTable {
  data: TableDataType[]
}
const BigTable: FC<IBigTable> = ({ data }) => {
  return (
    <div className="rounded-[10px] overflow-x-auto mb-[40px]">
      <table className="table-fixed">
        <tbody>
          {data?.map((cell, index) => (
            <tr key={index} className="border-b border-slate-500">
              <td
                className={`${
                  cell.isBold ? "font16Bold" : "font16"
                } text-white bg-myGray8 py-[30px] px-[20px] min-w-[310px]`}
              >
                {cell.name}
              </td>
              <td
                className={`${
                  cell.isBold ? "font16Bold" : "font16 text-myGray8"
                } text-center bg-myRosa1 py-[30px] px-[20px] w-[310px]`}
              >
                {cell.standard !== "+" ? cell.standard : <TickSvg />}
              </td>
              <td
                className={`${
                  cell.isBold ? "font16Bold" : "font16 text-myGray8"
                } text-center bg-myRosa2 py-[30px] px-[20px] w-[310px]`}
              >
                {cell.premium !== "+" ? cell.premium : <TickSvg />}
              </td>
              <td
                className={`${
                  cell.isBold ? "font16Bold" : "font16 text-myGray8"
                } text-center bg-myRosa3 py-[30px] px-[20px] w-[310px]`}
              >
                {cell.ultimate !== "+" ? cell.ultimate : <TickSvg />}
              </td>
            </tr>
          ))}
          <tr>
            <td className=" text-white bg-myGray8 py-[30px] px-[20px] w-[310px]">
              <p className="mb-[10px]">
                Give Us a Call if You Need Information
              </p>
              <div className="flex items-center gap-[10px]">
                <div className="grid items-center">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.886893 16.4626L5.97283 14.282C6.57189 14.0227 7.27455 14.1975 7.68142 14.7029L9.74814 17.2257C12.9942 15.632 15.631 12.9924 17.2247 9.74915L14.7024 7.68478C14.1985 7.27317 14.0269 6.57431 14.2817 5.97524L16.4619 0.889307C16.7475 0.237276 17.4509 -0.119443 18.1395 0.0404007L22.8645 1.13024C23.5325 1.28259 23.9998 1.87087 23.9998 2.55806C23.9998 14.3846 14.3811 24.0034 2.55452 24.0034C1.86686 24.0034 1.28046 23.5361 1.12717 22.8681L0.0373308 18.1431C-0.120497 17.4563 0.235237 16.7438 0.886893 16.4626Z"
                      fill="#48BBFC"
                    />
                  </svg>
                </div>
                <p className="text-myBlue font24Bold">888-601-5359</p>
              </div>
            </td>
            <td className="w-[310px] bg-myRosa1">
              <div className="flex justify-center">
                <button className="btnStandard">Get Started</button>
              </div>
            </td>
            <td className="w-[310px] bg-myRosa2">
              <div className="flex justify-center">
                <button className="btnStandard">Get Started</button>
              </div>
            </td>
            <td className="w-[310px] bg-myRosa3">
              <div className="flex justify-center">
                <button className="btnStandard">Get Started</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BigTable;
