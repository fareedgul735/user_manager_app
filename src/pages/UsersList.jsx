import { useEffect, useState } from "react";
import { deleteUser, getUsers } from "../service/Service";
import styles from "./UsersList.module.css";
import { message, Space, Table } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import ButtonWrap from "../components/buttons/Button";
import { Link } from "react-router";

const API_URL = "http://localhost:5000/users";

function UsersList() {
  const [users, setUsers] = useState([]);
  const [messageApi, contextHolder] = message.useMessage();
  const fetchUsers = async () => {
    const res = await getUsers(API_URL);
    setUsers(res.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const deletedUser = async (id) => {
    try {
      await deleteUser(id);
      messageApi.success("User deleted");
      fetchUsers();
    } catch {
      messageApi.error("Delete failed");
    }
  };
  const columns = [
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Email", dataIndex: "email", key: "email" },
    { title: "Age", dataIndex: "age", key: "age" },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space>
          <ButtonWrap danger onClick={() => deletedUser(record._id)}>
            <DeleteOutlined />
          </ButtonWrap>
          <Link to={`/editUser/${record._id}`}>
            <ButtonWrap>
              <EditOutlined />
            </ButtonWrap>
          </Link>
        </Space>
      ),
    },
  ];
  return (
    <div className={styles.container}>
      {contextHolder}
      <Table dataSource={users} columns={columns} rowKey="_id" />
    </div>
  );
}

export default UsersList;
