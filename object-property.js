const students = [
    {id : 21, name : 'Omar Sunny'},
    {id : 31, name : 'Maannaaaaa'},
    {id : 41, name : 'Moyuri'},
    {id : 71, name : 'Deepjol'}
];

const output = [];

// students.map(element => {
//     const names = element.name;
//     output.push(names);
// })

const allNames = students.map(names => names.name)
const ids = students.map(ids => ids.id);
const bigger40 = students.filter( s => s.id > 40)
const biggerOne = students.find( ids => ids.id > 40)
console.log(biggerOne);