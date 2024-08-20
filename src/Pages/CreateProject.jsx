import { Form, Input, message, Modal, Table } from 'antd';
import React, { useState } from 'react'
import { CiSearch } from 'react-icons/ci';
import { FaEdit, FaRegEye, FaStar } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa6';
import { IoArrowBackSharp } from 'react-icons/io5';
import { MdEdit, MdOutlineDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useCreateProjectMutation, useGetProjectsQuery } from '../redux/projects/projectApi';
import moment from 'moment';
const dataSource = [
    {
        id: '1',
        ProjectName: 'Mike',
        date: '05/12/2024',
    },
    {
        id: '1',
        ProjectName: 'Mike',
        date: '05/12/2024',
    },
    {
        id: '1',
        ProjectName: 'Mike',
        date: '05/12/2024',
    },
    {
        id: '1',
        ProjectName: 'Mike',
        date: '05/12/2024',
    },
    {
        id: '1',
        ProjectName: 'Mike',
        date: '05/12/2024',
    },
    {
        id: '1',
        ProjectName: 'Mike',
        date: '05/12/2024',
    },
    {
        id: '1',
        ProjectName: 'Mike',
        date: '05/12/2024',
    },
    {
        id: '1',
        ProjectName: 'Mike',
        date: '05/12/2024',
    },
    {
        id: '1',
        ProjectName: 'Mike',
        date: '05/12/2024',
    },
    {
        id: '1',
        ProjectName: 'Mike',
        date: '05/12/2024',
    },
    {
        id: '1',
        ProjectName: 'Mike',
        date: '05/12/2024',
    },
    {
        id: '1',
        ProjectName: 'Mike',
        date: '05/12/2024',
    },
    {
        id: '1',
        ProjectName: 'Mike',
        date: '05/12/2024',
    },
    {
        id: '1',
        ProjectName: 'Mike',
        date: '05/12/2024',
    },
]

const CreateProject = () => {
    const [openAddModal, setOpenAddModal] = useState(false)
    const { data: allProject, isLoading: getProjectLoading } = useGetProjectsQuery();
    console.log(allProject)
    console.log(allProject?.data?.data)
    console.log(allProject?.data?.total)
    console.log(allProject?.data?.per_page)

    const [createProject, { data, isLoading }] = useCreateProjectMutation();
    if (data) {
        console.log(data)
        message.success(data?.message);
    }


    const columns = [
        {
            title: 'Serial No',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Projects Name',
            dataIndex: 'project_name',
            key: 'project_name',
        },
        {
            title: 'Date',
            dataIndex: 'created_at',
            key: 'created_at',
            render: (_, record) => <p> {moment(record?.created_at).format("L")}  </p>
        },
        {
            title: 'Actions',
            dataIndex: 'key',
            key: 'key',
            render: (_, record) => {
                return (<div className='start-center text-2xl gap-1 text-red-600'>
                    {/* <MdEdit className='cursor-pointer' /> */}
                    <MdOutlineDelete className='cursor-pointer' />
                </div>)
            }
        },
    ];
    const onFinish = (value) => {
        console.log(value)
        createProject(value);
    }
    return (
        <div className='bg-[var(--color-7)] rounded-md'>
            <div className='between-center px-3 my-2 pt-5'>
                <div className='start-center gap-2 mb-3 p-5'>
                    <Link to={-1} className='bg-[var(--color-2)] py-1 px-2 rounded-md start-center gap-1 text-white'><IoArrowBackSharp />back</Link>
                    <p className='text-xl'>Create Project</p>
                </div>
                <div className='end-center gap-2'>
                    <Input className='max-w-[250px] h-10' prefix={<CiSearch className='text-2xl' />} placeholder="Search" />
                    <button onClick={() => setOpenAddModal(true)} className='bg-[var(--color-2)] px-4 rounded-md start-center gap-1 py-2 text-white flex justify-center items-center whitespace-nowrap'>
                        Add New Project
                        <FaPlus />
                    </button>
                </div>
            </div>
            <Table className='all-custom-table-pagination' dataSource={allProject?.data?.data} columns={columns} pagination={{
                pageSize: 5,
            }} />
            <Modal
                open={openAddModal}
                centered
                footer={false}
                onCancel={() => setOpenAddModal(false)}
            >
                <div>
                    <p className='text-xl py-2 font-semibold'>Create new Project</p>
                    <Form className=''
                        layout='vertical'
                        onFinish={onFinish}
                    >
                        <Form.Item
                            name={`project_name`}
                            label={`Project Name`}
                            rules={[
                                {
                                    message: 'Project Name is required',
                                    required: true
                                }
                            ]}
                        >
                            <Input className='pb-8 pt-2 border outline-none' placeholder='Type survey name here...' />
                        </Form.Item>
                        <button className='w-full py-2 bg-[var(--color-2)] text-white font-semibold rounded-md'>
                            save
                        </button>
                    </Form>
                </div>
            </Modal>
        </div>
    )
}

export default CreateProject
