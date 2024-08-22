import { Button, Form, Input, message, Pagination, Select, Space } from 'antd'
import React, { useEffect, useState } from 'react'
import { CiCircleMinus, CiCirclePlus } from 'react-icons/ci'
import { FaPlus } from 'react-icons/fa'
import { IoArrowBackSharp } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { useCreateQuestionsMutation, useGetProjectForManageCompanyQuery, useGetSurveyForManageCompanyQuery } from '../redux/features/questions/questionsApi'


const EditSurveyQuestions = () => {




    return (
        <div className='questions'>
            <div className='between-center px-3 my-2 pt-5'>
                <div className='start-center gap-2 mb-3 p-5'>
                    <Link to={-1} className='bg-[var(--color-2)] py-1 px-2 rounded-md start-center gap-1 text-white'><IoArrowBackSharp />back</Link>
                    <p className='text-xl'>Edit Questions</p>
                </div>

            </div>
            <Form className=''
                layout='vertical'
            >
                <div className='grid grid-cols-2 gap-4'>
                    <Form.Item
                        name={`projectId`}
                        label={`Project Name`}
                        rules={[
                            {
                                message: 'Project Name is required',
                                required: true
                            }
                        ]}
                    >
                        <Select className='w-full h-[42px]'
                            placeholder="Select A Project"
    

                        >

                        </Select>
                    </Form.Item>
                    <Form.Item
                        name={`surveyId`}
                        label={`Survey`}
                        rules={[
                            {
                                message: 'Survey Name is required',
                                required: true
                            }
                        ]}
                    >
                        <Select className='w-full h-[42px]'
                            placeholder="Select A Survey"
    
                        />
                    </Form.Item>
                </div>
            </Form>
        </div>
    );
};

export default EditSurveyQuestions;