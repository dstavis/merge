import React, { useState, useEffect } from 'react';
import BoardState from "../classes/boardState"
import './Board.css';

function Board (){
  let [boardState, updateBoardState] = useState()
  
  // Page Load
  useEffect(()=>{ 
    updateBoardState(new BoardState({rows: 10, columns: 10}))
  }, [])

  useEffect( () => {
    console.log({boardState})
    debugger
  }, [boardState])

}
export default Board;