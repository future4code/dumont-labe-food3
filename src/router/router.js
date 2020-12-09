import React from "react"
import {BrowserRouter, Route, Switch} from "react-router-dom"
import AddressPage from "../screens/addressPage/addressPage"
import FeedPage from "../screens/FeedPage/FeedPage"
import InitialPage from "../screens/InitialPage/InitialPage"
import LoginPage from "../screens/loginPage/loginPage"
import RestaurantPage from "../screens/RestaurantPage/RestaurantPage"
import ProfilePage from "../screens/profilePage/profilePage"
import SignupPage from "../screens/signupPage/signupPage"


function Router(){
return(
<BrowserRouter>
    <Switch>
        <Route exact path="/">
            <InitialPage />
        </Route>
        <Route exact path="/signup">
            <SignupPage />
        </Route>
        <Route exact path="/login">
            <LoginPage />
        </Route>
        <Route exact path="/feed">
            <FeedPage />
        </Route>
        <Route exact path="/carrinho">

        </Route>
        <Route exact path="/restaurantes/:id">
            <RestaurantPage />
        </Route>
        <Route exact path="/perfil">
        <ProfilePage />
        </Route>
        <Route exact path="/endereco">
        <AddressPage />
        </Route>

        <Route>

        </Route>
    </Switch>
</BrowserRouter>
)
}
export default Router