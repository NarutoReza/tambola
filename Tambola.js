function generateTicket() {
    var col, finalTicket, flag = true, data = [];
   while(flag) {
        col = Array(9).fill(2);
        finalTicket = Array(3);
        finalTicket[0] = Array(9).fill(0);
        finalTicket[1] = Array(9).fill(0);
        finalTicket[2] = Array(9).fill(0);
        var r = uniqueRandomNumber(0, 8, 3);
        for (i = 0; i < r.length; i++) {
            col[r[i]] = 1;
        }
        data = [];
        for (i = 0; i < col.length; i++) {
            data.push(uniqueRandomNumber(0, 2, col[i]));
        }
        for (i = 0; i < data.length; i++) {
            nums = uniqueRandomNumber(((i * 10) + 1), (i * 10) + 10, data[i].length)
            for (j = 0; j < data[i].length; j++) {
                finalTicket[data[i][j]][i] = nums[j];
            }
        }
        flag = getTicket(finalTicket);
    }
    return finalTicket;
}
Array.prototype.count = function(obj){
    var count = this.length;
    if(typeof(obj) !== "undefined"){
      var array = this.slice(0), count = 0;
      for(i = 0; i < array.length; i++){
        if(array[i] == obj){ count++ }
      }
    }
    return count;
  }
function getTicket(ticket){

    for (i=0;i<3;i++)
    {
        var arr = ticket[i];
        count = 0;
        for (j=0;j<arr.length;j++)
        {
            if (arr[j] === 0)
            count++;
        }
        if (count != 4)
        return true;
    }
    return false;
}

function sortNumber (a, b) {
    return a > b ? 1 : b > a ? -1 : 0;
}

function uniqueRandomNumber (min, max, count,sort = true) {
    var random = [];
    for (var i = 0; i < count; i++) {
        flag = true;
        while (flag) {
            r = randomNumber(min, max)
            if (random.indexOf(r) === -1) {
                random.push(r);
                flag = false;
            }
        }
    }
    if (sort)
    random.sort(sortNumber)
    return random;
}
function randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = {
    'generateTicket': generateTicket
}