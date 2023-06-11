import { DatePicker, TimePicker } from 'antd'
import React from 'react'

const AntDatePicker = () => {
  return (
    <div>
          <DatePicker picker='month'></DatePicker>
          <DatePicker.RangePicker></DatePicker.RangePicker>
          <TimePicker></TimePicker>
    </div>
  )
}

export default AntDatePicker
