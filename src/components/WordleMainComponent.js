import { useState } from "react";
import { gameStateAfter_backspacePressed, gameStateAfter_enterPressed, gameStateAfter_letterPressed, initialGameState } from "../gamelogic/GameStateManager";
import GameBoard from "./GameBoard";
import Keyboard from "./Keyboard";

function WordleMainComponent() {

    const [gameState, setGameState] = useState(initialGameState())

    const reset = () => setGameState(initialGameState())
    const letterCallback = (letter) => setGameState(gameStateAfter_letterPressed(letter, gameState))
    const enterCallback = () => setGameState(gameStateAfter_enterPressed(gameState))
    const backspaceCallback = () => setGameState(gameStateAfter_backspacePressed(gameState))

    return (
        <>
            <h1 className="text-center text-light"><strong>W O R D L E</strong></h1>
            <hr />
            <div className="row">
                <div className="col-12 text-center">
                    <button className="btn btn-info">
                        <a href="https://www.wikihow.com/Play-Wordle" target="_blank" rel="noreferrer">HELP</a>
                    </button>
                    &nbsp;
                    <button className="btn btn-warning" onClick={reset}>RESET</button>
                </div>
            </div>
            <br/>
            <GameBoard rows = {gameState.rows} />
            <br/>

            {
                gameState.gameOver && (
                    <>
                        <h4 className="text-center">Game Completed, Word is: {gameState.chosenWord}</h4>
                        <br />
                    </>
                )
            }

            <Keyboard 
                gameOver={gameState.gameOver} letters={gameState.letters} 
                letterCallback={letterCallback} enterCallback={enterCallback} backspaceCallback={backspaceCallback} 
            />
        </>
    );
}

export default WordleMainComponent;
