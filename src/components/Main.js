import React from "react";
import "../App.css";
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";
import {
  Container,
  Row,
  Col,
  Nav,
  Dropdown,
  Card,
  Button,
} from "react-bootstrap";

const Main = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Nav
              className="col-md-10 d-none d-md-block sidebar"
              activeKey="/home"
              onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
            >
              <div className="sidebar-sticky"></div>

              <div className="sidebar-categories">CATEGORIES</div>

              <div className="line-below-categories"></div>

              <Nav.Item>
                <Dropdown className="sidebar-category-items">
                  <Dropdown.Toggle variant="none" id="dropdown-basic">
                    Computer Accessories
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-2">
                     Laptop Bags
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Nav.Item>
              
            </Nav>
          </Col>
          <Col>
            <div class="row products">
              <div class="col-md-4">
                <div class="card mb-4 shadow-sm">
                  <Card>
                    <Card.Img
                      variant="top"
                      src={require("../images/logo.png")}
                    />
                    <Card.Body>
                      <Card.Title className="product-description">
                        Apple IMac Retina 4.5K Display 24″ M1 Chip 8-Core
                      </Card.Title>

                      <Card.Text className="product-cart">
                        200$
                        <a href="/">
                          <AiOutlineShoppingCart id="cart-icon"></AiOutlineShoppingCart>
                        </a>
                        <a href="/">
                          <AiOutlineHeart id="favorites-icon"></AiOutlineHeart>
                        </a>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Main;
