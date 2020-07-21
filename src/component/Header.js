import React, { Component } from 'react'
import logo from './asset/images/logoheader.png'
import { Menu, Row, Col } from 'antd'
import './asset/header.css'
import {BrowserRouter as Router,Switch, Link} from 'react-router-dom'
import ProductList from './ProductList'
// import AddProduct from './AddProduct'
import Service from './Service'

export default class Header extends Component {
    render() {
        return (
            <Router>
                <div className='container' >
                    <div className='menuHeader'>

                        <Row>

                            <Col span={6}>
                                <img src={logo} alt="logoheader" />
                                <p>Luôn Bên Bạn :)))</p>
                            </Col>
                            <Col span={4}></Col>
                            <Col span={14}>
                                <Menu mode='horizontal'>
                                    <Menu.Item><Link to='/'>HOME</Link> </Menu.Item>
                                    <Menu.Item><Link to='/Service'>SERVICE</Link></Menu.Item>
                                    <Menu.Item>PORTFOLIOS</Menu.Item>
                                    <Menu.Item>BLOGS</Menu.Item>
                                    <Menu.Item>CONTACT</Menu.Item>
                                </Menu>
                            </Col>
                        </Row>

                    </div>
                </div>
                <Switch>
                    <Router exact path='/'>
                    {/* <AddProduct/> */}
                        <ProductList />
                    </Router>
                    <Router exact path='/Service'>
                    <Service />
                    </Router>
                </Switch>
            </Router>

        )
    }
}
