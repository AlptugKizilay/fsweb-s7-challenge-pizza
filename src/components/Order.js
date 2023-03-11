import React, { useEffect, useState } from "react";
import {
  Form,
  FormGroup,
  Input,
  Label,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Card,
  CardTitle,
  CardText,
  Button,
} from "reactstrap";
import Counter from "./Counter";

const Order = () => {
  const [pizza, setPizza] = useState([
    {
      id: 1,
      name: "Galaktik",
      price: 89,
    },
    {
      id: 2,
      name: "Techno",
      price: 99,
    },
    {
      id: 3,
      name: "Travis",
      price: 109,
    },
  ]);
  const [orderPizza, setOrderPizza] = useState({
    id: 1,
    name: "Galaktik",
    price: 89,
    boyut: "",
    hamur: "",
    notes: "",
    count: "",
    totalPrice: "",
  });

  const malzemeler = [
    "Peperoni",
    "Sosis",
    "Kanada Jambonu",
    "Tavuk Izgara",
    "Soğan",
    "Domates",
    "Mısır",
    "Sucuk",
    "Jalepone",
    "Sarımsak",
    "Biber",
    "Ananas",
    "Kabak",
  ];
  const [counter, setCounter] = useState(1);
  const [malzemeSayaci, setMalzemeSayaci] = useState(0);
  const [totalPrice, setTotalPrice] = useState(orderPizza.price);
  const lastPrice = totalPrice * counter;
  const perCost = 5;

  const setTitleRadio = (e) => {
    console.log(e.target.title);
    setOrderPizza({ ...orderPizza, boyut: e.target.title });
  };
  const setTitleDropDown = (e) => {
    console.log(e.target.title);
    setOrderPizza({ ...orderPizza, hamur: e.target.title });
  };
  const setCheck = (e) => {
    setOrderPizza({ ...orderPizza, [e.target.name]: e.target.checked });

    if (e.target.checked == true) {
      setMalzemeSayaci(malzemeSayaci + 1);
      setTotalPrice(totalPrice + perCost);
    } else {
      setMalzemeSayaci(malzemeSayaci - 1);
      setTotalPrice(totalPrice - perCost);
    }
  };
  const changeHandler = (e) => {
    setOrderPizza({ ...orderPizza, notes: e.target.value });
  };

  useEffect(() => {
    console.log(">>>>>>>>>>>>>", orderPizza);
  }, [orderPizza]);

  useEffect(() => {
    console.log("counter", counter);
    setOrderPizza({ ...orderPizza, count: counter });
  }, [counter]);

  useEffect(() => {
    setOrderPizza({ ...orderPizza, totalPrice: totalPrice });
  }, [totalPrice]);

  return (
    <div>
      <div>
        <h3>pizza name</h3>
        <div>price and puan için</div>
        <p>
          descriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescription
        </p>
        <div className="d-flex">
          <Form>
            <FormGroup tag="fieldset" id="size-dropdown">
              <legend>Boyut Seç</legend>

              <FormGroup check>
                <Input
                  name="radio1"
                  type="radio"
                  id="size-dropdown"
                  title="Küçük"
                  onChange={setTitleRadio}
                />{" "}
                <Label check>Küçük Boy</Label>
              </FormGroup>
              <FormGroup check>
                <Input
                  name="radio1"
                  type="radio"
                  id="size-dropdown"
                  title="Orta"
                  onChange={setTitleRadio}
                />{" "}
                <Label check>Orta Boy</Label>
              </FormGroup>
              <FormGroup check>
                <Input
                  name="radio1"
                  type="radio"
                  id="size-dropdown"
                  title="Büyük"
                  onChange={setTitleRadio}
                />{" "}
                <Label check>Büyük Boy</Label>
              </FormGroup>
            </FormGroup>
          </Form>

          <UncontrolledDropdown>
            <DropdownToggle caret color="ligth">
              Hamur Seç
            </DropdownToggle>
            <DropdownMenu ligth>
              <DropdownItem header id="hamur-type">
                Hamur Kalınlığı
              </DropdownItem>

              <DropdownItem
                title="İnce"
                id="hamur-type"
                onClick={setTitleDropDown}
              >
                İnce Hamur
              </DropdownItem>
              <DropdownItem
                title="Orta"
                id="hamur-type"
                onClick={setTitleDropDown}
              >
                Orta Hamur
              </DropdownItem>
              <DropdownItem
                title="Kalın"
                id="hamur-type"
                onClick={setTitleDropDown}
              >
                Kalın Hamur
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </div>
        <div>
          <h4>Ek Malzemeler:</h4>
          <p>En Fazla 10 malzeme seçebilrisiniz. 5tl</p>
          <Form>
            {malzemeler.map((e, index) => {
              return (
                <FormGroup check inline>
                  <Input
                    type="checkbox"
                    name={e}
                    key={index}
                    onChange={setCheck}
                  />
                  <Label check>{e}</Label>
                </FormGroup>
              );
            })}
          </Form>
        </div>
        <div>
          <Form>
            <FormGroup>
              <Label for="order-notes">Sipariş Notu</Label>
              <Input
                id="order-notes"
                name="text"
                type="textarea"
                placeholder="Siparişine eklemek istediğin not var mı?"
                onChange={changeHandler}
              />
            </FormGroup>
          </Form>
        </div>
        <div className="d-flex">
          <Counter counter={setCounter} />

          <Card
            body
            className="my-2"
            style={{
              width: "5rem",
            }}
          >
            <CardTitle tag="h5">Sipariş Toplamı</CardTitle>
            <CardText>
              Seçimler: {malzemeSayaci * perCost} TL
              <br></br>
              <spanZ>Toplam: {lastPrice} TL </spanZ>
            </CardText>
            <Button color="warning">SİPARİŞ VER</Button>
          </Card>
        </div>
      </div>
    </div>
  );
};
export default Order;
