import './App.css';
import { BasicTable } from "./tables/BasicTable"
import { ColumnHiding } from "./tables/ColumnHiding"
import { FilteringTable } from "./tables/FiltertingTable"
import { PaginationTable } from "./tables/PaginationTable"
import { RowSelection } from "./tables/RowSelection"
import { SortingTable } from "./tables/SortingTable"

 
function App() {
  return (
    <div className='App'>
      <BasicTable />
      <div className='space'/>
      <ColumnHiding />
      <div className='space'/>
      <FilteringTable />
      <div className='space'/>
      <PaginationTable />
      <div className='space'/>
      <RowSelection />
      <div className='space'/>
      <SortingTable />
    </div>
  );
}

export default App;
