import React from 'react'
import {Form,Input} from 'antd'

export default props => {
    return (
        <div className='modal'>
            <span className='close'>X</span>
            <Form>
                <Form.Item label='Name Product'>
                    <Input></Input>
                </Form.Item>
                <Form.Item label='Price'>
                    <Input></Input>
                </Form.Item>
            </Form>

        </div>
    )
}