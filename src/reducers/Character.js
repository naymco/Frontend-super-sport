const initialState = {
  character: []
};

function Character(state = initialState, actions) {
  switch (actions.type) {
    case "GET_CHARACTER":
      return state.character;
    case "ADD_CHARACTER":
      return {
        ...state,
        character: character.push(actions.payload)
      };
  }
}

export default Character;
