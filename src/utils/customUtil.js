
const customUtils = {
    // 函数节流
    throttle: function (action, delay){
        var last = 0;
        return function (){
            var now = +new Date();
            if(now - last > delay){
                action.apply(this,arguments);
                last = now;
            }
        }
    }
}

export default customUtils