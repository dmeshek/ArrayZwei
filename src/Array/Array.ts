// Array Level 1_1 (sort)
let sortAlphabetically: string[] = [
    "JavaScript",
    "Python",
    "Java",
    "Ruby",
    "PHP",
    "C++",
    "CSS",
    "C#",
    "Go",
    "C",
    "TypeScript",
    "Swift"
];
sortAlphabetically.sort(); // sortiert alles Alphabetisch
console.log(sortAlphabetically); // console gibt dann das Ergebnis raus

let europeanCountries: string[] = [
    "France",
    "Germany",
    "Sweden",
    "Great Britian",
    "Czech Republic",
    "Switzerland"
];
europeanCountries.sort();
console.log(europeanCountries);

// Array Level 1_2 (sort + reverse)
let codingLanguages: string[] = [
    "JavaScript",
    "Python",
    "Java",
    "Ruby",
    "PHP",
    "C++",
    "CSS",
    "C#",
    "Go",
    "C",
    "TypeScript",
    "Swift"
];
codingLanguages.sort();
codingLanguages.reverse();
console.log(codingLanguages);

// Array Level 1_3 (sort)
let numArray1: number[] = [36, 24, 22, 3, 2, 98, 88, 99, 10, 54, 68, 70];
numArray1.sort(function(a, b){return a-b});
console.log(numArray1);

// Array Level 2_1
let laFamilia: string [] = [
"Sergio",
"Hannah",
"Regallager",
"Reilefpfeiler",
"Rentner"
];

function reverse(name:string){
let nameArray = (name.split(''));
nameArray.reverse();
let result = nameArray.join('');
console.log(result);
} 
reverse("Sergio");
reverse("Hannah");
reverse("Regallager");
reverse("Reilefpfeiler");
reverse("Renter");
reverse("Elia mag alle Bohnen");
reverse("an nesaH has ennaH");
// Array Level 2_3 (slice)

// Array Level 1_14 (copy)

// Array Level 3_1