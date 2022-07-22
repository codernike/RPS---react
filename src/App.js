import React, { Component } from "react"
import rock from "./rock.png"
import paper from "./paper.png"
import scissors from "./scissors.png"
import "./App.css"
import Footer from './lib/footer'
import Navbar from './lib/navbar'
class App extends Component {

    state = { stateHumanChoice: '', stateMachineChoice: '', stateWinnerRound: '' }

    play = (humanChoice) => {
        this.setState({ stateHumanChoice: humanChoice })
        let machineChoice = this.decideComputerChoice();
        this.setState({ stateMachineChoice: machineChoice })
        let winner = this.decideWinnerRound(humanChoice, machineChoice);
        this.setState({ stateWinnerRound: winner })

  

    }

    decideComputerChoice = () => {
        let machineChoice = '';
        const computerChoiceNumber = Math.floor(Math.random() * 3);

        if (computerChoiceNumber === 0) {
          
            machineChoice = 'rock'
        } else if (computerChoiceNumber === 1) {
         
            machineChoice = 'paper'
        } else if (computerChoiceNumber === 2) {
            
            machineChoice = 'scissors'
        }
        return machineChoice;

    }

    decideWinnerRound = (humanChoice, machineChoice) => {

        let winner = '';

        if (humanChoice === 'rock') {
            if (machineChoice === 'scissors') {
                winner = 'You';
            } else if (machineChoice === 'paper') {
                
                winner = 'Computer'

            }
            else if (machineChoice === 'rock') {
                winner = 'Tie'
            }
        }

        if (humanChoice === 'paper') {
            if (machineChoice === 'scissors') {
               
                winner = 'Computer';
            } else if (machineChoice === 'paper') {
               
                winner = 'Tie'

            }
            else if (machineChoice === 'rock') {
                winner = 'You'
            }
        }

        if (humanChoice === 'scissors') {
            if (machineChoice === 'scissors') {
               
                winner = 'Tie';
            } else if (machineChoice === 'paper') {
              
                winner = 'You'

            }
            else if (machineChoice === 'rock') {
                winner = 'Computer'
            }


        }
        return winner;

    }





    render() {
        return (
          <>
          <Navbar/>
  <div ></div>
  <div class="container">

  
            <div>
                <h1 className="title" style={{marginTop:'70px'}}>Rock Paper Scissors ! </h1>

                <div className='pic'>
                    <input className='individual-pic' type='image' src={rock} alt='img' onClick={() => this.play("rock")} />
                    <input className='individual-pic' type='image' src={paper} alt='img' onClick={() => this.play("paper")} />
                    <input className='individual-pic' type='image' src={scissors} alt='img' onClick={() => this.play("scissors")} />
                </div>

                <p className='announcement'> you chose {this.state.stateHumanChoice}</p>
                <p className='announcement'> Computer chose {this.state.stateMachineChoice}</p>
                <p className='announcement'> And the Winner is .... {this.state.stateWinnerRound}
                    {this.state.stateWinnerRound === 'You' ?
                        <p> Congrats ! </p> :
                        <p>:(</p>}
                </p>

            </div></div>
  <Footer/></>
        );
    }
}

export default App;