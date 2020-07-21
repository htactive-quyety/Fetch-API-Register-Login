import React, { Component } from 'react'
import { Modal, Form, Input } from 'antd';

export default class EditProduct extends Component {
    state ={
        modalEdit:false
    }
    handleEdit = ({ id, name }) => {
        const { handleEditProp } = this.props;
        handleEditProp(id, name)
        this.setState({
          modalEdit: false,
        });
      }

    handleCancelEdit = e => {
        console.log(e);
        this.setState({
          modalEdit: false,
        });
      };
    
      showEditModal = (id, name) => {
        this.setState({
          modalEdit: true,
          editName: name,
          idEdit: id
        });
    
      };
    render() {
        return (
            <div>
                <Modal
                title="Edit List"
                visible={modalEdit}
                onOk={() => handleEdit(contactEdit)}
                onCancel={handleCancelEdit} >
                <Form.Item label='Name' >
                    <Input onChange={(event) => ({ name: event.target.value })}
                        value={contactEdit.name}
                        onChange={event => setContactEdit({ ...contactEdit, name: event.target.value })}>
                    </Input>
                </Form.Item>
            </Modal>
                
            </div>
        )
    }
}
