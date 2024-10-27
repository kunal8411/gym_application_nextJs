import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { useState } from "react";
import Modal from "../../modals/modal";

export const metadata = {
  title: "Next.js Tables | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Tables page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};

const MembershipPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
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
          <p>
            This is the content of the modal. You can add forms or any other
            content here.
          </p>
        </Modal>
      </div>
    </DefaultLayout>
  );
};

export default MembershipPage;
