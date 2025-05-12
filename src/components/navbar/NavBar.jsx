export default function NavBar(){
    const handleLogin = () => {
        window.location.href = 'http://localhost:8080/security/sign-in';
    };
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
                <a className="navbar-brand" href="#">MyApp</a>
                <div className="ms-auto">
                    <button className="btn btn-outline-light" onClick={handleLogin}>
                        Login
                    </button>
                </div>
            </nav>
        </>
    );
}