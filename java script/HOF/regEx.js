let pattern = 'pw'

let regExOne = new RegExp(pattern)

let flag = 'gi'
let RegExTwo = new RegExp(pattern, flag)

let regExThree =/pw/gi

const strToCheck = "pW is growing at a rapid speed and recently they are working on PWskills to create skills based pwcontent"

const result = regExThree.test(strToCheck)


const anotherResult = strToCheck.match(regExThree)
console.log(anotherResult);

const oneMoreResult = strToCheck.replace(regExThree, 'p-w')
console.log(oneMoreResult);

const webUrl = "http://pwskills.com/piyush%20singh"

const useableUrl = webUrl.replace(/%20/, '-');
console.log(useableUrl);