

import './app-info.css';

const AppInfo = ({employees, increased}) => {
    return (
        <div className="app-info">
            <h1>Boekhouding van werknemers in het bedrijf ***</h1>
            <h2>het totaal aantal werknemers: {employees}</h2>
            <h2>werknemers increased: {increased}</h2>
        </div>
    )
}

export default AppInfo;