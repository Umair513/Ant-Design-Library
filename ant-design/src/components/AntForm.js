import { Button, Form, Input } from 'antd'
import React from 'react'

const AntForm = () => {
    const onFinish = (e) => {
        console.log(e)
    }
    return (
        <div className='App'>
            <div className='App-header'>
                <Form onFinish={onFinish}>
                    <Form.Item label="User Name" name="username" >
                        <Input placeholder='User name' required></Input>
                    </Form.Item>
               
                    <Form.Item label="Password" name="password">
                        <Input.Password  maxLength={6} placeholder='Password' required></Input.Password>
                    </Form.Item>
                    <Form.Item>
                        <Button type='primary' htmlType='submit' block>Login</Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

export default AntForm
