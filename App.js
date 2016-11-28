import React from 'react';
class App extends React.Component {
  constructor(){
    super();
    this.state = {data: [
      {id: 1, name: "Xav Bal"},{id: 2, name: "Erce Kal"},
      {id: 3, name: "Liv Sib"},{id: 4, name: "sofi Sof"},
      {id: 5, name: "Mic Gek"},{id: 6, name: "Vaya vay"},
      {id: 7, name: "Ber Kay"},{id: 8, name: "Ece kal"}
    ]}
  }
  render(){
    let rows = this.state.data.map( person => {
      return <PersonRow data={person} />
    })
    return
      <table>
        <tbody>{rows}</tbody>
      </table>
  }
}

const PersonRow = (props) => {
  return <tr>
    <td>{props.data.id}</td>
    <td>{props.data.name}</td>
    </tr>
}

export default App
