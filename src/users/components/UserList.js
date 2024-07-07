import UserItems from "./UserItems"

function UserList({item}) {


    if(item.length === 0){
        return(
            <h1 className="center">Their is no User Exist</h1>
        )
    }

    return (
        <ul>
            {item.map((user)=><UserItems user={user}/>)}
        </ul>
    )
}

export default UserList
