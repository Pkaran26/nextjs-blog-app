import Link from 'next/link'

const Header = ()=>(
  <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <Link href="/">
      <span className="navbar-brand cursor">Blog App</span>
    </Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarColor03">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link href="/">
            <span className="nav-link cursor">Home</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/posts">
            <span className="nav-link cursor">Posts</span>
          </Link>
        </li>
      </ul>
    </div>
  </nav>
)

export default Header
