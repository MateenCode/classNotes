class BasicHost {
    constructor(name,occupation) {
        this.name = name;
        this.occupation = occupation;
    }
    saySpecs() {
                console.log(this.name, this.occupation);
                 }
         
        }

// const host = {
//     name: "tim",
//     occupation: "cowboy",
//     


// console.log("my name is " + about.name + "my occupation is " + about.occupation);


const newHost = new BasicHost("roget ", "creator of Roget's thesaurus");
const  host2 = new BasicHost("khoury ", "software engineer");
const names = [
    "Laila", "Jack", "Harley", "Hertha", "Darren", "Jolene", 
"Loura", "Lona", "Davida", "Reena", "Leland", "Ta", "Jen", 
"Linn", "Roslyn", "Margorie", "Rafaela", "Romona", "Shanel", "Stan"
];

const occupations = [
    "Clerical assistant", "Leaflet distributor", "Landowner",
"Special constable", "Anaesthetist", "Park-keeper", "Butler",
"Choreographer", "Blacksmith", "Chef", "Legal secretary",
"Song writer", "Librarian", "Landscape gardener"
   ];

   const hostArray = [];

   for(let i =0; i <= 100; i++) {
       hostArray.push(new BasicHost());
   }
   console.log(hostArray)
// host2.saySpecs();