import { Form, message } from "antd";
import { useNavigate } from "react-router";
import { createUser } from "../service/Service";
import ButtonWrap from "../components/buttons/Button";
import InputWrap from "../components/inputs/Input";
import styles from "./AddUser.module.css";

const AddUser = () => {
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      await createUser(values);
      messageApi.success("User added successfully");
      form.resetFields();
      navigate("/users");
    } catch (err) {
      messageApi.error("Error saving user");
    }
  };

  return (
    <div className={styles.container}>
      {contextHolder}
      <h2 className={styles.title}>Add User</h2>

      <Form
        form={form}
        layout="inline"
        onFinish={onFinish}
        className={styles.form}
      >
        <Form.Item
          name="name"
          rules={[{ required: true, message: "Please enter name" }]}
        >
          <InputWrap placeholder="Name" />
        </Form.Item>

        <Form.Item
          name="email"
          rules={[{ required: true, message: "Please enter email" }]}
        >
          <InputWrap placeholder="Email" />
        </Form.Item>

        <Form.Item
          name="age"
          rules={[{ required: true, message: "Please enter age" }]}
        >
          <InputWrap placeholder="Age" type="number" />
        </Form.Item>

        <Form.Item>
          <ButtonWrap type="primary" htmlType="submit">
            Add User
          </ButtonWrap>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddUser;
