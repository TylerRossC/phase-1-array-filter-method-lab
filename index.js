//describe('findMatching()', function () {
    //it('returns all drivers that match the passed in name', function () {
      //const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
      //expect(findMatching(drivers, 'Bobby')).to.eql(['Bobby', 'Bobby']);
      //expect(findMatching(drivers, 'Sammy')).to.eql(['Sammy']);
function findMatching(drivers, name) {
    return drivers.filter(function(person) {
        return person.toLowerCase().indexOf(name.toLowerCase()) !== -1
    })
}
//it('returns a driver if beginning provided letters match', function () {
    //expect(fuzzyMatch(drivers, 'Sa')).to.have.members(['Sammy', 'Sarah', 'Sally']); 
//it('does not return drivers if only middle or ending letters match', function () {
    //expect(fuzzyMatch(drivers, 'y')).to.have.members([]);
//it('does not return drivers if only middle or ending letters match', function () {
    //expect(fuzzyMatch(drivers, 'mm')).to.have.members([]);
function fuzzyMatch(drivers, match){
    let matchLength = match.split('').length;
    return drivers.filter(function(element) {
        return element.split('').slice(0, matchLength).join('') === match
    })
}
//This function takes an array of driver objects and a string as arguments. 
//Each driver object has two properties: name and hometown. 
//The function should return each element whose name property matches the provided string argument.
function matchName(drivers, match) {
    let filteredDrivers = drivers.filter(function(element) {
        return element.name === match
    })
    return filteredDrivers;
}