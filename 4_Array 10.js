let first = -1, second = -1;
        let arr = [24, 17, 18, 3, 8, 20, 28, 4, 16, 29]

        for (let i = 0; i <= arr.length - 1; i++) {
            if (arr[i] > first) {
                second = first;
                first = arr[i];
            }
            else if (arr[i] > second && arr[i] != first) {
                second = arr[i];
            }
        }
        console.log(first);
        console.log(second);