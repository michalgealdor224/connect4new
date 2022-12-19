
import './App.css';
import React from "react";

class App extends React.Component {

  state = { player: false, theWinner: '', ifWin: false,
    values: [
      ['', '', '','','','',''], ['', '', '','','','',''],['', '', '','','','',''],
      ['', '', '','','','',''],['', '', '','','','',''],
      ['', '', '','','','','']
    ] ,
  }

  winner = (row, col) => {
      if (this.winnerByRow(row,col)|| this.winnerByCol(row,col) ||
          this.winnerBySlantLeft(row,col) || this.winnerBySlantRight(row,col)  ) {

          return true;
      }
  }
    winnerBySlantRight = (row, col) => {
        let ifTrue = false;
        let countLeft = 0;
        let countRight = 0;
        let color = this.state.values[row][col];
        let i = 1
        while (color === this.state.values[row - i][col + i]) {
            countRight++;
            if (row > 0 && col < 6) {
                i++
            } else {
                break;
            }
        }
        i = 1;
        if ( row+i < 6 && col-i >=0) {
            while (color === this.state.values[row + i][col - i]) {
                countLeft++;
                if (row+i < 5 && col-i >= 0) {
                    i++
                } else {
                    break;
                }
            }
        }
            if ((countLeft + countRight) >= 3) {
                alert(this.state.values[row][col] + "  winner")
                ifTrue = true;
            }
            return ifTrue;

    }



    winnerBySlantLeft = (row, col) => {
      let ifTrue = false;
      let countLeft = 0;
      let countRight = 0;
      let color = this.state.values[row][col];
      let i = 1
      while (color === this.state.values[row - i][col - i]) {
          countLeft++;
          if (i <= row && i <= col) {
              i++
          } else {
              break;
          }
      }
      i = 1;
      if (i + row < 6 && i + col < 7) {
          while (color === this.state.values[row + i][col + i]) {
              countRight++;
              if (i + row < 5 && i + col < 6) {
                  i++
              } else {
                  break;
              }
          }
          if ((countLeft + countRight) >= 3) {
              alert(this.state.values[row][col] + "  winner")
              ifTrue = true;
          }
          return ifTrue;
      }
  }


  winnerByRow = (row ,col) => {
      let ifTrue = false;
      let countLeft=0;
      let countRight=0;
      let color = this.state.values[row][col]
      let i = 1
      while (color === this.state.values[row][col-i]) {
          countLeft++
          i++
      }
      i = 1
      while (color === this.state.values[row][col+i]) {
          countRight++
          i++
      }
      if ((countLeft + countRight) >=3) {
          alert(this.state.values[row][col] + "  winner")
          ifTrue= true;

      }
      return ifTrue;
  }


  winnerByCol = (row , col) => {
      let ifTrue = false;
      let count =0
     let color = this.state.values[row][col]
          if (row <=2) {
              for (let i = 1; i < 4; i++) {
                  if (this.state.values[row + i][col] === color) {
                      count++
                  }
              }
          }
          if (count === 3) {
              ifTrue = true
              alert(this.state.values[row][col] + "  winner")
          }

      return ifTrue;

  }

  cellClicked = (row, col) => {
   let location= 5;
    const currentValues = this.state.values;
    if (this.state.player===false) {
      while ((currentValues[location][col]) === "red" ||(currentValues[location][col]) === "yellow" ) {
        location--
      }
        currentValues[location][col] = "red"
       if (this.winner(location,col) ) {
           alert(this.state.theWinner +"win")
       }
           this.setState( {
          player: true
        })

    }
    if (this.state.player) {
      while ((currentValues[location][col]) === "red" ||(currentValues[location][col]) === "yellow" ) {
              location--
      }
      currentValues[location][col] = "yellow"
        if ( this.winner(location,col) ) {
            alert(this.state.theWinner +"win")
        }


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
