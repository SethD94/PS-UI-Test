import './App.css';
import { useState } from 'react';
import Table from './Components/Table/table';
import DropDownButtonList from'./Components/ButtonDropdown/dropdownList'
import { FormControlLabel, Switch } from '@mui/material';

function App() {
  const [showTerminated, setShowTerminated] = useState(false)
  const toggleSwitchHandler = () => setShowTerminated(!showTerminated);
  const [selectedCount, setSelectedCount] = useState(0);

  return (
    <>
      <div className="App-Container">
        <div>
          <h1>UI Test</h1>
          <FormControlLabel sx={{pt:2, pb:3}} control={<Switch checked={showTerminated} onChange={toggleSwitchHandler}/>} label={<span style={{ fontSize: '14px' }}>Show Terminated Employees</span>} />
          <Table switchState={showTerminated} setSelectedCount={setSelectedCount}/> 
          <DropDownButtonList selectedRowCount={selectedCount}></DropDownButtonList>
        </div>
      </div>
    </>
  );
}

export default App;
