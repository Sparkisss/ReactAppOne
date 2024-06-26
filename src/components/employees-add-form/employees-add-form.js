import { Component } from 'react';
import './employees-add-form.scss';

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            salary: ''
        }
    }

    onValueChange = (e) => {
        this.setState({            
            [e.target.name]: e.target.value            
        })
}

    render () {
        const {name, salary} = this.state
        const {onAddEnployee} = this.props
        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex">
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Как его зовут?" 
                        name='name'
                        value={name}
                        onChange={this.onValueChange}/>
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $?" 
                        name='salary'
                        value={salary}
                        onChange={this.onValueChange}/>
    
                    <button type="button"
                            className="btn btn-outline-light" onClick={() => onAddEnployee(name ,salary)}>Добавить
                    </button>
                </form>
            </div>
        )
    }
}

export default EmployeesAddForm;