export default async function getHerosData(){
    const heros=await fetch("http://localhost:3000/api/items",
      //  {cache:"force-cache"}//for accessign cached data and avoid refetching data on every request
    );
    const data=await heros.json();
    console.log(data);
    return data;
}