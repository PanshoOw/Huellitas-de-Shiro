import { productos } from '../data/productos.js'
import shiroBienvenida from '../assets/images/shiro-bienvenida.png'

// Formateador de precios chilenos
const formateadorPrecio = new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
    maximumFractionDigits: 0
    })

    function Inicio() {
    return (
        <>
        {/* Sección de bienvenida */}

        <section className="bienvenida">

        <div className="bienvenida__texto">

            <h2>¡Bienvenido a Huellitas de Shiro!</h2>

            <p>
            En Huellitas de Shiro sabemos que las mascotas
            son mucho más que animales de compañía:
            ¡son parte de nuestra familia!
            </p>

            <p>
            Descubre nuestra selección de alimentos,
            juguetes, accesorios y productos de cuidado
            para consentir a tus compañeros de cuatro patas.
            </p>

        </div>

        <img
            src={shiroBienvenida}
            alt="Shiro, nuestra mascota, saludando con una patita levantada"
            className="bienvenida__imagen"
            width="1374"
            height="1145"
        />

        </section>

        {/* Inventario de productos */}

        <section>
            <h2>Inventario de productos</h2>

            <table>
            <thead>
                <tr>
                <th scope="col">Producto</th>
                <th scope="col">Categoría</th>
                <th scope="col">Precio</th>
                <th scope="col">Stock</th>
                </tr>
            </thead>

            <tbody>
                {productos.map((producto) => (
                <tr key={producto.id}>
                    <td>{producto.nombre}</td>

                    <td>{producto.categoria}</td>

                    <td>
                    {formateadorPrecio.format(producto.precio)}
                    </td>

                    <td>{producto.stock}</td>
                </tr>
                ))}
            </tbody>
            </table>
        </section>
        </>
    )
}

export default Inicio