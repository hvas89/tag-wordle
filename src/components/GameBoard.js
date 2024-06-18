function GameBoard({ rows }) {

    return (
        <>
            {
                rows.map((row, rowIndex) => (
                    <div key={'row_' + rowIndex} className="col-12 text-center">
                            {
                                row.map((cell, colIndex) => (
                                    <button 
                                        style={{ 'margin': '2px', 'fontFamily': 'Courier New' }} 
                                        key={'cell_' + rowIndex + '_' + colIndex} 
                                        disabled={true} 
                                        className={'btn btn-lg ' + cell.state.buttonClassName}
                                    >
                                        <strong>{cell.letter || '_'}</strong>
                                    </button>
                                ))
                            }
                    </div>

                ))
            }
        </>
    );
}

export default GameBoard;