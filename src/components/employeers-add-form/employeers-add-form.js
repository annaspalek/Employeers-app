import './employeers-add-form.css';

const EmployeesAddForm = () => {
    return (
        <div className="app-add-form">
            <h3>Niew werknemer</h3>
            <form
                className="add-form d-flex">
                <input type="text"
                    className="form-control new-post-label"
                    placeholder="Naam" />
                <input type="number"
                    className="form-control new-post-label"
                    placeholder="Loon" />

                <button type="submit"
                        className="btn btn-outline-light">Toevoegen</button>
            </form>
        </div>
    )
}

export default EmployeesAddForm;