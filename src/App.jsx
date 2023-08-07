import './App.css'
import React from 'react';
import { Space } from 'antd';
import SideMenu from './Components/SideMenu';
import PageContent from './Components/PageContent';

function App(){
  return <div className='App'>
    <Space className="SideMenuAndPageContent">
      <SideMenu></SideMenu>
      <PageContent></PageContent>
    </Space>
  </div>;
}

export default App;
