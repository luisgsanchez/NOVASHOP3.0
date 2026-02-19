import { Link } from "react-router-dom";

const ItemCard = ({ id, name, description, price, img }) => {
  return (
    <div className="card bg-dark text-white h-100">
      <img src={img} className="card-img-top" alt={name} />

      <div className="card-body d-flex flex-column">
        <h5>{name}</h5>
        <p className="text-secondary">{description}</p>
        <p className="fw-bold mt-auto">${price}</p>

        <Link className="btn btn-warning mt-2" to={`/item/${id}`}>
          Ver detalle
        </Link>
      </div>
    </div>
  );
};

export default ItemCard;
