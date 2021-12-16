import './app-filter.css';

const AppFilter = () => {
    return (
        <div className="btn-group">
            <button 
                className="btn btn-light"
                type="button">
                    Alle medewerkers
            </button>
            <button 
                className="btn btn-outline-light"
                type="button">
                    met handicap
            </button>
            <button 
                className="btn btn-outline-light"
                type="button">
                    60+ jaar
            </button>
        </div>
    )
}

export default AppFilter;