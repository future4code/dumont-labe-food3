import React from "react";
import { useHistory } from "react-router-dom";
import { baseUrl } from "../../constants/constants";
import useProtectedPage from "../../hooks/useProtectedPage";
import useRequestData from "../../hooks/useRequestData";
import {
  goToEditAddress,
  goToEditProfile,
  goToFeedPage,
} from "../../router/coordinator";
import Header from '../../components/Header/Header'
import {ButtonStyled} from '../../components/Header/styles'
import Edit from '../../assets/img/edit-profile.svg'
import CardOrder from "../../components/CardOrder/cardOrder"
import { EditProfile, Profile, ProfileAddress, ProfileAddressTitle, ProfileCPF, ProfileEmail, ProfileEmailDiv, ProfileName } from './styles'
import {HistoryOrderLine, HistoryOrderTitle, HistoryOrderZero, HistoryOrderZeroInside} from '../../components/CardOrder/styles'
import Footer from '../../components/Footer/Footer'

const ProfilePage = () => {
  useProtectedPage();

  const history = useHistory();

  const profileInfo = useRequestData(`${baseUrl}/profile`, undefined);
  const ordersHistory = useRequestData(`${baseUrl}/orders/history`);

  

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
            <HistoryOrderTitle>Histórico de Pedidos</HistoryOrderTitle>
            <HistoryOrderLine></HistoryOrderLine>
            {ordersHistory && ordersHistory.orders.length > 0 ? (
              ordersHistory.orders.map((order) => {
                return (
                  <CardOrder
                    key={order.id}
                    totalPrice={order.totalPrice}
                    restaurantName={order.restaurantName}
                    date={order.createdAt}
                  />
                );
              })
            ) : (
              <HistoryOrderZero>
                <HistoryOrderZeroInside>Você não realizou nenhum pedido</HistoryOrderZeroInside>
              </HistoryOrderZero>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </Profile>
  ) : (
    <div>
      <p>Carregando...</p>
    </div>
  );
  
};

export default ProfilePage;
