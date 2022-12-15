
import './App.css';
import React from "react";
import Circle from "./circle";


class App extends React.Component {

  state = { player: false,
    values: [
      ['', '', '','','','',''], ['', '', '','','','',''],['', '', '','','','',''],
      ['', '', '','','','',''],['', '', '','','','',''],
      ['', '', '','','','','']
    ] ,
  }



  isAvailable = (row, cell) => {
    let available = false;
    if (this.state.values[row][cell] === '') {
      available = true;
    }
    return available;
  }


  printBoard = () => {
    for (let i=0; i<7; i++) {
      for (let j=0; j<6; j++) {
        this.setState(this.state.values[i][j]='x')

      }
    }

}

  cellClicked = (row, cell) => {
   let location= 5;
    const currentValues = this.state.values;
    if (this.state.player===false) {
      while ((currentValues[location][cell]) === "red" ||(currentValues[location][cell]) === "yellow" ) {
        location--
      }
        currentValues[location][cell] = "red"
        this.setState( {
          player: true
        })

    }
    if (this.state.player) {
      while ((currentValues[location][cell]) === "red" ||(currentValues[location][cell]) === "yellow" ) {
              location--
      }
      currentValues[location][cell] = "yellow"
      this.setState( {
        player: false
      })

    }
    this.setState({
      values: currentValues
    })
  }

  render() {
    return (
        <div className="App">
          <table>

            {
              this.state.values.map((row,rowIndex) => {
                return (
                    <tr>
                      {
                        row.map((cell,cellIndex) => {
                          return (

                             <td className={this.state.values[rowIndex][cellIndex]} onClick={() =>this.cellClicked(rowIndex,cellIndex)}>
                             </td>
                          )
                        })
                      }
                    </tr>
                )
              })
            }

          </table>
        </div>
    );

  }
}

export default App;
