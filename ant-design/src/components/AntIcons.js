import React from 'react'
import Icon, { PauseCircleFilled, PieChartOutlined, AppleFilled, LoadingOutlined, BankTwoTone } from '@ant-design/icons'
import { Button, Divider } from 'antd'
const AntIcons = () => {
    const HeartIcon = (props) => {
        return <Icon
            component={() => {
                return <svg>

                </svg>
            }}
            {...props}
        ></Icon>
    }
    return (
        <div className='App-header'>
            <div>
                <PieChartOutlined style={{ color: "purple", fontSize: 100 }} />
                <AppleFilled style={{ color: "green", fontSize: 100 }} />
                <LoadingOutlined style={{ color: "yellow", fontSize: 100 }} />
                <BankTwoTone twoToneColor="red" style={{ fontSize: 100 }} />
                <Divider></Divider>
                <Button icon={
                    <PauseCircleFilled />
                }>Button With Custom Icon</Button>
            </div>
        </div>
    )
}

export default AntIcons
