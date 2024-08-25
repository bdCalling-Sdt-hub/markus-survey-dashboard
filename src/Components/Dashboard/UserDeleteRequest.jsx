import { Table } from "antd";
import React from "react";
import { MdOutlineDelete } from "react-icons/md";
import { useGetCompanyQuery } from "../../redux/api/baseapi";

const dataSource = [
  {
    id: "1",
    CompanyName: "Mike",
    CompanyId: 456,
    email: "xyz@gmail.com",
    ToolUsed: 45,
    NoOfProjects: 46,
    UserOfProjects: 46,
    NoSurveys: 78,
  },
  {
    id: "2",
    CompanyName: "Mike",
    CompanyId: 456,
    email: "xyz@gmail.com",
    ToolUsed: 45,
    NoOfProjects: 46,
    UserOfProjects: 46,
    NoSurveys: 78,
  },
  {
    id: "3",
    CompanyName: "Mike",
    CompanyId: 456,
    email: "xyz@gmail.com",
    ToolUsed: 45,
    NoOfProjects: 46,
    UserOfProjects: 46,
    NoSurveys: 78,
  },
];
const UserDeleteRequest = () => {
  const { data: CompanyData } = useGetCompanyQuery({});

  console.log(CompanyData);

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
      title: "User Of Survey",
      dataIndex: "UserOfProjects",
      key: "NoOfProjects  ",
    },
    {
      title: "No. of Surveys",
      dataIndex: "NoSurveys",
      key: "NoSurveys  ",
    },
  ];

  return (
    <div className="bg-[var(--color-7)] rounded-md">
      <div className="between-center px-3 my-2 pt-5"></div>
      <Table dataSource={dataSource} columns={columns} />
    </div>
  );
};

export default UserDeleteRequest;
