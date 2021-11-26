import React, { Component } from 'react'
import Child from './Child'

 class Parent extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              parentName: 'parent'
         }

        // this.callParent = this.callParent.bind(this)
     }

     callParent =(childName) =>{
         console.log(this)
        alert(`calling ${this.state.parentName} from ${childName}` )
     }
     
    render() {
        return (
            <div>
                <h1>Parent Component</h1>
                <Child callParent={this.callParent} />
            </div>
        )
    }
}

export default Parent
