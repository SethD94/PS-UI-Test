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
  const [isCheckAll, setIsCheckAll] = useState(false);
  const [isCheck, setIsCheck] = useState<Array<string>>([]);
  const [tableData, setTableData] = useState<Array<TTableData>>([])
  const [indeterminate, setIndeterminate] = useState<boolean>(false);

  useEffect(() => {
    switchState ?  
    axios.get('http://localhost:7000/employees').then((response) => { setTableData(response.data); }) : 
    axios.get('http://localhost:7000/employees?status=Active').then((response) => { setTableData(response.data); });
  }, [switchState]);

  const handleSelectAll = (event: any) => {
    setIndeterminate(false);
    setIsCheckAll(!isCheckAll);
    setIsCheck(tableData.map(li => li.id));
    if (isCheckAll) {
      setIsCheck([]);
    }
  };

  const handleClick = (event: any) => {
    setIndeterminate(!indeterminate);
    const { id, checked } = event.target;
    setIsCheck([...isCheck, id]);
    if (!checked) {
      setIsCheck(isCheck.filter(item => item !== id));
    }
  };
  
  const getHeaderColumns = (data :TTableData) =>{
    const columnArray: string[] = Object.keys(data);
    columnArray.splice(0,1);
    const Headers = columnArray.map(column => column.charAt(0).toUpperCase() + column.substring(1).toLowerCase());
    return Headers;
  }

  setSelectedCount(isCheck.length);
  return (
    <>
      {tableData.length > 0 && <StyledTable>
        <table>
          <TableHeader handleSelectAll={handleSelectAll} headerConfig={getHeaderColumns(tableData[0])} isCheckAll={isCheckAll} indeterminate={indeterminate}/>
          <TableRows tableData={tableData} handleClick={handleClick} isCheck={isCheck}/>
        </table> 
      </StyledTable>}   
    </>
  );
}
