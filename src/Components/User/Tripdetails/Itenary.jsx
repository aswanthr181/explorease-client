import React, { useState } from 'react'
import { TECollapse } from 'tw-elements-react'

function Itenary({ data, number }) {

  const [activeElement, setActiveElement] = useState("");

  const [itdata, setItdata] = useState(data)
  const num = number
  const handleClick = (value) => {
    if (value === activeElement) {
      setActiveElement("");
    } else {
      setActiveElement(value);
    }
  };

  return (
    <>
      <div id="accordionExample">
        <div className="rounded-t-lg border border-neutral-200 bg-white dark:border-neutral-600 ">
          <h2 className="mb-0" id="headingOne">
            <button
              className={`${activeElement === "element1" &&
                `text-primary [box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:!text-primary-400 dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
                } group relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none  dark:text-black`}
              type="button"
              onClick={() => handleClick("element1")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              DAY {num + 1}
              <span
                className={`${activeElement === "element1"
                    ? `rotate-[-180deg] -mr-1`
                    : `rotate-0 fill-[#212529]  dark:fill-white`
                  } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </button>
          </h2>
          <TECollapse show={activeElement === "element1"} className="!mt-0 !rounded-b-none !shadow-none w-96">
            <div className="flex flex-col justify-center">
              <div class="px-2 py-6 sm:w-full w-[20rem]">
                <div class="font-bold sm:text-xl mb-2">DESTINATION : {itdata.destination}</div>
                <p class="text-gray-700  text-base">
                  {itdata.description}
                </p>
              </div>

            </div>
          </TECollapse>
        </div>
      </div>


    </>
  )
}

export default Itenary