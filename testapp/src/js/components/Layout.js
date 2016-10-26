import React from "react";
import { Breadcrumb, Icon } from 'antd';
import MainMenu from './MainMenu';

import '../../css/App.css'

const app_title = 'Testing XXX';

export default class Layout extends React.Component {

  render() {
    return (
      <div className="ant-layout-aside">
          <aside className="ant-layout-sider">
            <div className="ant-layout-logo"></div>
            <MainMenu />
          </aside>
          <div className="ant-layout-main">
            <div className="ant-layout-header"><h1>{app_title}</h1></div>
            <div className="ant-layout-breadcrumb">
              <Breadcrumb>
                <Breadcrumb.Item>Test</Breadcrumb.Item>
                <Breadcrumb.Item>Uno</Breadcrumb.Item>
                <Breadcrumb.Item>Due</Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <div className="ant-layout-container">
              <div className="ant-layout-content">
                <div style={{ height: 590 }}>
                  Content
                </div>
              </div>
            </div>
            <div className="ant-layout-footer">
            Atos Italia S.p.A. © 2016
            </div>
          </div>
        </div>
    );
  }
}
