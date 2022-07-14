import carrito from "../../images/cart-svgrepo-com.svg";

const Cartwidget = () => {
    return (
        <div className="w-25">
            <img src={carrito} alt="" className="w-25" />
            {console.log(carrito)}
        </div>


    )    
}

export default Cartwidget