import { Board } from './board'
import * as Game from './game'
import './style.css'

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.querySelector('.section-canvas') as HTMLCanvasElement

  if (!canvas) {
    console.error('Canvas element not found')
    return
  }
  const initScreenDOM = document.querySelector(
    '.init-screen',
  ) as HTMLDialogElement
  if (!initScreenDOM) {
    console.error('Mode element not found ')
    return
  }
  const board = new Board(canvas)
  board.render()

  const backToModeSelector = document.querySelector(
    '.statusbox-button-back',
  ) as HTMLDivElement

  let currentGameHandler:
    | {
        end: () => void
      }
    | undefined
    | null = null

  backToModeSelector?.classList.add('hidden')
  initScreenDOM.showModal()

  backToModeSelector?.addEventListener('click', () => {
    if (currentGameHandler?.end) {
      currentGameHandler.end()
    }
    window.location.href = '/games.html'
  })

  initScreenDOM.addEventListener('cancel', (ev) => {
    ev.preventDefault()
  })

  initScreenDOM.addEventListener('close', () => {
    backToModeSelector?.classList.remove('hidden')
    currentGameHandler = Game.initGameLocalAi('Player')
  })
})
