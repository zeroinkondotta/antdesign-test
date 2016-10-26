import React from 'react';
import { Menu, Icon } from 'antd';

const SubMenu = Menu.SubMenu;

export default class MainMenu extends React.Component {
  render() {
    return (
      <Menu mode="inline" theme="dark"
        defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']}>
        <SubMenu key="sub1" title={<span><Icon type="user" />Profilo</span>}>
          <Menu.Item key="1">Modifica profilo</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" title={<span><Icon type="laptop" />Servizi Default</span>}>
          <SubMenu key="sub21" title={<span><Icon type="laptop" />Fornitore Transitorio</span>}>
            <Menu.Item key="2">Attivazione Servizio</Menu.Item>
            <Menu.Item key="3">Visualizza/Modifica Richieste</Menu.Item>
            <Menu.Item key="4">Firma</Menu.Item>
          </SubMenu>
        </SubMenu>
        <SubMenu key="sub3" title={<span><Icon type="notification" />Amministrazione</span>}>
          <Menu.Item key="9">Deadline</Menu.Item>
          <Menu.Item key="10">Cache</Menu.Item>
          <Menu.Item key="11">Behalf Of</Menu.Item>
        </SubMenu>
      </Menu>
    );
  }
}
