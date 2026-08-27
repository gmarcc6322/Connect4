import { BoardPiece } from '../board/base'
import { PlayerAi } from '../player/player-ai'
import { PlayerHuman } from '../player/player-human'
import { GameLocal, initGameLocal } from './game-local'

class GameLocalAi extends GameLocal {}
export function initGameLocalAi(playerName: string) {
  const firstPlayer = new PlayerHuman(BoardPiece.PLAYER_1, playerName)
  const aiPlayer = new PlayerAi(BoardPiece.PLAYER_2, `AI Player`)
  return initGameLocal(GameLocalAi, firstPlayer, aiPlayer)
}
