// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];


function findMatching(drivers, name){
    return drivers.filter(x => x.toUpperCase().includes(name.toUpperCase()))
}
console.log(findMatching(drivers, 'Bobby'));
console.log(findMatching(drivers, 'Sammy'));
console.log(findMatching(drivers, 'Susan'));



function fuzzyMatch(drivers, name){
    return drivers.filter(x => x.startsWith(name))
}
console.log(fuzzyMatch(drivers, 'Sa'));
console.log(fuzzyMatch(drivers, 'y'));
console.log(fuzzyMatch(drivers, 'mm'));

const driver = [
{
    name: 'Bobby',
    hometown: 'Pittsburgh' },
{
    name: 'Sammy',
    hometown: 'New York' } ,
{
    name: 'Sally',
    hometown: 'Cleveland' },
{
    name: 'Annette',
    hometown: 'Los Angeles' },
{
    name: 'Bobby',
    hometown: 'Tampa Bay' }
];

function matchName(driver, name){
    return driver.filter(x => x.name.toUpperCase().includes(name.toUpperCase()))
}
console.log(matchName(driver, 'Bobby'));
