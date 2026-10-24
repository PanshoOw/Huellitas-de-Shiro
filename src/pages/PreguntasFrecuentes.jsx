import shiroPreguntas from '../assets/images/shiro-preguntas.png'

function PreguntasFrecuentes() {
    return (
        <section className="pagina-informativa">
        <h2>Preguntas frecuentes</h2>

        <p>
            Encuentra respuestas a las consultas
            más habituales de nuestros clientes.
        </p>

        <img
            src={shiroPreguntas}
            alt="Shiro sentado con expresión curiosa y signos de interrogación azules"
            className="preguntas-frecuentes__imagen"
            width="900"
            height="900"
            loading="lazy"
        />

        <details>
            <summary>
            ¿Qué productos ofrece Huellitas de Shiro?
            </summary>

            <p>
            Ofrecemos alimentos, juguetes, accesorios,
            artículos de higiene y productos de
            descanso para mascotas.
            </p>
        </details>

        <details>
            <summary>
            ¿Cómo puedo consultar la disponibilidad?
            </summary>

            <p>
            Puedes revisar nuestro inventario
            desde la página principal.
            </p>
        </details>

        <details>
            <summary>
            ¿Los precios están expresados en pesos chilenos?
            </summary>

            <p>
            Sí. Los precios de nuestro catálogo
            están expresados en pesos chilenos (CLP).
            </p>
        </details>

        <details>
            <summary>
            ¿Puedo comprar directamente desde la página?
            </summary>

            <p>
            Por ahora, nuestra plataforma permite
            consultar el inventario disponible.
            La compra en línea no está habilitada.
            </p>
        </details>
        </section>
    )
}

export default PreguntasFrecuentes