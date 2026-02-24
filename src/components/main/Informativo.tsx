import Title from '../Title'
import CardEstado from '../informativo/estado/CardEstado'
import OdtArtDes from '../informativo/odtDesArt/OdtDesArt'
import Tonelaje from '../informativo/produccion/Tonejale'

const Informativo: React.FC = () => {
  return (
    <>
      <Title title="Informativo" />
      <section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="grid gap-4">
            <CardEstado />
            <OdtArtDes />
          </div>

          <Tonelaje />
        </div>
      </section>
    </>
  )
}

export default Informativo
