import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { useEffect, useState } from "react";
import Modal from "../../modals/modal";
import useRequest from "../../hooks/use-request";
import { toast } from "react-toastify";

export const metadata = {
  title: "Next.js Tables | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Tables page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};

const MembershipPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOptionSelected, setIsOptionSelected] = useState(false);
  const [selectedTenure, setSelectedTenure] = useState("");
  const [selectedPresonalTrainer, setSelectedPresonalTrainer] = useState("");
  const [selectedAmountOfPeople, setSelectedAmountOfPeople] = useState("");
  const [selectedNumberOfVisit, setSelectedNumberOfVisit] = useState("");
  const [selectedMembershipId, setSelectedMembershipId] = useState("");

  const [membershipDetails, setMembershipDetails] = useState([]);

  useEffect(() => {
    fetchMembershipPlans();
  }, []);

  //get all membership Plans
  const { doRequest: fetchMembershipPlans, errors: fetchMembershipErrors } =
    useRequest({
      url: "/api/membership-plan",
      method: "get",
      body: {},
      onSuccess: (data) => {
        console.log("DATA IS", data);
        if (data?.success) {
          setMembershipDetails(data?.message);
        }
      },
      onError: (err) => {
        console.log("Error while fetching the mebership details : ", err);
        toast.error(`${err?.response?.data?.message}`, {
          position: "top-right",
          autoClose: 500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      },
    });
  //Update membership Plan
  const { doRequest: updateMembershipPlan, errors: updateMembershipErros } =
    useRequest({
      url: "/api/membership-plan",
      method: "put",
      // body: {},
      onSuccess: (data) => {
        console.log("DATA IS in update", data);
        if (data?.success) {
          fetchMembershipPlans();
          setIsModalOpen(false);
        }
      },
      onError: (err) => {
        console.log("Error while Updating the mebership details : ", err);
        toast.error(`${err?.response?.data?.message}`, {
          position: "top-right",
          autoClose: 500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      },
    });

  //openEditModal
  const handleEditMembershipModal = (membership, flag) => {
    console.log("membershipmembershipmembership", membership);
    const { tenure, personal_trainer, no_of_people, no_of_visits, _id } =
      membership;
    setSelectedMembershipId(_id);
    setSelectedTenure(tenure);
    setSelectedPresonalTrainer(personal_trainer);
    setSelectedAmountOfPeople(no_of_people);
    setSelectedNumberOfVisit(no_of_visits);
    setIsModalOpen(flag);
  };

  // Handle edit membership form
  const handleSave = () => {
    // Add your save functionality here
    console.log("Selected Tenure:", selectedTenure);
    console.log("Personal Trainer Option:", selectedPresonalTrainer);
    updateMembershipPlan({
      _id: selectedMembershipId,
      updateData: {
        tenure: selectedTenure,
        personal_trainer: selectedPresonalTrainer,
        no_of_people: selectedAmountOfPeople,
        no_of_visits: selectedNumberOfVisit,
      },
    });
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
              {membershipDetails.length > 0 &&
                membershipDetails.map((membership) => (
                  <div className="col-lg-4" key={membership?._id}>
                    <div className="membership-item">
                      <div className="mi-title">
                        <h4>{membership?.type_of_membership}</h4>
                        <div className="triangle"></div>
                      </div>
                      <h2 className="mi-price">&#8377; {membership?.amount}</h2>
                      <ul>
                        <li>
                          <p>Duration</p>
                          <span>{membership?.tenure}</span>
                        </li>
                        <li>
                          <p>Personal Trainer</p>
                          <span>
                            {membership?.personal_trainer ? "Yes" : "No"}
                          </span>
                        </li>
                        <li>
                          <p>Amount of people</p>
                          <span>{membership?.no_of_people} person</span>
                        </li>
                        <li>
                          <p>Number of visits</p>
                          <span>{membership?.no_of_visits}/Day</span>
                        </li>
                        <li>
                          <button
                            onClick={() =>
                              handleEditMembershipModal(membership, true)
                            }
                          >
                            EDIT
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                ))}
              
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
                    value={selectedTenure}
                    onChange={(e) => {
                      setSelectedTenure(e.target.value);
                    }}
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
                    <option value="1" className="text-body dark:text-bodydark">
                      1 Month
                    </option>
                    <option value="3" className="text-body dark:text-bodydark">
                      3 Months
                    </option>
                    {/* <option
                      value="6 Months"
                      className="text-body dark:text-bodydark"
                    >
                      6 Months
                    </option> */}
                    <option value="12" className="text-body dark:text-bodydark">
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
                  Personal Trainer
                </label>

                <div className="relative z-20 bg-white dark:bg-form-input">
                  <select
                    value={selectedPresonalTrainer}
                    onChange={(e) => {
                      setSelectedPresonalTrainer(e.target.value);
                    }}
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
                      value="true"
                      className="text-body dark:text-bodydark"
                    >
                      Yes
                    </option>
                    <option
                      value="false"
                      className="text-body dark:text-bodydark"
                    >
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
                value={selectedAmountOfPeople}
                onChange={(e) => {
                  setSelectedAmountOfPeople(e.target.value);
                }}
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
                    value={selectedNumberOfVisit}
                    onChange={(e) => {
                      setSelectedNumberOfVisit(e.target.value);
                    }}
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
                    <option value="1" className="text-body dark:text-bodydark">
                      1/day
                    </option>
                    <option value="2" className="text-body dark:text-bodydark">
                      2/day
                    </option>
                    <option value="3" className="text-body dark:text-bodydark">
                      3/day
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
