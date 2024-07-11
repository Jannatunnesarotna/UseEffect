// export default function List({task}){
//     return <li>task: {task}</li>
// }
// export default function List({task, isDone}){
//     if(isDone){
//         return <li>finished: {task}</li>
//     }
//     else{
//         return <li>do it: {task}</li>
//     }
// }
// export default function List({task, isDone}){
//     if(isDone){
//         return <li>finished: {task}</li>
//     }
//     return <li>do it : {task}</li>
   
// }

// export default function List({task, isDone}){
//     return <li>{isDone ? "finished" : "do it"}: {task}</li>
// }
// export default function List({task, isDone}){
//     return <li>{task}: {isDone && "finished"} </li>
// }
// export default function List({task, isDone}){
//     return <li>{task}: {isDone || "do it"} </li>
// }