import CartWidget from "./CartWidget";

function NavBar (){
    return(
        <div className="navbar">
            <h1>Chimehuin FlyShop</h1>
            <ul className="menu">
                <li className="menuItem">Cañas</li>
                <li className="menuItem">Reels</li>
                <li className="menuItem">Líneas</li>
                <li className="menuItem">Waders</li>
                <li className="menuItem">Moscas</li>
            </ul>
            <CartWidget/>
        </div>
    );
}

export default NavBar;