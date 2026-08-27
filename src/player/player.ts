import type { BoardBase } from '../board/base'
import type { BoardPiece } from '../board/base'

export abstract class Player {
  boardPiece: BoardPiece
  /** player name, etc */
  label: string
  /** @return {number} column number (0-index) */
  abstract getAction(board: BoardBase): Promise<number>
  constructor(boardPiece: BoardPiece, label: string) {
    this.boardPiece = boardPiece
    this.label = label
  }
}
