import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { useState } from "react";
import Modal from "../../modals/modal";
import Link from "next/link";

export const metadata = {
  title: "Next.js Tables | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Tables page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};

const MembershipPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOptionSelected, setIsOptionSelected] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const handleSave = () => {
    // Add your save functionality here
    console.log("Selected Tenure:", selectedTenure);
    console.log("Personal Trainer Option:", selectedTrainerOption);
    setIsModalOpen(false); // Close modal after saving
  };
  return (
    <DefaultLayout>
      {/* <Breadcrumb pageName="" /> */}

      <div className="flex flex-col gap-10">
        <section className="membership-section spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title">
                  <h2>MEMBERSHIP PLANS</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <div className="membership-item">
                  <div className="mi-title">
                    <h4>Basic</h4>
                    <div className="triangle"></div>
                  </div>
                  <h2 className="mi-price">&#8377; 1500</h2>
                  <ul>
                    <li>
                      <p>Duration</p>
                      <span>1 months</span>
                    </li>
                    <li>
                      <p>Personal trainer</p>
                      <span>No</span>
                    </li>
                    <li>
                      <p>Amount of people</p>
                      <span>01 person</span>
                    </li>
                    <li>
                      <p>Number of visits</p>
                      <span>1/Day</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="membership-item">
                  <div className="mi-title">
                    <h4>Standard</h4>
                    <div className="triangle"></div>
                  </div>
                  <h2 className="mi-price">&#8377; 4000</h2>
                  <ul>
                    <li>
                      <p>Duration</p>
                      <span>3 months</span>
                    </li>
                    <li>
                      <p>Personal trainer</p>
                      <span>No</span>
                    </li>
                    <li>
                      <p>Amount of people</p>
                      <span>01 person</span>
                    </li>
                    <li>
                      <p>Number of visits</p>
                      <span>2/Day</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="membership-item">
                  <div className="mi-title">
                    <h4>Premium</h4>
                    <div className="triangle"></div>
                  </div>
                  <h2 className="mi-price">&#8377; 12000</h2>
                  <ul>
                    <li>
                      <p>Duration</p>
                      <span>12 months</span>
                    </li>
                    <li>
                      <p>Personal trainer</p>
                      <span>Yes</span>
                    </li>
                    <li>
                      <p>Amount of people</p>
                      <span>01 person</span>
                    </li>
                    <li>
                      <p>Number of visits</p>
                      <span>Unlimited</span>
                    </li>
                    <li>
                      <button onClick={() => setIsModalOpen(true)}>EDIT</button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Modal
          isOpen={isModalOpen}
          onOpenChange={(isOpen) => setIsModalOpen(isOpen)}
          title="Update Gym Fees"
        >
          <div>
            {" "}
            {/* Tenure selection */}
            <div className="mb-5.5">
              <div>
                <label className="block mb-3 text-sm font-medium text-black dark:text-white">
                  Select Tenure
                </label>

                <div className="relative z-20 bg-white dark:bg-form-input">
                  <select
                    value={selectedOption}
                    //   onChange={(e) => {
                    //     setSelectedOption(e.target.value);
                    //     changeTextColor();
                    //   }}
                    className={`relative z-20 w-full appearance-none rounded border border-stroke bg-transparent px-4 py-3 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input ${
                      isOptionSelected ? "text-black dark:text-white" : ""
                    }`}
                  >
                    <option
                      value=""
                      disabled
                      className="text-body dark:text-bodydark"
                    >
                      Select Tenure
                    </option>
                    <option
                      value="1 Month"
                      className="text-body dark:text-bodydark"
                    >
                      1 Month
                    </option>
                    <option
                      value="3 Months"
                      className="text-body dark:text-bodydark"
                    >
                      3 Months
                    </option>
                    <option
                      value="6 Months"
                      className="text-body dark:text-bodydark"
                    >
                      6 Months
                    </option>
                    <option
                      value="1 Year"
                      className="text-body dark:text-bodydark"
                    >
                      1 Year
                    </option>
                  </select>

                  <span className="absolute z-10 -translate-y-1/2 right-4 top-1/2">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="0.8">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                          fill="#637381"
                        ></path>
                      </g>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            {/* Personal trainer selection */}
            <div className="mb-5.5">
              <div>
                <label className="block mb-3 text-sm font-medium text-black dark:text-white">
                  Personal trainer
                </label>

                <div className="relative z-20 bg-white dark:bg-form-input">
                  <select
                    value={selectedOption}
                    //   onChange={(e) => {
                    //     setSelectedOption(e.target.value);
                    //     changeTextColor();
                    //   }}
                    className={`relative z-20 w-full appearance-none rounded border border-stroke bg-transparent px-4 py-3 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input ${
                      isOptionSelected ? "text-black dark:text-white" : ""
                    }`}
                  >
                    <option
                      value=""
                      disabled
                      className="text-body dark:text-bodydark"
                    >
                      Select Oprion
                    </option>
                    <option
                      value="Yes"
                      className="text-body dark:text-bodydark"
                    >
                      Yes
                    </option>
                    <option value="No" className="text-body dark:text-bodydark">
                      No
                    </option>
                  </select>

                  <span className="absolute z-10 -translate-y-1/2 right-4 top-1/2">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="0.8">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                          fill="#637381"
                        ></path>
                      </g>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            {/* No of people */}
            <div className="w-full ">
              <label
                className="block mb-3 text-sm font-medium text-black dark:text-white"
                htmlFor="phoneNumber"
              >
                Amount of people
              </label>
              <input
                className="w-full rounded border border-stroke bg-white px-4.5 py-3 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                type="number"
                name="phoneNumber"
                id="phoneNumber"
                placeholder=""
                defaultValue=""
              />
            </div>
            {/* Number of visit */}
            <div className="mb-5.5">
              <div>
                <label className="block mb-3 text-sm font-medium text-black dark:text-white">
                  Number of visits
                </label>

                <div className="relative z-20 bg-white dark:bg-form-input">
                  <select
                    value={selectedOption}
                    //   onChange={(e) => {
                    //     setSelectedOption(e.target.value);
                    //     changeTextColor();
                    //   }}
                    className={`relative z-20 w-full appearance-none rounded border border-stroke bg-transparent px-4 py-3 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input ${
                      isOptionSelected ? "text-black dark:text-white" : ""
                    }`}
                  >
                    <option
                      value=""
                      disabled
                      className="text-body dark:text-bodydark"
                    >
                      Select Oprion
                    </option>
                    <option
                      value="1/day"
                      className="text-body dark:text-bodydark"
                    >
                      1/day
                    </option>
                    <option
                      value="2/day"
                      className="text-body dark:text-bodydark"
                    >
                      2/day
                    </option>
                    <option
                      value="Unlimited"
                      className="text-body dark:text-bodydark"
                    >
                      Unlimited
                    </option>
                  </select>

                  <span className="absolute z-10 -translate-y-1/2 right-4 top-1/2">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="0.8">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                          fill="#637381"
                        ></path>
                      </g>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end mt-5">
              <button
                onClick={handleSave}
                className="px-4 py-2 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
              >
                Save
              </button>
            </div>
        </Modal>
      </div>
    </DefaultLayout>
  );
};

export default MembershipPage;
