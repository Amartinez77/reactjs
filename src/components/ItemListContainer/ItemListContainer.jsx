import { Col, Row } from "react-bootstrap";

import { useGetProductsFirebase } from "../../Hooks/useGetProductsFirebase";
import ItemList from "../ItemList/ItemList";
import SpinnerIcon from "../SpinnerIcon/SpinnerIcon";
import ToolBar from "../ToolBar/ToolBar";

const ItemListContainer = () => {
  const [products, loading] = useGetProductsFirebase();

  return (
    <div className="container-fluid">
      <Row className="row-center mb-3">
        <Col md="col col-md-2" className="sideBar">
          <ToolBar />
        </Col>
        <Col className="centerPage">
          {loading ? <SpinnerIcon /> : <ItemList products={products} />}
        </Col>
      </Row>
    </div>
  );
};

export default ItemListContainer;
