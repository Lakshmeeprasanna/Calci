var expr = '', lastOp='';
function Clear(){
  document.getElementById('res').value = '';
  expr = '';
}
function Expression(op){
  if(lastOp=='='){
    lastOp = '';
    if(op>='0' && op<='9' || op=='00'){
      expr = '';
    }
  }
  if(op=='=' && expr[expr.length-1]>='0' && expr[expr.length-1]<='9'){
    expr = (eval(expr)).toString();
    lastOp = '=';
  }else if(op=='=' && expr[expr.length-1]=='%'){
    expr = (eval(expr.substring(0,expr.length-1))/100).toString();
    lastOp = '=';
  }else{
    expr = expr + op;
  }
  document.getElementById('res').value = expr;
}
function Delete(){
  expr = expr.substring(0,expr.length-1);
  document.getElementById('res').value = expr;
  }
