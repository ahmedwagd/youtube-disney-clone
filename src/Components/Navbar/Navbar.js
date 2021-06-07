// Main imports
import { auth, provider } from '../../firebase';
import { useDispatch, useSelector } from 'react-redux';
// import { useHistory } from 'react-router-dom';
import { selectUserName, selectUserPhoto, setUserLoginDetails } from '../../features/user/userSlice'

// Components& pages
import {
  Nav,
  Logo,
  NavMenu,
  Login,
  UserImg
} from './Navbar.styles';

// Styles



const Navbar = () => {
  const dispatch = useDispatch();
  // const history = useHistory();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);


  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoUrl
      })
    )
  }
  const handelAuth = () => {
    auth.signInWithPopup(provider).then((res) => {
      setUser(res.user)
    }).catch(err => alert(err.message))
  }

  return (
    <>
      <Nav>
        <Logo>
          <img src="/assets/images/logo.svg" alt="Disney+" />
        </Logo>
        {
          !userName ?
            (<Login onClick={handelAuth}>
              Login
            </Login>) :
            (<>
              <NavMenu>
                <a href="/home">
                  <img src="/assets/images/home-icon.svg" alt="Home" />
                  <span>HOME</span>
                </a>
                <a href="/home">
                  <img src="/assets/images/search-icon.svg" alt="search" />
                  <span>SEARCH</span>
                </a>
                <a href="/home">
                  <img src="/assets/images/watchlist-icon.svg" alt="watchlist" />
                  <span>WATCHLIST</span>
                </a>
                <a href="/home">
                  <img src="/assets/images/original-icon.svg" alt="original" />
                  <span>ORIGINAL</span>
                </a>
                <a href="/home">
                  <img src="/assets/images/movie-icon.svg" alt="movie" />
                  <span>MOVIES</span>
                </a>
                <a href="/home">
                  <img src="/assets/images/series-icon.svg" alt="series" />
                  <span>SERIES</span>
                </a>
              </NavMenu>
              <UserImg src={userPhoto} alt={userName} />
            </>)
        }
      </Nav>

    </>
  )
}

export default Navbar;