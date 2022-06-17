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

class CreateHub extends React.Component {
  formRef = React.createRef();
  onFinish = async (values) => {
    try {
      let body = {
        company_id: values.company_id,
        name: values.name,
        address: values.address,
        unit_number: values.unit_number,
        city: values.city,
        state: values.state,
        zip_code: values.zip_code,
        country_code: values.country_code,
        note: values.note,
      };
      let response = await axios.post("http://localhost:8081/api/hub", body);
      this.formRef.current.resetFields();
      this.popNotification(
        "Hub Added Successfully",
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
          name="company_id"
          label="Company Id"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="address"
          label="Address"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="unit_number"
          label="Unit Number"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="city"
          label="City"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="state"
          label="State"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="zip_code"
          label="Zip Code"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="country-code"
          label="Country Code"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="note"
          label="Note"
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

export default CreateHub;
