import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeersList from '../employeers-list/employeers-list'; 
import EmployeesAddForm from '../employeers-add-form/employeers-add-form'; 

import './app.css';

function App() {

    const data = [
        {name: 'Dirk M.', salary: 1800, increase: false},
        {name: 'Koen D.', salary: 1700, increase: true},
        {name: 'Mark K.', salary: 2200, increase: false},
    ];

    return (
        <div className="app">
            <AppInfo/>

            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>

        <EmployeersList data={data}/>
        <EmployeesAddForm/>
        </div>
    );
}

export default App;