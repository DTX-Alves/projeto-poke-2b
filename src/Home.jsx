import poke from "./assets/pokeapi_256.png"

const Home = ()=> {
    return (
        <div className="pokeflex">
            <img src={poke} /> 
            <img src={poke} /> <br></br>
            <img src={poke} /> 
            <img src={poke} /> <br></br>
            <img src={poke} /> 
            <img src={poke} /> <br></br>
        </div>
    )
}

export default Home