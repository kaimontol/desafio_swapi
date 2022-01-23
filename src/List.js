import React, {Component} from "react";

class List extends Component {
    render() {
        const people = this.props.people;
        return (
          <div className="">
            {
                people.map((p) => {
                console.log(p)  
                return (
                    <div key={p.url}>
                        <h1 className="people-name">{p.name}</h1>
                    </div>    
                )  
                })
            }
          </div>
        );
    }
}   

export default List;