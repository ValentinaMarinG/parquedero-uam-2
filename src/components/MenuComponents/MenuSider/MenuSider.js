import React from "react";
import "./MenuSider.scss";
import {useLocation, useNavigate} from "react-router-dom";
import {Menu, Layout, Dropdown, Space} from 'antd';
import { UserOutlined, TeamOutlined, CarOutlined, BarChartOutlined, DownOutlined} from '@ant-design/icons';

export const MenuSider = (props) => {
  const { Sider } = Layout;
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    {key:"/admin/profile",
     icon:<UserOutlined/>,
     label:<span className='navbar-text'>Perfil</span>
    },
    {key:"/admin/users",
     icon:<TeamOutlined />,
     label:<span className='navbar-text'>Usuarios</span>
    },
    {key:"/admin/delegates",
     icon:<TeamOutlined />,
     label:<span className='navbar-text'>Delegados</span>
    },
    {key:"/admin/parkings",
     icon:<CarOutlined />,
     label:<span className='navbar-text'>Parqueaderos</span>,
     submenu:[
        {key:"/crear", label:"Cúpula"},
        {key:"/editar", label:"Gratis"},
        {key:"/pago", label:"pago"}
     ]    
    },
    {key:"/admin/statistics",
     icon:<BarChartOutlined />,
     label:<span className='navbar-text'>Estadisticas</span>
    },
  ];

  const menuClick = (e) => {
    const path = e.key;
    console.log("Di click en el menú " + path);
    navigate(path);
  };

  const itemRender = (item, index) => {
    const { icon, label } = item;
    const isSelected = location.pathname === item.key;
    return (
      <Menu.Item
        key={item.key}
        icon={icon}
        className={
          isSelected ? "ant-menu-item ant-menu-item-selected" : "ant-menu-item"
        }>
          {label}
      </Menu.Item>
    );
  };

  return (
    <Sider className='menu-sider' collapsed={props.menuCollapsed}>
      <Menu
        mode='inline'
        defaultSelectedKeys={[location.pathname]}
        onClick={menuClick}
        items={menuItems}
      >
        <Dropdown 
        menu={{
          menuItems,
          }}
          >
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              Parqueaderos
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
        {menuItems.map((item) => itemRender(item))}
      </Menu>
    </Sider>
  );
};
