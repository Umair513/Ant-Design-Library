import { Select } from 'antd'
import React from 'react'

const SelectDropdown = () => {
    const fruits = ["Banana", "Mango", "Orange", "Cherry"]
  return (
    <div className='App-header'>
          <p>Which are your favorite fruits?</p>
          <Select placeholder="Select Fruit" style={{width:"50%"}} mode='multiple' maxTagCount={2} allowClear>
              {
                  fruits.map((fruit, index) => {
                      return <Select.Option value={fruit} key = {index}>{fruit}</Select.Option>
                  } )
              }
          </Select>
    </div>
  )
}

export default SelectDropdown
