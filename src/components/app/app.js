import { Component } from 'react'

import AppInfo from '../app-info/app-info'
import SearchPanel from '../search-panel/search-panel'
import AppFilter from '../app-filter/app-filter'
import EmployeesList from '../employees-list/employees-list'
import EmployeesAddForm from '../employees-add-form/employees-add-form'

import './app.css'

class WhoIsIt extends Component{
    constructor(props) {
        super(props)
        this.state = {
            years: 47,
            position: ''
        }
    }

    nextYear = () => {
        this.setState(state => ({
            years: this.state.years + 1
        }))
    }

    commitInputChanges = (e) => {
        this.setState({
            position: e.target.value
        })
    }
    render() {
        const {name, surname, link} = this.props
        const {position, years} = this.state
        return (
            <div>
                <button onClick={this.nextYear}>+++</button>
                <h1>His name is {name}, surname - {surname}, age - {years}, position - {position}</h1>
                <a href={link}>His profile</a>
                <form >
                    <span>Введите должность</span>
                    <input type="text" onChange={this.commitInputChanges}/>
                </form>
            </div>
        )
    }
}

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                {name: "Ihor Siamykin", salary: 1530, increase: true, rise: true, id: 1},
                {name: "Mad Fool", salary: 750, increase: false, rise: false, id: 2},
                {name: "Kir Fir", salary: 1950, increase: true, rise: false, id: 3}
            ]
        }
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return{
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addItem = (name, salary) => {
        this.setState(prevState => ({
            data: [
                ...prevState.data,
                {
                    name: name,
                    salary: salary,
                    increase: false,
                    rise: false,
                    id: prevState.data.length + 1
                }
            ]
        }))
    }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item
            })
        }))
    }

    // onToggleRise = (id) => {
    //     this.setState(({data}) => ({
    //         data: data.map(item => {
    //             if (item.id === id) {
    //                 return {...item, rise: !item.rise}
    //             }
    //             return item
    //         })
    //     }))
    // }

    render() {
        const employees = this.state.data.length
        const increased = this.state.data.filter(item => item.increase).length
        return (
            <div className="app">
                <AppInfo employees={employees} increased={increased}/>
    
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
                <EmployeesList 
                data={this.state.data}
                onDelete={this.deleteItem}
                onToggleProp={this.onToggleProp}
                />
                <EmployeesAddForm
                onAddEnployee={this.addItem}/>
                <WhoIsIt name='True' surname="Man" link="google.com"/>
            </div>
        )
    }
}

export default App