import { Progress } from 'antd'
import React from 'react'

const AntProgress = () => {
  return (
    <div>
          <Progress percent={33}></Progress>
          <Progress percent={56} type='circle' status='exception'></Progress>
          <Progress percent={68} type='line' strokeColor="orange" status='success'></Progress>
          <Progress percent={27} type='line' strokeColor="red" strokeWidth={50} status='active' steps={4}></Progress>
    </div>
  )
}

export default AntProgress
