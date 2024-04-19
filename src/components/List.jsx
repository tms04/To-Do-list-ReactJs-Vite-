// const List = ({items}) =>{
//     return(<> {items.map((number)=>(
//         <li key={number} class="list-group-item">{number}</li>
//       ))}
// </>);
// };

function List({items}){
    return(<> {items.map((number)=>(
                <li key={number} className="list-group-item">{number}</li>
                ))}
         </>)
}

export default List;