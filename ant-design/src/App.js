import logo from './logo.svg';
import './App.css';
import 'antd/dist/reset.css';
import { Button } from 'antd';
import { useState } from 'react';
import {PoweroffOutlined} from "@ant-design/icons"
import AntButton from './components/AntButton';
import AntInput from './components/AntInput';
import SelectDropdown from './components/SelectDropdown';
import AntForm from './components/AntForm';
import AntTable from './components/AntTable';
import AntDatePicker from './components/AntDatePicker';
import AntSpinComponent from './components/AntSpinComponent';
import AntProgress from './components/AntProgress';
import AntPagination from './components/AntPagination';
import AntRows from './components/AntRows';
import AntIcons from './components/AntIcons';

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
     <AntIcons></AntIcons>
    </div>
  );
}

export default App;
