/*

PART 4 [Problem Solving]:
Solve the question below:

Write a isABalancedString function that takes a string as an input, 
return 'YES' if the parentheses in the input string are balanced,
return 'NO' if the parentheses in the input string are not balanced,. 

*/

console.log('PART 4');

const isABalancedString = (str) => {
  // WRITE YOUR CODE BELOW THIS LINE

  const len = str.length;
  if (len%2 !== 0)
  return "NO"
  const C1 = "{"
  const c2 = "}"

  const b1 = '['
  const b2 = ']'

  const a1 = '('
  const a2 = ')'

  const array = str.split("");

  const len_2 = len/2;

  let  i ;

  for ( i = 0 ; i <= len_2 ; i++)
  {

    
    if (array[i] ==  array[len-i])
    {

    }else{
      return "NO"
    }
    
    

  }
  return "YES"




};

/*

Examples:

isABalancedString( '[]' )
=> YES

isABalancedString( '[{()}]' )
=> YES

isABalancedString( '[()]{}{()()}' )
=> YES

isABalancedString( '[{()}])' )
=> NO

isABalancedString( '({()}])' )
=> NO

isABalancedString( '[{)]({()(})' )
=> NO

isABalancedString( '[(){([])[}]()]' )
=> NO

isABalancedString( '[(){([])}({){}}]' )
=> NO

isABalancedString( '[(){([])})' )
=> NO

*/
