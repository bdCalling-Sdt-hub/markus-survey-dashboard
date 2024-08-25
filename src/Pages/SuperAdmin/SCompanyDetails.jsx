import { Modal } from "antd";
import React, { useState } from "react";

import { IoArrowBackSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import "../../assets/css/style.css";
import { FilterOutlined, UploadOutlined } from "@ant-design/icons";
import UserDeleteRequest from "../../Components/Dashboard/UserDeleteRequest";

const SCompanyDetails = () => {
  const [openAddModal, setOpenAddModal] = useState(false);

  return (
    <div className="bg-[var(--color-7)] rounded-md">
      <div className="between-center px-3 my-2 pt-5">
        <div className="start-center gap-2 mb-3 p-5">
          <Link
            to={-1}
            className="bg-[var(--color-2)] py-1 px-2 rounded-md start-center gap-1 text-white"
          >
            <IoArrowBackSharp />
            back
          </Link>
          <p className="text-xl">Company Details</p>
        </div>
        <div className="end-center gap-2">
          {/* todo  export on excel sheet */}
          <button
            onClick={() => setOpenAddModal(false)}
            className="bg-[var(--color-2)] px-4 rounded-md start-center gap-1 py-2 text-white flex justify-center items-center whitespace-nowrap"
          >
            Export
            <UploadOutlined />
          </button>
          <button
            onClick={() => setOpenAddModal(false)}
            className="bg-[var(--color-2)] px-4 rounded-md start-center gap-1 py-2 text-white flex justify-center items-center whitespace-nowrap"
          >
            Filter
            <FilterOutlined />
          </button>
        </div>
      </div>
      <UserDeleteRequest />

      {/* modal for filter */}
      <Modal
        open={openAddModal}
        centered
        footer={false}
        onCancel={() => setOpenAddModal(false)}
      ></Modal>
    </div>
  );
};

export default SCompanyDetails;
