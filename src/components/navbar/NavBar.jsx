import { NavLink } from "react-router-dom";

export default function NavBar(){

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
                <NavLink to='/' className="navbar-brand">Nubbin™ Technologies</NavLink>
            </nav>
        </>
    );
}