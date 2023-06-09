import Input from 'antd/es/input/Input'
import React from 'react'
import {UserOutlined} from "@ant-design/icons"

const AntInput = () => {
    return (
        <div>
            <div className='App-header'>
                <Input
                    placeholder='Name'
                    maxLength={10}
                    type='password'
                    prefix={<UserOutlined></UserOutlined>}
                    allowClear
                ></Input>
            </div>
        </div>
    )
}

export default AntInput
