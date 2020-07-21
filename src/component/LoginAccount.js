import React, { Component } from 'react'
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons'
import { Row, Col, Modal, Form, Input, Space } from 'antd';
import {withRouter} from 'react-router-dom';

class LoginAccount extends Component {
    state = {
        modalLogin: false,
        notice: '',
        username: '',
        password: '',
        userlogin: null,
        token: '',

    };
    showLoginModal = () => {
        this.setState({
            modalLogin: true,
        });
    };
    handleCancelLogin = e => {
        console.log(e);
        this.setState({
            modalLogin: false,
        });
    };
    handleSupmitLogin = (event) => {
        let obj = {}
        obj.username = this.state.username;
        obj.password = this.state.password;
        
        fetch('https://5ee7355452bb0500161fd5be.mockapi.io/users', {
            method: 'POST',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name: this.state.username, password: this.state.password})
        })
            .then(res => (res.json(), console.log(res)))
            .then(data => this.setState({ data : data }))


        // if (this.state.username === '' || this.state.password === '') {
        //     alert('Please enter username or password')
        // }
        // if (this.state.username === 'admin' || this.state.password === '123') {
        //     alert('Login successfully!!')
        // } else {
        //     alert('Username or password was wrong')
        // }
    }

    render() {
        return (
            <div className='container' >
                <Row>
                    <Col span={6}>
                    </Col>
                    <Col span={12}></Col>
                    <Col span={6}>
                        {/* {this.state.userlogin ? <div>user</div> :
                            <div>
                                <p></p>
                                <a>Thông báo </a>
                                <a onClick=''> Đăng Xuất </a>
                            </div>
                        } */}
                        <p></p>
                        <a>Thông báo </a>
                        <a onClick={this.showLoginModal}> Đăng nhập </a>
                        <a> Đăng ký</a>
                    </Col>
                </Row>
                <Modal

                    title=" LOGIN ACCOUNT"
                    visible={this.state.modalLogin}
                    onOk={this.handleSupmitLogin}
                    onCancel={this.handleCancelLogin}>

                    <Form direction='vertical'>
                        <Form.Item label='UserName: '>
                            <Input placeholder="Please enter Username" required onChange={(event) => this.setState({ username: event.target.value })} value={this.state.username}></Input>
                        </Form.Item>
                        <Form.Item label='PassWord:'>
                            <Space direction="vertical">
                                <Input.Password
                                    placeholder="Please enter Password"
                                    iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                                    onChange={(event) => this.setState({ password: event.target.value })} value={this.state.password}
                                />
                            </Space>
                        </Form.Item>
                    </Form>
                </Modal>
            </div>
        )
    }
}
export default withRouter(LoginAccount);