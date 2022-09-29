
import { Link } from 'react-router-dom'


const Header = () => {
    

    return (
        <div className="container">
            <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">

                <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                    <h2 className="fs-4">PLZ FUN ME</h2>
                </Link>

                <div className="d-flex align-items-center">
                 
                    <ul className="nav nav-pills">
                        
                        {/* {loggedIn && userInfo.role === 1 &&
                            <>
                                <li className="nav-item">
                                    <Link to="/admin"
                                        className="nav-link"
                                        aria-current="page">Administratorius</Link>
                                </li>
                                
                            </>
                        } */}
                       <li className="nav-item">
                                    <Link to="/new-story"
                                        className="nav-link"
                                        aria-current="page">Nauja istorija</Link>
                                </li>
                    </ul>
                </div>
            </header>
        </div>

    )
}

export default Header