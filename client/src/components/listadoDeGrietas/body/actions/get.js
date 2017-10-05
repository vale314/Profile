

export function getGrietas(){
    return new Promise((resolve,reject)=>{
        const xhr = new XMLHttpRequest();
        xhr.open('get', '/v1/grietas');
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.responseType = 'json';
        xhr.addEventListener('load', () => {
            if (xhr.status === 200) {
                
                return resolve([xhr.status,xhr.response])
                

            }else{
            if(xhr.status === 400){
                
                return resolve()

                }
            }
            });
            xhr.send();
    })
}