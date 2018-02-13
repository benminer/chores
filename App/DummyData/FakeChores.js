import Users from './FakeUsers'

const ChoresList = [
  {
    id: 0,
    chore: 'Clean Toilet',
    dateAssigned: new Date("February 8, 2018"),
    assignedTo: 'Mike',
    complete: false,
    userPicture: require('../Images/mike.jpg')
  },
  {
    id: 1,
    chore: 'Do Dishes',
    dateAssigned: new Date("February 9, 2018"),
    assignedTo: 'Jon',
    complete: true,
    userPicture: require('../Images/jon.jpg')
  },
  {
    id: 2,
    chore: 'Vaccum',
    dateAssigned: new Date("February 3, 2018"),
    assignedTo: 'Ben',
    complete: false,
    userPicture: require('../Images/ben.jpg')
  },
  {
    id: 3,
    chore: 'Sweep Kitchen',
    dateAssigned: new Date("February 1, 2018"),
    assignedTo: 'Ben',
    complete: true,
    userPicture: require('../Images/ben.jpg')
  },
  {
    id: 4,
    chore: 'Chill',
    dateAssigned: new Date("February 6, 2018"),
    assignedTo: 'Daniel',
    complete: true,
    userPicture: require('../Images/daniel.jpg')
  },
  {
    id: 5,
    chore: 'Sweep Kitchen',
    dateAssigned: new Date("February 6, 2018"),
    assignedTo: 'Jon',
    complete: false,
    userPicture: require('../Images/jon.jpg')
  },
  {
    id: 6,
    chore: 'Clean Fridge',
    dateAssigned: new Date("February 5, 2018"),
    assignedTo: 'Mike',
    complete: false,
    userPicture: require('../Images/mike.jpg')
  },
  {
    id: 7,
    chore: 'Dishes',
    dateAssigned: new Date("February 7, 2018"),
    assignedTo: 'Ambre',
    complete: true,
    userPicture: require('../Images/ambre.jpg')
  },
]

export default ChoresList
