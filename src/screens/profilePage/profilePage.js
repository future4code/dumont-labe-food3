import React, { useContext, } from "react";
import { useHistory } from "react-router-dom";
import { baseUrl } from "../../constants/constants";
import GlobalStateContext from "../../global/globalStateContext";
import useProtectedPage from "../../hooks/useProtectedPage";
import useRequestData from "../../hooks/useRequestData";
import {
  goToAdressPage,
  goToEditProfile,
  goToFeedPage,
} from "../../router/coordinator";
import Header from '../../components/Header/Header'
import {ButtonStyled} from '../../components/Header/styles'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import Edit from '../../assets/img/edit-profile.svg'
import { goToEditAddress, goToEditProfile, goToFeedPage } from '../../router/coordinator'
import CardOrder from "../../components/CardOrder/cardOrder"
import { EditProfile, Profile, ProfileAddress, ProfileAddressTitle, ProfileCPF, ProfileEmail, ProfileEmailDiv, ProfileName } from './styles'
import CardOrder from "../../components/CardOrder/cardOrder";

const ProfilePage = () => {
  useProtectedPage();


  const history = useHistory();

  const profileInfo = useRequestData(`${baseUrl}/profile`, undefined);
  const ordersHistory = useRequestData(`${baseUrl}/orders/history`)

  return profileInfo ? (
    <Profile>
      <Header />
      <ButtonStyled onClick={() => goToFeedPage(history)}>Voltar</ButtonStyled>
      <div>
        <ProfileName>Nome: {profileInfo.user.name}</ProfileName>
        <ProfileEmail>Email: {profileInfo.user.email}</ProfileEmail>
        <ProfileCPF>CPF: {profileInfo.user.cpf}</ProfileCPF>
        <EditProfile src={Edit} onClick={() => goToEditProfile(history)} />
      </div>

      <ProfileEmailDiv>
        <ProfileAddressTitle>Endereço cadastrado:</ProfileAddressTitle>
        <ProfileAddress>{profileInfo.user.address}</ProfileAddress>
        <EditProfile src={Edit} onClick={() => goToEditAddress(history)} />
      </ProfileEmailDiv>

      <div>
        <div>
          <div>
            <h3>Histórico de Pedidos</h3>
            {ordersHistory &&
              ordersHistory.orders.map((order, id) => {
                return (
                  <CardOrder
                    key={order.id}
                    totalPrice={order.totalPrice}
                    restaurantName={order.restaurantName}
                    date={order.createdAt}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </Profile>
  ) : (
    <div>
      <p>Você não realizou nenhum pedido</p>
    </div>
  );
};

export default ProfilePage;
