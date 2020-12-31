// const milkyWay = {
//     type:"barred sprial",
//     age:"13,600,000,000",
//     containsEarth: false

// }
// console.log(milkyWay.containsEarth);

// // 4

// milkyWay.containsEarth = true;
// console.log(milkyWay.containsEarth);

// // 6

// milkyWay.numberOfStars = "100 -400 billion";
// console.log(milkyWay);

// the solar system p1

const solarSystem = [
	{ name: "Mercury", ringSystem: false, moons: [] },
	{ name: "Venus", ringSystem: false, moons: [] },
	{ name: "Earth", ringSystem: false, moons: ["The Moon"] },
	{ name: "Mars", ringSystem: false, moons: ["Phobos", "Deimos"] },
	{ name: "Jupiter", ringSystem: true, moons: ["Europa", "Ganymede", "Io", "Callisto"] },
	{ name: "Saturn", ringSystem: true, moons: ["Titan", "Enceladus", "Rhea", "Mimas"] },
	{ name: "Uranus", ringSystem: true, moons: ["Miranda", "Titania", "Ariel", "Umbriel"] },
	{ name: "Neptune", ringSystem: true, moons: ["Triton", "Nereid"] }
];

// 1

// console.log(solarSystem[5].moons);

// // 2

// console.log(solarSystem[7].moons[1]);

// 3

solarSystem[1].moons.push("Endor","test" );
console.log(solarSystem);

// 4

solarSystem.push([
    {
        name: "Pluto"
    },
    {
        ringSystem: false
    },
    {
        moons: [1,2,3]
    }
])