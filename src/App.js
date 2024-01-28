import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"

function App (){
    const greeting = "Bienvenido a Chimehuin FlyShop";
    return (
        <div>
            <NavBar/>
            <ItemListContainer greeting={greeting}/>
        </div>
    );
}

export default App;