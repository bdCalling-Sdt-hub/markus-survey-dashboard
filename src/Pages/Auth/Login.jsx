<<<<<<< HEAD

import { Button, Checkbox, Form, Input, message } from "antd";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLogInCompanyMutation } from "../../redux/features/auth/authApi";
import { useDispatch } from "react-redux";
import { setToken } from "../../redux/features/auth/authSlice";




const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const [logInCompany, { data, isLoading }] = useLogInCompanyMutation();

    if (data?.access_token) {
        dispatch(setToken(data?.access_token))
        console.log(data?.access_token)
        navigate('/')
    }

    console.log('login', data)
    const onFinish = async (values) => {
        const formData = {
            email: values.email,
            password: values.password
        }
        logInCompany(formData)

    };



    return (
        <div
            className="gap-0 flex-col flex justify-center items-center"
            style={{
                width: "100%",
                background: "#BD8E05",
                height: "100vh",
            }}
        >

            <div className="bg-white flex justify-center items-center">
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{
                        remember: true,
                    }}
                    style={{
                        width: "630px",
                        background: "white",
                        borderRadius: "12px",
                        padding: "90px 57px",
                    }}
                    onFinish={onFinish}
                >
                    <h1
                        style={{ fontSize: "32px", color: "#38393E", textAlign: "center" }}
                    >
                        Login to Account
                    </h1>

                    <p
                        style={{ color: "#7D7E8A", textAlign: "center" }}
                    >
                        Please Sign In to Login Your Account
                    </p>
                    <div style={{ marginBottom: "24px" }}>
                        <label
                            htmlFor="email"
                            style={{ display: "block", marginBottom: "5px" }}
                        >
                            {" "}
                            Email address:{" "}
                        </label>
                        <Form.Item
                            style={{ marginBottom: 0 }}
                            name="email"
                            id="email"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your email!",
                                },
                            ]}
                        >
                            <Input
                                placeholder="Enter your email address"
                                type="email"
                                style={{
                                    border: "1px solid #E0E4EC",
                                    height: "52px",
                                    background: "white",
                                    borderRadius: "8px",
                                    outline: "none",
                                }}
                            />
                        </Form.Item>
                    </div>
=======
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {
  const navigate = useNavigate();

  const onFinish = (values) => {};

  return (
    <div
      className="gap-0 flex-col flex justify-center items-center"
      style={{
        width: "100%",
        background: "#BD8E05",
        height: "100vh",
      }}
    >
     
      <div className="bg-white flex justify-center items-center">
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          style={{
            width: "630px",
            background: "white",
            borderRadius: "12px",
            padding: "90px 57px",
          }}
          onFinish={onFinish}
        >
          <h1
            style={{ fontSize: "32px", color: "#38393E", textAlign: "center" }}
          >
            Login to Account
          </h1>

          <p style={{ color: "#7D7E8A", textAlign: "center" }}>
            Please Sign In to Login Your Account
          </p>
          <div style={{ marginBottom: "24px" }}>
            <label
              htmlFor="email"
              style={{ display: "block", marginBottom: "5px" }}
            >
              {" "}
              Email address:{" "}
            </label>
            <Form.Item
              style={{ marginBottom: 0 }}
              name="email"
              id="email"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                },
              ]}
            >
              <Input
                placeholder="Enter your email address"
                type="email"
                style={{
                  border: "1px solid #E0E4EC",
                  height: "52px",
                  background: "white",
                  borderRadius: "8px",
                  outline: "none",
                }}
              />
            </Form.Item>
          </div>
>>>>>>> 39af3e0eb2751fd0c758a407e7cc6893d323540c

          <div style={{ marginBottom: "24px" }}>
            <label
              style={{ display: "block", marginBottom: "5px" }}
              htmlFor="password"
            >
              Password
            </label>
            <Form.Item
              style={{ marginBottom: 0 }}
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
              ]}
            >
              <Input.Password
                type="password"
                placeholder="Enter your password"
                style={{
                  border: "1px solid #E0E4EC",
                  height: "52px",
                  background: "white",
                  borderRadius: "8px",
                  outline: "none",
                }}
              />
            </Form.Item>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox style={{ color: "#6A6D7C" }}>Remember me</Checkbox>
            </Form.Item>
            <Link
              className="login-form-forgot "
              style={{ color: "#B47000" }}
              to="/auth/forgot-password"
            >
              Forgot Password
            </Link>
          </div>

<<<<<<< HEAD
                    <Form.Item style={{ marginBottom: 0 }}>
                        <Button

                            type="primary"
                            htmlType="submit"
                            className="login-form-button"
                            block
                            style={{
                                height: "52px",
                                fontWeight: "400px",
                                fontSize: "18px",
                                background: "#ECB206",
                                marginTop: "56px",
                            }}
                        >
                            <Link
                                className="login-form-forgot "
                                style={{ color: "white" }}
                                to="#"
                            >
                                {isLoading ? "Loading..." : "Sign In"}
                            </Link>
                            {/*Sign In*/}
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
=======
          <Form.Item style={{ marginBottom: 0 }}>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              block
              style={{
                height: "52px",
                fontWeight: "400px",
                fontSize: "18px",
                background: "#ECB206",
                marginTop: "56px",
              }}
            >
              <Link
                className="login-form-forgot "
                style={{ color: "white" }}
                to="/super-admin"
              >
                Sign In
              </Link>
              {/*Sign In*/}
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
>>>>>>> 39af3e0eb2751fd0c758a407e7cc6893d323540c
};

export default Login;
