const url = 'https://jsonplaceholder.typicode.com/users/1';
let fetdata = async() => 
{
    for(i = 0; i < 5; i++)
    {
        let udata = await fetch(url);
        let jdata = await udata.json();
        console.log(jdata);
        
        console.log(jdata.address.city);
      
        console.log(jdata.address.geo.lat);
    }
}
fetdata();