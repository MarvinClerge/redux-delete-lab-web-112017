let id = 0;
export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      const band = {...action.band, id: ++id}
      return { bands: state.bands.concat(band) }
    case 'DELETE_BAND':
      const bands = state.bands.filter(band => {
        return band.id !== action.id
      })
      return {bands}
    default:
      return state;
  }
};
