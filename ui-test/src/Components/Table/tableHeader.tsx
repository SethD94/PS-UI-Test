import React from 'react'
import SelectionBox from './checkBox'

interface IHeaderProps{
  indeterminate: boolean;
  headerConfig: string[];
  handleSelectAll: (event:any) => void;
  isCheckAll: boolean
}

export default function TableHeader({headerConfig, handleSelectAll, indeterminate, isCheckAll}: IHeaderProps): JSX.Element{
  return (
    <thead>
      <tr>
        <th scope="col"><SelectionBox indeterminate={indeterminate} name="selectAll" id="selectAll" handleClick={handleSelectAll} isChecked={isCheckAll} ></SelectionBox></th>
        {headerConfig.map((headerTitle, index) => <th key={index} scope="col">{headerTitle}</th>)} 
      </tr>
    </thead>
  )
}
