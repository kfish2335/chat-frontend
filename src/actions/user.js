export var username = {
    User: '',
    IsSet: false
}

export const setUser= (temp)=>{
    username.User = temp;
    username.IsSet = true;
    console.log(username);
}

export const delUser= () => (
    username.User = '',
    username.IsSet = false
)