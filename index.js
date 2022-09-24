
function saturdayFun(fun = "roller-skate") {
      return `This Saturday, I want to ${fun}!`;
 }

 function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;   
 }

function wrapAdjective(initialized = '*') {
    return function(adjective = "a hard worker") {
        return `You are ${initialized}${adjective}${initialized}!`;
    }

} 