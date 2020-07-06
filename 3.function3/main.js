function alphabetSort(message){
    // wirte your code here
    // 按照字母的编码进行从小到大排序
    var arr = [];
    // 将字符串转成字符数组
    for(let i = 0; i < message.length(); i++) {
        arr.push(message.charAt(i));
    }
    // 冒泡排序
    for(let j = 0; j < arr.length - 1; i++) {
        for(let k = 0; k < j; k++) {
            if (arr[k] > arr[k+1]) {
                let temp = arr[k+1];
                arr[k+1] = a[k];
                a[k] = temp;
                }
        }
    }
    console.log(arr.toString());
    
  }