import { Menu } from "antd";
import { HomeOutlined, UserAddOutlined, TeamOutlined, ClockCircleOutlined, MailOutlined } from "@ant-design/icons/lib/icons";
import { useNavigate } from "react-router-dom";

function SideMenu(){
    const navigate = useNavigate();
    return <div className="SideMenu">
        <Menu
        mode="inline"
        defaultOpenKeys={["/staff","/overtime","/onleave","/another-form","/salary","/contract","/recruitment"]}
        onClick={(item)=>{
            //item.key
            navigate(item.key);
        }}
            items={[
                {
                    label: "Username",
                    key: "/username"
                },
                {
                    label: "Dashboard",
                    key: "/",
                    icon: <HomeOutlined />,
                },
                {
                    label: "Nhân viên",
                    key: "/staff",
                    children: [
                        {label: "Phòng ban", key: "/department", icon: <TeamOutlined />},
                        {label: "Phòng ban của tôi", key: "/my-department", icon: <TeamOutlined />},
                        {label: "Toàn bộ nhân viên", key: "/staff-list", icon: <TeamOutlined />},
                        {label: "Tạo nhân viên mới", key: "/add-staff", icon: <UserAddOutlined/>},
                    ],
                },
                {
                    label: "Tăng ca",
                    key: "/overtime",
                    children: [
                        {label: "Đơn tăng ca nhân viên", key: "/", icon: <ClockCircleOutlined />},
                        {label: "Đơn tăng ca của tôi", key: "/", icon: <ClockCircleOutlined />},
                    ],
                },
                {
                    label: "Nghỉ phép",
                    key: "/onleave",
                    children: [
                        {label: "Đơn nghỉ phép nhân viên", key: "/"},
                        {label: "Đơn nghỉ phép của tôi", key: "/"},
                    ],
                },
                {
                    label: "Đơn khác",
                    key: "/another-form",
                    children: [
                        {label: "Danh sách đơn khác", key: "/", icon: <MailOutlined />},
                        {label: "Đơn khác của tôi", key: "/", icon: <MailOutlined />},
                    ],
                },
                {
                    label: "Quản lý lương",
                    key: "/salary",
                    children: [
                        {label: "Lương nhân viên", key: "/", icon: <TeamOutlined />},
                        {label: "Lương của tôi", key: "/", icon: <TeamOutlined />},
                    ],
                },
                {
                    label: "Hợp đồng",
                    key: "/contract",
                    children: [
                        {label: "Hợp đồng nhân viên", key: "/", icon: <MailOutlined />},
                        {label: "Hợp đồng của tôi", key: "/", icon: <MailOutlined />},
                    ],
                },
                {
                    label: "Tuyển dụng",
                    key: "/recruitment",
                    children: [
                        {label: "Danh sách ứng viên", key: "/", icon: <TeamOutlined />},
                    ],
                },
        ]}>


        </Menu>
    </div>;
}
export default SideMenu;