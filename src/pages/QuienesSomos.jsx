import shiroNosotros from '../assets/images/shiro-nosotros.png'

function QuienesSomos() {
    return (
        <section className="pagina-informativa quienes-somos">

        <h2>¿Quiénes somos?</h2>

        <img
            src={shiroNosotros}
            alt="Shiro, mascota de nuestra tienda, rodeado de huellitas azules"
            className="quienes-somos__imagen"
            width="850"
            height="850"
        />

        <p>
            En Huellitas de Shiro creemos que nuestras
            mascotas son parte fundamental de la familia.
        </p>

        <p>
            Nuestro propósito es ofrecer productos de
            calidad para contribuir al bienestar,
            entretenimiento y cuidado de perros y gatos.
        </p>

        <p>
            Queremos que cada cliente encuentre todo
            lo necesario para entregar cariño y
            comodidad a sus compañeros de cuatro patas.
        </p>

        </section>
    )
}

export default QuienesSomos