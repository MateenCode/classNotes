const sumArray = (numbers) => {
    let sum = 0;

    for( let i = 0; i < numbers.length; i ++) {
        sum += numbers[i]
    }

    return sum
}

const array = [5, 76, 40, 48, 24, 28, 62, 100, 99, 22, 95, 72, 91]

const start = new Date()
console.log(sumArray(array))
const end = new Date()

const timeElapsed = end - start
console.log(`Fnished in ${timeElapsed} ms`)



//  O(1)

const getFirstSongFromPlaylist = (array) => {
    console.log(array[0])
}

const views = ["Deep Pockets", "When to say When", "Chicago FreeStyle", "Not you Too","Tootsie Slide", "Desires", "Time Flies", "Landed", "DFL","Pain 1993", "Losses", "From Florida with Love", "Demons", "War" ]

getFirstSongFromPlaylist(views)


//  O(n)

const printSongs = (array) => {
    for (let i = 0; i < array.length; i++) {
      console.log(array[i])
    }
  }

  printSongs(views)

  //  O(n^2)

  // Drake Views and Nothing was the Same
  const twoAlbums = [ 
      ["Deep Pockets", "When to say When", "Chicago FreeStyle", "Not you Too","Tootsie Slide", "Desires", "Time Flies", "Landed", "DFL","Pain 1993", "Losses", "From Florida with Love", "Demons", "War"], 
      [	"Tuscan Leather", "Furthest Thing", "Started From the Bottom", "Wu-Tang Forever","Own It", "Worst Behavior", "From Time", "Hold On, We're Going Home", "Connect","The Language", "305 To my City", "Too Much", "Pound Cake"], 
    ]
  const PrintSongsWithinAlbums = (twoAlbums) => {
    for (let i = 0; i < twoAlbums.length; i++) {
      for (let j = 0; j < twoAlbums[i].length; j++) {
        console.log(twoAlbums[i][j])
      }
    }
  }

  PrintSongsWithinAlbums(twoAlbums)

  // O(log(n))
  function binarySearch(arr, item, first = 0, last = null) {
    if (!last) last = arr.length
    let midpoint = Math.floor((last - first) / 2) + first
    if (arr[midpoint] === item) return midpoint
    if (arr[midpoint] > item) return binarySearch(arr, item, first, midpoint)
    if (arr[midpoint] < item) return binarySearch(arr, item, midpoint, last)
}

const arr = [5, 76, 40, 48, 24, 28, 62, 100, 99, 22, 95, 72, 91]


let answer = binarySearch(arr, 72)
console.log(answer)

// O(n!)

const factorial = n => {
    let num = n;

    if (n === 0) return 1
    for (let i = 0; i < n; i++) {
        console.log(num)
        num = n * factorial(n - 1);
    };

    return num;
    };

    // factorial(1); // 2 Milliseconds
   const fact =  factorial(5); // 3 Milliseconds
    // factorial(10); // 85 Milliseconds
    
    console.log(fact)