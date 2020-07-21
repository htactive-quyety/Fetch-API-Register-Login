import React, { Component } from 'react'
import { PlusOutlined } from '@ant-design/icons'
import { Button, Modal, Form, Input } from 'antd';

export default class AddProduct extends Component {
    state ={
        modalAdd:false
    }
    showAddModal = () => {
        this.setState({
            modalAdd: true,
        });
    };
    handleCancelAdd = e => {
        console.log(e);
        this.setState({
          modalAdd: false,
        });
      };
      handleAddProduct = () => {
        const { handleOKProp } = this.props;
        handleOKProp(this.state.addName)
        this.setState({
          modalAdd: false,
        });
      };
    render() {
        return (
            <div className='container'>
                    <Button id='buttonAdd' onClick={this.showAddModal}> <PlusOutlined /></Button>
                    <Modal

                        title="Add New Product"
                        visible={this.state.modalAdd}
                        onOk= {this.handleAddProduct}
                        onCancel={this.handleCancelAdd}
                    >
                        {/* contenteditable="true" */}
                        <Form>
                            <Form.Item label='Name Product'>
                                <Input></Input>
                            </Form.Item>
                            <Form.Item label='Price'>
                                <Input></Input>
                            </Form.Item>
                        </Form>
                    </Modal>
                
            </div>
        )
    }
}
