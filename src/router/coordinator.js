export const goToFeedPage = (history) => {
    history.push('/feed')
}

export const goToLoginPage = (history) => {
    history.push('/login')
}

export const goToSignUpPage = (history) => {
    history.push('/signup')
} 

export const goToAdressPage = (history) => {
    history.push ('/endereco')
}

export const goToRestaurantPage = (history, id) => {
    history.push (`/restaurantes/${id}`)
}

export const goToProfilePage = (history) =>{
    history.push('/perfil')
}