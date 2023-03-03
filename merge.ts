const collection_1: number[] = [12, 24, 34, 54, 100];
const collection_2: number[] = [15, 30, 54, 85, 123];

var merged_data: number[] = [];

export function merge(collection_1: number[], collection_2: number[]): number[] {

    //assign valeue for looping
    let length_array1: number = collection_1.length;
    let length_array2: number = collection_2.length;

    //create index variable for loopind data in collection
    // i -> collection 1 , j -> collection 2
    let i: number = 0; 
    let j: number = 0;
    let count: number = 0;
    
    // element in collection 1 and collection 2 is exist
    while( i < length_array1 && j < length_array2){
        // case 1 : collection1[i] < collection2[j]
        if(collection_1[i] < collection_2[j]) {
            merged_data[count++] = collection_1[i++];
        }
        // case 2 : collection1[i] > collection2[j]
        else if(collection_1[i] > collection_2[j]){
            merged_data[count++] = collection_2[j++];
        }
        // case 3 : collection1[i] == collection2[j]
        else{
            merged_data[count++] = collection_1[i];
            i++;
            j++;
        }
    }
    
    // only element in collection1 is exist
    while(i < length_array1) {
        merged_data[count++] = collection_1[i++];
    }

    // only element in collection2 is exist
    while(j < length_array1){
        merged_data[count++] = collection_2[j++];
    }
    
    // return output
    return merged_data;
}

console.log(merge(collection_1,collection_2));