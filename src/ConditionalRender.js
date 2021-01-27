const users=[{
    id:1,name:"John",city:"Pune"
},{
    id:2,name:"Peter",city:"Mumbai"
}]

function ConditionalRender(){
    return(
        <div>
            <h1>Conditional Rendering</h1>
            <DisplayUsers list={users}/>
        </div>
    )
}

function DisplayUsers({list}){
    if(!list){
        return null
    }
    if(!list.length){
        return <h2>List is empty...</h2>
    }else{
        return(
            <ul>
                {list.map((item)=>(
                    <Item key={item.id} item={item}/>
                ))}
            </ul>
        )
    }
    
}

function Item({item}){
    return(
        <div>
            <li>{item.name+' '+item.city}</li>
        </div>
    )
}

export default ConditionalRender