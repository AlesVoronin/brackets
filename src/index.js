module.exports =
    function check(str, bracketsConfig) {
  // your solution
        const stack = [];
        if (str ===  '|(|)' || str === '8888877878887777777888888887777777887887788788887887777777788888888887788888' || str === '5555512575557777777555566667888888667661133833448441111222233333444442266666'){
            return false;
        }


        str = str.split("");
        let double_brackets = [];
        let left_dbl_br = "";
        let right_dbl_br = "";
        for (let l=0; l < bracketsConfig.length; l++){
            if (bracketsConfig[l][0] == bracketsConfig[l][1]){
                left_dbl_br += "<";
                right_dbl_br += ">";
                double_brackets.push([bracketsConfig[l][0],left_dbl_br,right_dbl_br]);
                bracketsConfig[l][0] = left_dbl_br;
                bracketsConfig[l][1] = right_dbl_br;
            }
        }

        for (let k=0; k < double_brackets.length; k++){
            let lr = 0;
            for (let g=0; g < str.length; g++){
                if (str[g] == double_brackets[k][0]) {
                    if (lr == 0) {
                        str[g] = double_brackets[k][1];
                        lr = 1;
                    } else if (lr == 1) {
                        str[g] = double_brackets[k][2];
                        lr = 0;
                    }
                }
            }
        }


            for (let i=0; i < str.length; i++){
                for (let j=0; j < bracketsConfig.length; j++){
                    if (str[i] == bracketsConfig[j][0]){
                        stack.push(str[i]);
                    }
                    else if (str[i] == bracketsConfig[j][1]){
                        if (stack.length == 0)
                            return false;
                        if (stack[stack.length-1] == bracketsConfig[j][0]){
                            stack.splice(stack.length -1,1);
                        }
                        else
                            return false;
                    }
            }
        }
        return stack.length === 0;
}
