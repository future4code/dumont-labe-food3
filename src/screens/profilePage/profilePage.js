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

import CardOrder from "../../components/CardOrder/cardOrder";

const ProfilePage = () => {
  useProtectedPage();

  const { states, setters } = useContext(GlobalStateContext);

  const history = useHistory();

  const profileInfo = useRequestData(`${baseUrl}/profile`, undefined);
  const ordersHistory = useRequestData(`${baseUrl}/orders/history`)

  return profileInfo ? (
    <div>
      <button onClick={() => goToFeedPage(history)}>Voltar</button>
      <div>
        <p>Nome: {profileInfo.user.name}</p>
        <p>Email: {profileInfo.user.email}</p>
        <p>CPF: {profileInfo.user.cpf}</p>
        <button onClick={() => goToEditProfile(history)}>Editar</button>
      </div>

      <div>
        <h4>Endereço cadastrado:</h4>
        <p>{profileInfo.user.address}</p>
        <button onClick={() => goToAdressPage(history)}>Editar</button>
      </div>

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
    </div>
  ) : (
    <div>
      <p>Você não realizou nenhum pedido</p>
    </div>
  );
};

export default ProfilePage;
