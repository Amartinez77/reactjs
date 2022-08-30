import ItemDetail from "../ItemDetail/ItemDetail";
import SpinnerIcon from "../SpinnerIcon/SpinnerIcon";
import { Col, Row } from "react-bootstrap";
import ToolBar from "../ToolBar/ToolBar";
import { useGetProductFirebase } from "../../Hooks/useGetProductFirebase";
import ErrorPage from "../ErrorPage/ErrorPage";

const ItemDetailContainer = () => {
  const [product, loading, response] = useGetProductFirebase();
  console.log(response);

  return (
    <>
      {response ? (
        <Row className="row-center">
          <Col md="auto" className="sideBar">
            <ToolBar />
          </Col>

          <Col className="centerPage">
            {loading ? <SpinnerIcon /> : <ItemDetail product={product} />}
          </Col>
        </Row>
      ) : (
        <ErrorPage />
      )}
    </>
  );
};

export default ItemDetailContainer;
