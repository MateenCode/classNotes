const arr = [1,0,1,1];
const k = 1;

const nums = [1,2,3,1,2,3]; 
 const j = 2;



const containsNearbyDuplicate = (nums, j) => {
    let visited = []
    for(let i = 0; i < nums.length; i++) {
        let number = nums[i]
        //take index I am at  i and subtract it from the first index of the duplicated number
        if(visited[number] !== undefined && i - visited[number] <= k ) {
            return true
        }
        visited[number] = i
    }
    return false

}
console.log(containsNearbyDuplicate(nums, k)); //true