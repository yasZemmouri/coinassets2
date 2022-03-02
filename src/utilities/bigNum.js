export const bigNum = function(num) {
    let prefix = ''
    if(num/1000000000>1) {
        num /=1000000000;
        prefix='B'
    }
    else if(num/1000000>1) {
        num /= 1000000;
        prefix='M'
    }
    return [num, prefix];
}
