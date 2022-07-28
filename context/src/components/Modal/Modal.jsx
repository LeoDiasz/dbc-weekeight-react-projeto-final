import { Button,  Modal } from 'semantic-ui-react'
import React from 'react'

function exampleReducer(state, action) {
  switch (action.type) {
    case 'close':
      return { open: false }
    case 'open':
      return { open: true, size: action.size }
    default:
      throw new Error('Unsupported action...')
  }
}

const ModalPerson = () => {
  const [state, dispatch] = React.useReducer(exampleReducer, {
    open: false,
    size: undefined,
  })
  const { open, size } = state

  return (
    <>
      <Button onClick={() => dispatch({ type: 'open', size: 'tiny' })}>
        Tiny
      </Button>

      <Modal
        size={size}
        open={open}
        onClose={() => dispatch({ type: 'close' })}
      >
        <Modal.Header>Tem certeza que deseja deletar a pessoa?</Modal.Header>
        <Modal.Content>
          <p>Não ira mais ter registros dela</p>
        </Modal.Content>
        <Modal.Actions>
          <Button negative onClick={() => dispatch({ type: 'close' })}>
            Não
          </Button>
          <Button positive onClick={() => dispatch({ type: 'close' })}>
            Sim
          </Button>
        </Modal.Actions>
      </Modal>
    </>
  )
}

export {ModalPerson}