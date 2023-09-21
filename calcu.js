var exp_stack=[]
var op_stack=[]
var digit = "";
var span = document.getElementById('test');
var curr_input,prev_input;

ADD = (top)=>{
    let n = exp_stack.length - 1

    exp_stack[n] = exp_stack[n] + top;
    console.log('value: ' + exp_stack)
}
SUB = (top)=>{
    let n = exp_stack.length - 1

    exp_stack[n] = exp_stack[n] - top;
    console.log('value: ' + exp_stack)
}
MUL = (top)=>{
    let n = exp_stack.length - 1

    exp_stack[n] = exp_stack[n] * top;
    console.log('value: ' + exp_stack)
}
DIV = (top)=>{
    let n = exp_stack.length - 1

    exp_stack[n] = exp_stack[n] / top;
    console.log('value: ' + exp_stack)
}
const operations = [
    ['+',ADD],
    ['-',SUB],
    ['*',MUL],
    ['/',DIV]
];
var ops = new Map(operations)
function press(num){
    digit = digit + num
    span.innerHTML+=num;
    prev_input=curr_input;
    curr_input=digit;

}

function op_press(op){
    prev_input=curr_input;
    curr_input=op;
    op_stack.push(ops.get(op));
    exp_stack.push(+digit)
    digit="";
    span.innerHTML+=op;
    
    
}
function allClear(){
    span.innerHTML="";
    op_stack = []
    exp_stack = []
    digit=""
    console.log("cleared: " + exp_stack)
}

function equals(){
    if(typeof(+curr_input)== typeof(1)){
        console.log('number')
        exp_stack.push(+digit);
    }
    if(exp_stack.length>1){
        let i =0
        while(i<op_stack.length){
        let current_op = op_stack.pop();
        console.log(exp_stack);
        current_op(exp_stack.pop());
        
        }
        digit=exp_stack.pop();
        span.innerHTML=""+digit

    }
    else{
        console.log("insuffient operands")
    }
}

