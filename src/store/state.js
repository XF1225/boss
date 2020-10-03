let defaultcity = '上海'
let defaultID = []
try {
  if (localStorage.city) {
    defaultcity = localStorage.city
  }
  if (localStorage.shoucangID) {
    defaultID = localStorage.shoucangID.split(',')
  }
} catch (e) {}
export default {
  city: defaultcity,
  shoucangID: defaultID
}
