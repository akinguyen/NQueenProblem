# N-Queen Problem

This respository contains the Javascript solution for the N-Queen problem. The current solution utilizes the BFS concept and will
be updated with A* algorithm. 

 
* See the result by simply running `node main.js`
* See different `n` solution by modifying `var solution = new Solution(4)` into `var solution = new Solution(n);` 


#### The online animation demo for the N-Queen (BFS approach) is on my CodePen dashboard:
https://codepen.io/akiara-nguyen/pen/ywKegm?editors=0110


<h2>Example result outputted on the console after running the main.js:</h2> 
<h4>4x4:</h4>     
<div>
 *  Q  *  *
 <br>
 *  *  *  Q
 <br>
 Q  *  *  *
 <br>
 *  *  Q  *
 </div>
 
 
<h4>5x5:</h4>
 <div>
 *  Q  *  *  *
 <br>
 *  *  *  Q  *
 <br>
 Q  *  *  *  *
 <br>
 *  *  Q  *  *
 <br>
 *  *  *  *  Q
 </div>
 
 
<h4>6x6:</h4>
 <div>
 *  Q  *  *  *  *
 <br>
 *  *  *  Q  *  *
 <br>
 *  *  *  *  *  Q
 <br>
 Q  *  *  *  *  *
 <br>
 *  *  Q  *  *  *
 <br>
 *  *  *  *  Q  *
 </div>
 
 
 <h4>7x7:</h4>
 <div>
 *  Q  *  *  *  *  *
 <br>
 *  *  *  *  *  *  Q
 <br>
 *  *  *  *  Q  *  *
 <br>
 *  *  Q  *  *  *  *
 <br>
 Q  *  *  *  *  *  *
 <br>
 *  *  *  *  *  Q  *
 <br>
 *  *  *  Q  *  *  *
 </div>
 
 
 <h4>8x8:</h4>
 <div>
 *  Q  *  *  *  *  *  *
 <br>
 *  *  *  Q  *  *  *  *
 <br>
 *  *  *  *  *  Q  *  *
 <br>
 *  *  *  *  *  *  *  Q
 <br>
 *  *  Q  *  *  *  *  *
 <br>
 Q  *  *  *  *  *  *  *
 <br>
 *  *  *  *  *  *  Q  *
 <br>
 *  *  *  *  Q  *  *  *
 </div>

