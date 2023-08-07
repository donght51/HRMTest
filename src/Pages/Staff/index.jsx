import { EllipsisOutlined, LogoutOutlined, PlusOutlined, DownOutlined, UserOutlined } from "@ant-design/icons/lib/icons";
import { Table, Button, Space, Typography, Input, Dropdown } from "antd";
const { Column } = Table;

function Staff() {
    const { Title } = Typography;
    const data= [
        {
            id: 1,
            name: 'Van Nguyen',
            department_name: 'Sales',
            phone: 'string',
            gender: 'Nữ',
            email: 'hrmanager@test.com',
            bank: 'string',
            date_of_birth: '6 tháng 7 năm 2023',
            address: 'string',
            country: 'string',
            bank_account: 'string',
        },
        {
            id: 2,
            name: 'Nguyen Van Quan Ly',
            department_name: 'Sales',
            phone: 'string',
            gender: 'Nam',
            email: 'hrstaff@test.com',
            bank: 'string',
            date_of_birth: '6 tháng 7 năm 2003',
            address: 'string',
            country: 'string',
            bank_account: 'string',
        },
        {
            id: 3,
            name: 'Nguyen Van Nhan Vien',
            department_name: 'Chăm sóc khách hàng',
            phone: 'string',
            gender: 'Nam',
            email: 'staff@test.com',
            bank: 'string',
            date_of_birth: '6 tháng 7 năm 2005',
            address: 'string',
            country: 'string',
            bank_account: 'string',
        },
        {
            id: 4,
            name: 'string string',
            department_name: 'Sales',
            phone: 'string',
            gender: 'Nam',
            email: 'test1@gmail.com',
            bank: 'string',
            date_of_birth: '4 tháng 8 năm 2023',
            address: 'string',
            country: 'string',
            bank_account: 'string',
        },
    ];
    const handleMenuClick = (e) => {
        message.info('Click on menu item.');
        console.log('click', e);
      };
      const items = [
        {
          label: '1st menu item',
          key: '1',
          icon: <UserOutlined />,
        },
        {
          label: '2nd menu item',
          key: '2',
          icon: <UserOutlined />,
        },
        {
          label: '3rd menu item',
          key: '3',
          icon: <UserOutlined />,
          danger: true,
        },
        {
          label: '4rd menu item',
          key: '4',
          icon: <UserOutlined />,
          danger: true,
          disabled: true,
        },
      ];
    const menuProps = {items, onClick: handleMenuClick,};

    return (<Space direction="vertical" style={{width: 1100}}>
        <Space style={{display: 'flex', justifyContent: 'space-between'}}>
            <Title level={3}>Danh sách nhân viên</Title>
            <Button icon={<LogoutOutlined />} ></Button>
        </Space>
        <Space style={{display: 'flex', justifyContent: 'space-between', padding: '20px', border: 'none', borderRadius: '5px', boxShadow: '1px 1px 2px grey'}}>
            <Space>
                <Input placeholder="Tìm kiếm"></Input>
                <Dropdown menu={menuProps}>
                <Button>
                    <Space>
                    Toàn bộ phòng ban
                    <DownOutlined />
                    </Space>
                </Button>
                </Dropdown>
                <Button>Làm mới</Button>
            </Space>
            <Button type="primary" icon={<PlusOutlined/>}>Thêm phòng ban</Button>
        </Space>
        <Space>
            <Table style={{width: '72vw', overflow: 'auto'}} dataSource={data} scroll={{x: 1500}}>
                <Column title="&nbsp;"
                key="action"
                render={(_, record) => (
                    <Space size="middle">
                        <Button icon={<EllipsisOutlined/>} style={{border: 'none'}}></Button>
                    </Space>
                )} />
                <Column title="ID" dataIndex="id" key="id" />
                <Column title="Tên nhân viên" dataIndex="name" key="name" />
                <Column title="Tên phòng ban" dataIndex="department_name" key="department_name" />
                <Column title="Số điện thoại" dataIndex="phone" key="phone" />
                <Column title="Giới tính" dataIndex="gender" key="gender" />
                <Column title="Email" dataIndex="email" key="email" />
                <Column title="Ngân hàng" dataIndex="bank" key="bank" />
                <Column title="Ngày sinh" dataIndex="date_of_birth" key="date_of_birth" />
                <Column title="Địa chỉ" dataIndex="address" key="address" />
                <Column title="Quốc gia" dataIndex="country" key="country" />
                <Column title="TK ngân hàng" dataIndex="bank_account" key="bank_account" />
            </Table>
        </Space>
    </Space>);
}

export default Staff;