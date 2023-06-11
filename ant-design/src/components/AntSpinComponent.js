import { Button, Spin } from 'antd'
import React, { useState } from 'react'

const AntSpinComponent = () => {
    const [loading, setLoading] = useState(false)
    return (
        <div className='App-header'>
            <Spin spinning={loading}>
                <p>P tag 1</p>
                <p>P tag 2</p>
                <p>P tag 3</p>
            </Spin>
            <Button onClick={() => { setLoading(!loading) }}>Toggle</Button>
           
        </div>
    )
}

export default AntSpinComponent
