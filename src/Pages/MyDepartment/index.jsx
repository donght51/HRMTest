import { EllipsisOutlined, LogoutOutlined, PlusOutlined, UserOutlined } from "@ant-design/icons/lib/icons";
import { Table, Button, Space, Typography } from "antd";
const { Column } = Table;

function MyDepartment() {
    const { Title } = Typography;
    const data= [
        {
            id: 1,
            name: 'Sales',
            manager: 'Nguyen Van Quan Ly',
            email: 'hrstaff@test.com',
            staff_count: 3,
            phone: 'string'
        },
        {
            id: 2,
            name: 'Marketing',
            staff_count: 0,
        },
        {
            id: 3,
            name: 'Finance',
            staff_count: 0,
        },
        {
            id: 4,
            name: 'Human Resource',
            staff_count: 0,
        },
        {
            id: 5,
            name: 'Operations',
            staff_count: 0,
        },
        {
            id: 6,
            name: 'Engineering',
            staff_count: 0,
        },
        {
            id: 7,
            name: 'Customer Support',
            staff_count: 0,
        },
        {
            id: 8,
            name: 'Research & Development',
            staff_count: 0,
        },
        {
            id: 9,
            name: 'Quality Assurance',
            staff_count: 0,
        },
        {
            id: 10,
            name: 'Design',
            staff_count: 0,
        },
        {
            id: 11,
            name: 'Chăm sóc khách hàng',
            staff_count: 1,
        },
    ];

    return (<Space direction="vertical" style={{width: 1100}}>
        <Space style={{display: 'flex', justifyContent: 'space-between'}}>
            <Title level={3}>Phòng ban của tôi</Title>
            <Button icon={<LogoutOutlined />} ></Button>
        </Space>
        <Space style={{display: 'flex', justifyContent: 'flex-end'}}>
            <Button type="primary" icon={<PlusOutlined/>}>Thêm phòng ban</Button>
        </Space>
        <hr />
        <Space>
            <Table style={{width: '70vw'}} dataSource={data}>
                <Column title="&nbsp;"
                key="action"
                render={(_, record) => (
                    <Space size="middle">
                        <Button icon={<EllipsisOutlined/>} style={{border: 'none'}}></Button>
                    </Space>
                )} />
                <Column title="ID" dataIndex="id" key="id" />
                <Column title="Tên phòng ban" dataIndex="name" key="name" />
                <Column title="Quản lý" dataIndex="manager" key="manager" />
                <Column title="Số nhân viên" dataIndex="staff_count" key="staff_count" />
                <Column title="Email quản lý" dataIndex="email" key="email" />
                <Column title="Số điện thoại" dataIndex="phone" key="phone" />
            </Table>
        </Space>
    </Space>);
}

export default MyDepartment;