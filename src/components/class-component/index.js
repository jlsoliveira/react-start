import React from 'react';
import './styles.css'

class ClassComponent extends React.Component{

  state = {
    name : ''
  }

  //arrow function
  changeName = (event) => {
    this.setState({
      name : event.target.value

    })
  }

  newComboBox = () =>{
    const names = ["Hanna", "Johanna", "Oliveira"]

    const comboBoxOptions = names.map( 
      option => 
        <option>
          {option}
        </option>
    )

    return (
      <select>
        {comboBoxOptions}
      </select>
    )

  }

  //component life cycle
  componentDidMount(){
    console.log('Component: componentDidMount')
  }
  componentWillUnmount(){
    console.log('Component: componentWillUnmount')
  }

  render(){
    return(
      <React.Fragment>

        <div className={'component__class'}>
          <h1>Welcome to the class component</h1>
          <input type="text" value={this.state.name}  onChange={ this.changeName } />
          <p>Typed name: {this.state.name} </p>
          <p>Name author project: {this.props.author}</p>
          <p>__________________________________</p>
          <h2>Component Box select options</h2>
          {this.newComboBox()}
        </div>

      </React.Fragment>
      
    )
  }
}

export {ClassComponent}