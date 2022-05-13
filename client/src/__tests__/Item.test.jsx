import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Item from '../components/Item'


test('render content', () => {
  const item = {
    id: "MLA1134589136",
    title: "Smart Tv 50 Hitachi Android Tv 4k Uhd Le504ksmart21 Nuevo",
    price: { "currency": "ARS", "amount": 69499, "decimals": 0 },
    picture: "https://http2.mlstatic.com/D_900970-MLA49797547463_042022-I.jpg",
    condition: "new",
    free_shipping: true,
    sold_quantity: 100,
    description: "Smart Tv 50 Hitachi Android Tv 4k Uhd  \n\nModelo: CDH-LE504KSMART21\n\nAndroid Tv 4K UHD (3840x2160) de 50\" Smart, LED. Potencia 2x 9.5w RMS. Salidas de audio. Bluetooth 5.0. Wi Fi 2.4 GHz. Sintonizador TDA.1 USB / 3 HDMI / 1 AV-IN / 1 LAN / 1 antena/cable. Salidas 1 auricular / 1 SPDIF optica (audio digital) Incluye contro remoto y base. Sonido MTS (stereio, mono, sap). Sonido Dolby Audio MS12 D/Y"
  }

  const { container } = render(<Item id={item.id} title={item.title} price={item.price} picture={item.picture} condition={item.condition} sold_quantity={item.sold_quantity} description={item.description} />)

  expect(container).toHaveTextContent(item.title)
})