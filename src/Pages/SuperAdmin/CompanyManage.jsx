import {
  Button,
  Checkbox,
  ConfigProvider,
  Form,
  Input,
  Modal,
  Table,
  Upload,
} from "antd";
import { FaPlus } from "react-icons/fa6";
import { IoArrowBackSharp } from "react-icons/io5";
import { MdOutlineDelete } from "react-icons/md";
import { IoEyeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import "../../assets/css/style.css";
import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import UserDeleteRequest from "../../Components/Dashboard/UserDeleteRequest";
const dataSource = [
  {
    id: "1",
    CompanyName: "Mike",
    CompanyId: 456,
    email: "xyz@gmail.com",
    ToolUsed: 45,
    NoOfProjects: 46,
    NoSurveys: 78,
  },
];

const SCompanyManage = () => {
  const [isPeriodically, setIsPeriodically] = useState(false);
  const [openAddModal, setOpenAddModal] = useState(false);
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const columns = [
    {
      title: "SL No.",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Company Name",
      dataIndex: "CompanyName",
      key: "CompanyName ",
    },
    {
      title: "Company Id",
      dataIndex: "CompanyId",
      key: "CompanyId  ",
    },
    {
      title: "Company Email",
      dataIndex: "Email",
      key: "Email  ",
    },
    {
      title: "Tool Used",
      dataIndex: "ToolUsed",
      key: "ToolUsed  ",
    },

    {
      title: "No of Projects",
      dataIndex: "NoOfProjects",
      key: "NoOfProjects  ",
    },
    {
      title: "No. of Surveys",
      dataIndex: "NoSurveys",
      key: "NoSurveys  ",
    },
    {
      title: "Actions",
      dataIndex: "key",
      key: "key",
      render: (_, record) => {
        return (
          <div className="start-center text-2xl gap-1 ">
            {/* <IoEyeOutline className="cursor-pointer" /> */}
            <MdOutlineDelete className="cursor-pointer" />
          </div>
        );
      },
    },
  ];

  // Upload:
  const [fileList, setFileList] = useState([]);
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
  };

  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);

  const getBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

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
          <p className="text-xl">Company Manage</p>
        </div>
        <div className="end-center gap-2">
          <button
            onClick={() => setOpenAddModal(true)}
            className="bg-[var(--color-2)] px-4 rounded-md start-center gap-1 py-2 text-white flex justify-center items-center whitespace-nowrap"
          >
            Add Company
            <FaPlus />
          </button>
        </div>
      </div>
      <Table dataSource={dataSource} columns={columns} />
      {/* <UserDeleteRequest/> */}

      {/* modal: */}
      <Modal
        open={openAddModal}
        centered
        footer={false}
        onCancel={() => setOpenAddModal(false)}
      >
        <div>
          <p className="text-xl py-2 font-bold text-center my-10">
            Add Company
          </p>
          <div className="my-10 flex justify-center items-center">
          <Upload
            name="avatar"
            listType="picture-card"
            fileList={fileList}
            onPreview={handlePreview}
            onChange={handleChange}
          >
            {fileList.length >= 1 ? null : uploadButton}
          </Upload>
          </div>
      
          <ConfigProvider
            theme={{
              components: {
                Form: {
                  itemMarginBottom: 20,
                },
                Input: {
                  borderRadius: 0,
                },
              },
            }}
          >
            <Form
              name="basic"
              labelCol={{
                xs: 24,
                sm: 24,
                md: 24,
              }}
              wrapperCol={{
                xs: 24,
                sm: 24,
                md: 24,
              }}
              style={{
                maxWidth: "100%",
                width: "800px",
                margin: "0 auto",
              }}
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                name="companyName"
                rules={[
                  {
                    required: true,
                    message: "Please input your Company Name!",
                  },
                ]}
              >
                <Input placeholder="Company Name" />
              </Form.Item>
              <Form.Item
                name="companyId"
                rules={[
                  {
                    required: true,
                    message: "Please input your companyId!",
                  },
                ]}
              >
                <Input placeholder="Company Id" />
              </Form.Item>
              <Form.Item
                name="companyAddrerss"
                rules={[
                  {
                    required: true,
                    message: "Please input your company Address!",
                  },
                ]}
              >
                <Input placeholder="Company Address" />
              </Form.Item>
              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please input your Email!",
                  },
                ]}
              >
                <Input placeholder="Email" />
              </Form.Item>
              <Form.Item
                name="phoneNumber"
                rules={[
                  {
                    required: true,
                    message: "Please input your Phone Number!",
                  },
                ]}
              >
                <Input placeholder="Phone Number" />
              </Form.Item>

              <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{
                  span: 16,
                }}
              ></Form.Item>
              <p className="my-2">Unlock Tools</p>
              <Checkbox>Survey</Checkbox>
              <Form.Item
                wrapperCol={{
                  span: 16,
                }}
              >
                <button className="bg-[#ecb206] w-96 py-3 mt-5 rounded ">
                  Submit
                </button>
              </Form.Item>
            </Form>
          </ConfigProvider>
        </div>
      </Modal>
    </div>
  );
};

export default SCompanyManage;
