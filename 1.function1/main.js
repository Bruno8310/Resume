function reverseString(message){
    // 判断是否为字符串
    if (typeof message !="string") {
        return [];
    }
    var arr = [];
    // 将字符串转换成字符数组
    for (let i = 0; i < message.length(); i++) {
        arr.push(message.charAt(i));
    }
    // 反转
    var temp = "";
    for (let j = 0; j < arr.length / 2 + 1; j++) {
        temp = arr[j];
        a[j] = arr[arr.length - 1 - j];
        arr[arr.length - j ] = temp;
    }
        return arr.join();

  }
  reverseString('hello');