

const intersect = (nums1,nums2) => {
    let intersection = nums1.filter(x => nums2.includes(x));
    return intersection
    // A new array with the elements that pass the test. If no elements pass the test, 
    // an empty array will be returned.
}

nums1 = [1,2,2,1], nums2 = [2,2]
console.log(intersect(nums1,nums2))
