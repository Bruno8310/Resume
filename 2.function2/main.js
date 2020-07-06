function palindrome(message){
    var arr = [];
    // 将字符串转换成字符数组
    for (let i = 0; i < arr.length; i++) {
        arr.push(message.charAt(i));
    }

    for (let i = 0, len = Math.floor(arr.length / 2); i < len; i++) {
           if (arr[i] != arr[arr.length - 1 - i]) {
               return false;
           } else {
               return true;
           }
    }
  }