import React from 'react';
import SelectionBox from './checkBox'
import StyledActive, { StyledTerminated } from './styles';
import { TTableData } from '../../types'

interface IRowProps{
  tableData: TTableData[];
  handleClick: (event: any) =>  void;
  isCheck: string[];
}

export default function TableRows({tableData, handleClick, isCheck}: IRowProps): JSX.Element{
  console.log(tableData);
  const rows = tableData.map(({id, name, department, status}:TTableData, index) =>{
    return(
      <>
        <tr key={index}>
          <td data-label="Select"><SelectionBox key={id} id={id} handleClick={handleClick} isChecked={isCheck.includes(id)}/></td>
          <td data-label="Name">{name}</td>
          <td data-label="Department">{department}</td>
          <td data-label="Status">{status === "Active" ? <StyledActive>{status}</StyledActive> : <StyledTerminated>{status}</StyledTerminated>}</td>
        </tr>
      </>
    )
  });
  return (
      <tbody>
        {rows}
      </tbody>
  )
}
