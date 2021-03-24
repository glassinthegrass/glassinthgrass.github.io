import React, { Component } from 'react'
import SearchBar from './SearchBar';

class IndividualView extends Component {
  constructor(props) {
      super(props);
      this.state = {
          isEditing: false,
          name: ''
      }
  }
componentDidUpdate(){
    this.props.getSelected()
}
    handleEdit = (id) => {
        this.props.edit(id, this.state.name)
        this.handleToggle()
    }
    handleToggle = () => {
this.setState({isEditing: !this.state.isEditing})
    }
    handleClear = () => {
        this.props.close()
        this.setState({name: ''})
    }
    handleInput = (e) => {
        this.setState({ name: e })
        console.log(this.state.name)
    }

    render() {
    console.log(this.props.selected)
        const { selected } = this.props
        return (
            <div id='view'>
            <div id="selectedPanel">
              <img src={selected.frontPic} alt={selected.name} />
              <img src={selected.frontShinyPic} alt={selected.name} />
                     <img id='mainViewerPic'src={selected.dreamWorldPic} alt={selected.id} />
                     <img src={selected.frontShinyPic} alt={selected.name} />
                     <img src={selected.frontPic} alt={selected.id} />
                </div>
                
                <div >
                    {this.state.isEditing ? (<div>
                        <input type='text' value={this.state.name} onChange={e=> this.handleInput(e.target.value)} />
                        <button onClick={() => this.handleEdit(selected.id)}>Submit</button>
                    </div>
                    ) : (
                        <div>
                            <button onClick={this.handleToggle}>Edit</button>
                        </div>
                    )}
                    <button onClick={this.handleClear}>Add</button>
                    </div>
              </div>
        );
  }
}

export default IndividualView