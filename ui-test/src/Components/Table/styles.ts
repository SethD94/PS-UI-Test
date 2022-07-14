import styled from "styled-components";

const StyledActive = styled.div`
  background-color: #21BA45; /* Green */
  border-radius: 5px;
  color: white;
  padding: 5px 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  
`;
export default StyledActive;

export const StyledTerminated = styled.div`
  background-color: #000; /* Green */
  border-radius: 5px;
  color: white;
  padding: 5px 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
`;


export const StyledTable = styled.div`
max-width:900px;
height: 100%;
table {
  border-collapse: collapse;
  margin: 0;
  padding: 0;
  width: 100%;
  table-layout: fixed;
}
table tr {
  border-bottom: 1px solid #ddd;
}
table th:first-child,
table td:first-child {
  padding: 0.3em;
  text-align: center;
  font-size: 16px;
}
table th,
table td {
  padding: 1.5em;
  text-align: left;
  font-size: 16px;
}
table th:last-child{
  text-align: right;
}
table td:last-child{
  text-align: right;
  font-size: 14px;
}
table th {
  font-size: .85em;
  letter-spacing: .1em;
}
@media screen and (max-width: 767px) {
  table {
    border: 0;
  }
  table thead tr th:first-child::after {
    content: "Select All";

  }
  table thead tr th:not(:first-child){
    visibility: hidden;
  }
  table tr {
    border-bottom: 1px solid #ddd;
    display: block;
    margin-bottom: .625em;
  }
  table td {
    display: block;
    font-size: .8em;
    text-align: right;
  }
  table td::before {
    /*
    * aria-label has no advantage, it won't be read inside a table
    content: attr(aria-label);
    */
    content: attr(data-label);
    float: left;
    font-weight: bold;
    text-transform: uppercase;
  }
  table td:last-child {
    border-bottom: 0;
  }
}

`;
