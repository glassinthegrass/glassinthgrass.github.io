import React, { Component } from 'react'

class IndividualView extends Component {
  constructor(props) {
      super(props);
      this.state = {
          selected: {},
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
    }

    render() {
    console.log(this.props.selected)
        const { selected } = this.props
        return (
            <div >
          
            <div id="selectedPanel">
              <img src={selected.backPic} alt={selected.name} />
                    {selected.name} <img src={selected.frontPic} alt={selected.id} />
                </div>
                <div >
                    {this.state.isEditing ? (<div>
                        <input value={this.state.name} onChange={e => this.setState({name : e.target.value})} />
                        <button onClick={() => this.handleEdit(selected.id)}>Submit</button>
                    </div>
                    ) : (
                        <div>
                            <p>{this.state.name}</p>
                            <button onClick={this.handleToggle}>Edit</button>
                        </div>
                    )}
                    <button onClick={this.handleToggle}>Clear</button>
                    </div>
              </div>
        );
  }
}

export default IndividualView