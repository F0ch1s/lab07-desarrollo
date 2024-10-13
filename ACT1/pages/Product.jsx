import { Link } from "react-router-dom"; //navegacion interna sin actualizar

const Products = () => {
  //componente funcional
  const product = { id: 1, name: "Sofa" }; //objetoo

  return (
    <div>
      <h1>Productos</h1>
      <ul class="products-list">
        <li>
          <Link to={`/products/${product.id}`}>{product.name}</Link>
        </li>
      </ul>
    </div>
  );
};

export default Products;
