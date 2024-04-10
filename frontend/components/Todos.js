import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

const StyledTodo = styled.li`
  text-decoration: ${pr => pr.$complete ? 'line-through' : 'initial'};
  cursor: pointer;
`

export default function Todo() {
  const todos = useSelector(st => st.todosState.todos);
  const showCompletedTodos = useSelector(st => st.todosState.showCompletedTodos);
  // TODO: this must come from app state!
  // TODO: enable ability to complete a todo!
  // TODO: enable toggling visibility of complete todos!

  return (
    <div id="todos">
      <h3>Todos</h3>
      <ul>
        {
          todos
            .filter(todo => {
              return showCompletedTodos || !todo.complete
            })
            .map(todo => (
              <StyledTodo $complete={todo.complete} key={todo.id}>
                <span>{todo.label}{todo.complete && ' ✔️'}</span>
              </StyledTodo>
            ))
        }
      </ul>
      <button>
        {showCompletedTodos ? 'Hide' : 'Show'} completed todos
      </button>
    </div>
  )
}
