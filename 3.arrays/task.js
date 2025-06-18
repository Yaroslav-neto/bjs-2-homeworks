function compareArrays(arr1, arr2) {
  if (arr1.length != arr2.length) {
    return false
  }
  return arr1.every((item, index) => arr2[index] === item)
}

function getUsersNamesInAgeRange(users, gender) {
  if (!users || users.length === 0 || !gender) {
    return 0
  }
  const genderFilter = users.filter((user) => user.gender === gender)

  if (genderFilter.length === 0) {
    return 0
  }
  return (
    genderFilter.reduce((acc, cur) => acc + cur.age, 0) / genderFilter.length
  )
}