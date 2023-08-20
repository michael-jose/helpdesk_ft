import "./styles.css"

export default function Login()
{
    return(
        <div className="pag">
            <nav>
                <h1> Login</h1>
            </nav>
            <main>
                <form action="">
                    <input type="text" placeholder="Username"/>
                    <input type="password" placeholder="Password"/>
                    <button type="submit">Login</button>
                </form>
            </main>
        </div>
    )
}