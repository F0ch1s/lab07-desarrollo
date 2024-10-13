import { useParams } from "react-router-dom";

function ProductDetail(){

  const { productId } = useParams(); // hook para acceder a la url

  //productID = 1
  return (
    <div class="product-box">
      <h1>Sofa mediano</h1>
      <p>
        Este sofá mediano es perfecto para espacios reducidos o salones
        pequeños. Está diseñado con un marco robusto de madera y un tapizado
        suave, ofreciendo una excelente combinación de confort y durabilidad.{" "}
      </p>
      <img src="/image-1.jpg" alt="Muebles" />
    </div>
  );
};

export default ProductDetail;
