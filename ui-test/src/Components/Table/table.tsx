import * as React from 'react';
import { useEffect, useState } from 'react';
import { StyledTable} from './styles'
import { TTableData } from '../../types';
import axios from 'axios';
import TableHeader from './tableHeader';
import TableRows from './tableRows';

interface ITableProps{
  switchState: boolean;
  setSelectedCount: (count: number) => void
}

export default function Table({switchState, setSelectedCount}: ITableProps): JSX.Element{
  const [selectAll, setSelectAll] = useState(false);
  const [selectedCheckbox, setSelectedCheckbox] = useState<Array<string>>([]);
  const [tableData, setTableData] = useState<Array<TTableData>>([])
  const [indeterminate, setIndeterminate] = useState<boolean>(false);

  //fetch data based on toggle switch
  useEffect(() => {
    switchState ?  
    axios.get('http://localhost:7000/employees').then((response) => { setTableData(response.data); }) : 
    axios.get('http://localhost:7000/employees?status=Active').then((response) => { setTableData(response.data); });
  }, [switchState]);

  //Toggle all of the checkboxes at once
  const handleSelectAll = (event: any) => {
    setIndeterminate(false);
    setSelectAll(!selectAll);
    setSelectedCheckbox(tableData.map(li => li.id));
    if (selectAll) {
      setSelectedCheckbox([]);
    }
  };
  //Toggle an individual checkbox
  const handleClick = (event: any) => {
    setIndeterminate(!indeterminate);
    const { id, checked } = event.target;
    setSelectedCheckbox([...selectedCheckbox, id]);
    if (!checked) {
      setSelectedCheckbox(selectedCheckbox.filter(item => item !== id));
    }
  };
  //Get the column names based on the object keys
  const getHeaderColumns = (data :TTableData) =>{
    const columnArray: string[] = Object.keys(data);
    columnArray.splice(0,1);
    const Headers = columnArray.map(column => column.charAt(0).toUpperCase() + column.substring(1).toLowerCase());
    return Headers;
  }

  setSelectedCount(selectedCheckbox.length);
  return (
    <>
      {tableData.length > 0 && <StyledTable>
        <table>
          <TableHeader handleSelectAll={handleSelectAll} headerConfig={getHeaderColumns(tableData[0])} isCheckAll={selectAll} indeterminate={indeterminate}/>
          <TableRows tableData={tableData} handleClick={handleClick} isCheck={selectedCheckbox}/>
        </table> 
      </StyledTable>}   
    </>
  );
}
