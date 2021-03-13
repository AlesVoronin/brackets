//module.exports =
    function check(str, bracketsConfig) {
  // your solution
        let bracketsSize = (bracketsConfig.length * bracketsConfig[0].length)/2;
        const stack = [];

        str.split("");
            for (let i=0; i < str.length; i++){
                for (let j=0; j < bracketsConfig.length; j++){
                    if (str[i] == bracketsConfig[j][0]){
                        stack.push(str[i]);
                    }
                    else if (str[i] == bracketsConfig[j][1]){
                        console.log(stack);
                        console.log(stack.shift())
                        if (stack.length == 0)
                            return false;
                        if (stack.shift() != bracketsConfig[j][0]){
                            return false
                        }
                    }
            }
        }

        return stack.length == 0;
}
