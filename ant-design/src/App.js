import logo from './logo.svg';
import './App.css';
import 'antd/dist/reset.css';
import { Button } from 'antd';
import { useState } from 'react';
import {PoweroffOutlined} from "@ant-design/icons"

function App() {
  const [loading, setLoading] = useState(false)
  const onButtonClick = (e) => {
    console.log("Button Clicked")
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }
  return ( 
    <div className="App">
      <div className='App-header'>
        {/* this button will take the full width of its parent */}
        <Button type='primary' block onClick={onButtonClick} loading={loading} icon={<PoweroffOutlined></PoweroffOutlined>}  className='my-button'>Block Button</Button> 
        <Button type='link' href="https://www.google.com">Link Button</Button>
      </div>
    </div>
  );
}

export default App;
