import { AddressCardInfo } from '../../../components/AddressCardInfo'

export const ListAddress = ({listAddress}) => {

  return (
    <section>
      <h2>Lista endereços</h2>
      {listAddress && listAddress.map((address, i) => (
        <AddressCardInfo addressDatas={address} key={i}/>
      ))}
    </section>
  )
}
