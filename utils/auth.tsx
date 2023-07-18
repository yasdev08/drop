

export const login = async (identity:string, password:string) => {
    const url = 'http://127.0.0.1:8090/api/collections/users/auth-with-password'
    const data = {
        identity,
        password,
    }


    const response = await fetch(url,{
            method:'POST',
            mode: 'cors',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({data}),
        })
        .then((res) => res.json())
        .then((data) =>{
            console.log('success',data)
        })
        .catch((error) =>{
            console.error('error:',error)
        })

}



export const logout = async () => {
    const url = 'http://127.0.0.1:8090/api/collections/users/auth-with-password'
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json)
      .then((data) => {
        console.log('Success:', data)
      })
      .catch((error) => {
        console.error('Error:', error)
      })
  }