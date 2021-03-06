import React, { useContext } from 'react'
import { Context } from '..'
import { Navbar, Container, Nav, Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { SHOP_ROUTE } from '../utils/constants'
import { observer } from 'mobx-react-lite'

const NavBar = observer(() => {
  const { user } = useContext(Context)
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <NavLink
          to={SHOP_ROUTE}
          style={{ color: 'white', textDecoration: 'none' }}>
          SuperMega
        </NavLink>
        {user.isAuth ? (
          <Nav className="ml-auto" style={{ color: 'white' }}>
            <Button variant="outline-light">Админ панель</Button>
            <Button variant="outline-light" className="ml-2">
              Выйти
            </Button>
          </Nav>
        ) : (
          <Nav className="ml-auto" style={{ color: 'white' }}>
            <Button
              variant="outline-light"
              onClick={() => user.setIsAuth(true)}>
              Авторизация
            </Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  )
})

export default NavBar
