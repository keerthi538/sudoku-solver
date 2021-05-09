let board = new Array(9);

for(let i = 0; i<9; i++){
     board[i] = new Array(9);
}


/////////
function isSafe(row,  col,  val){

     for(var i=0; i<9; i++){
         if(board[i][col] == val || board[row][i] == val)return false;
     }

     var subSize = 3;

     var startX = row - row % subSize;
     var startY = col - col % subSize;


     for(var i = 0; i<subSize; i++){
         for(var j = 0; j<subSize; j++){
             if(board[i+startX][j+startY] == val)return false;
         }
     }

     return true;
  }


 function solve(){
     var row = -1,col = -1;
     for(var i = 0; i<9; i++){
         for(var j = 0; j<9; j++){
             if(board[i][j] == 0){
                 row = i;
                 col = j;
                 break;
             }
         }
     }

     if(row == -1 && col == -1)return true;

     for(var k = 1; k<=9; k++){
         if(isSafe(row, col, k)){
             board[row][col] = k;

             if(solve())return true;

             board[row][col] = 0;
         }
     }

     return false;

 }

/////////


function printSol(){
     var ind = 0;
     for(var i = 0; i<9; i++){
          for(var j = 0; j<9; j++){
               var num = document.getElementById(ind);
               num.value = board[i][j];
               ind++;
          }
     }
}

function puzzle(){
     let ind = 0;
     for(var i =0; i<9; i++){
          for(var j = 0; j<9; j++){
               var num = document.getElementById(ind).value;
               if(num=="")num = 0;
               board[i][j] = num;
               ind++;
          }
     }

     if(solve() == true){
          printSol();
     }
     else{
          alert("ENTER VALID SUDOKU");
     }
}