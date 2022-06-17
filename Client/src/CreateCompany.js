import { Button, Form, Input, notification } from "antd";
import React from "react";
import axios from "axios";
import { SmileOutlined, MehOutlined } from "@ant-design/icons";

const happyIcon = <SmileOutlined style={{ color: "#108ee9" }} />;
const sadIcon = <MehOutlined style={{ color: "red" }} />;
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 8,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

class CreateCompany extends React.Component {
  formRef = React.createRef();
  onFinish = async (values) => {
    try {
      let body = { name: values.name, contact_email: values.email };
      let response = await axios.post(
        "http://localhost:8081/api/company",
        body
      );
      this.formRef.current.resetFields();
      this.popNotification(
        "Company Added Successfully",
        `${values.name} Was Added`,
        happyIcon
      );
    } catch (error) {
      this.popNotification(
        "Error Happened",
        `${values.name} Was Not Added`,
        sadIcon
      );
    }
  };
  onReset = () => {
    this.formRef.current.resetFields();
  };
  popNotification = (desc, msg, icon) => {
    notification.open({
      message: desc,
      description: msg,
      duration: 0,
      icon: icon,
      onClick: () => {},
    });
  };
  render() {
    return (
      <Form
        {...layout}
        ref={this.formRef}
        name="control-ref"
        onFinish={this.onFinish}
      >
        <Form.Item
          name="name"
          label="Name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="email"
          label="Contact Email"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button htmlType="button" onClick={this.onReset}>
            Reset
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default CreateCompany;
