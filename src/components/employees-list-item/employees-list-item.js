import { Component } from 'react';
import './employees-list-item.css';

class EmployeesListItem extends Component{
    constructor(props) {
        super(props)
        this.state = {
            increase: false,
            raise: false
        }
    }

    oneIncrease = () => {
        this.setState(({increase}) => ({
            increase: !increase
        }))
    }

    oneRaise = () => {
        this.setState(({raise}) => ({
            raise: !raise
        }))
    }

    render() {
        const {name, salary, onDelete} = this.props
        const {increase, raise} = this.state
        let classNames = "list-group-item d-flex justify-content-between"
        if (increase ) {
            classNames += ' increase'
        }
        if (raise) {
            classNames += ' like'
        }
        return (
            <li className={classNames}>
                <span className="list-group-item-label" onClick={this.oneRaise}>{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                        className="btn-cookie btn-sm "
                        onClick={this.oneIncrease}>
                        <i className="fas fa-cookie"></i>
                    </button>
    
                    <button type="button"
                            className="btn-trash btn-sm "
                            onClick={onDelete}>
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )
    }

}

export default EmployeesListItem;