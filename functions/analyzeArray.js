function analyze(nums)
{
    let object = {
        average: null,
        min:null,
        max:null,
        length:null
    };
    let sortedArray =  nums.sort((a,b) => a-b);

    object.average = Math.ceil((sortedArray.length/2));
    object.min = sortedArray[0];
    object.max = sortedArray[sortedArray.length-1];
    object.length = sortedArray.length;


    return object;
}

export {analyze}