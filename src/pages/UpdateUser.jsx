import { Form, message } from "antd";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { getUserById, updateUser } from "../service/Service";
import ButtonWrap from "../components/buttons/Button";
import InputWrap from "../components/inputs/Input";
import styles from "./AddUser.module.css";

const AddUser = () => {
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      (async () => {
        try {
          const res = await getUserById(id);
          form.setFieldsValue(res.data);
        } catch {
          messageApi.error("Failed to fetch user");
        }
      })();
    }
  }, [id, form, messageApi]);

  const onFinish = async (values) => {
    try {
      await updateUser(id, values);
      messageApi.success("User updated successfully");
      form.resetFields();
      navigate("/users");
    } catch (err) {
      messageApi.error("Error saving user");
    }
  };

  return (
    <div className={styles.container}>
      {contextHolder}
      <h2 className={styles.title}>Edit User</h2>

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
            Edit User
          </ButtonWrap>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddUser;
