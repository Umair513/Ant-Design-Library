import { Alert, Button, Form, Input, message } from 'antd'
import React, { useState } from 'react'

const AntForm = () => {
    const [showAlert, setShowAlert] = useState(false)
    const onFinish = (e) => {
        console.log(e)
        setTimeout(() => {
            // message.success("Login Successful")
            // message.error("Login Failed")
            setShowAlert(true)
            // message.warning("Warning")
        },2000)
    }
    return (
        <div className='App'>
            <div className='App-header'>
                {
                    showAlert && <Alert type='error' message="Error" description="There was an error on login" closable></Alert>
                }
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
