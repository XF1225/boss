export default {
  changeCity (state, city) {
    state.city = city
    try {
      localStorage.city = city
    } catch (e) {}
  },
  shoucang (state, val) {
    for (let i = 0; i < state.shoucangID.length; i++) {
      if (state.shoucangID[i] === val) {
        state.shoucangID.splice(i, 1)
        localStorage.shoucangID = state.shoucangID
        return
      }
    }
    state.shoucangID.push(val)
    try {
      localStorage.shoucangID = state.shoucangID
    } catch (e) {}
  }
}
