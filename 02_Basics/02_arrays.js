const marvel_Heroes = ['Ironman', 'Thor', 'Spiderman']
const dc_Heroes = ['Flash', 'Batman', 'Superman']

const allHeroes = marvel_Heroes.concat(dc_Heroes)

console.log(allHeroes);

// spread operation 

const all_Hero = [...marvel_Heroes, ...dc_Heroes]

console.log(all_Hero)

const another_array = [6, 7, 8, 9, [11, 65], [36, 85, 88, [35, 74, [64 ,14], [78, 30]], ], ]

const real_another_array = another_array.flat(Infinity)

console.log(real_another_array);

console.log(Array.isArray("Meet"))
console.log(Array.from("MeetKukadiya"))


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))