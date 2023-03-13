import React, { useEffect, useState } from "react";

import * as Yup from "yup";
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
import axios from "axios";
import { useNavigate } from "react-router-dom";



const Order = (props) => {
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
    text: "",
    count: 1,
    secimler: "",
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
  /* const [ekMalzemeler, setEkMalzemeler] = useState([]); */
  const ekMalzemes= [];
  
  const perCost = 5;
  const navigate = useNavigate();

  const orderFormSchema = Yup.object().shape({});
  

  const setCheck = (e) => {
    setOrderPizza({ ...orderPizza, [e.target.name]: e.target.checked });
    
    
    if (e.target.checked == true) {
      /* setEkMalzemeler([...ekMalzemeler, e.target.name]) */
      ekMalzemes.push(e);
      setMalzemeSayaci(malzemeSayaci + 1);
      setTotalPrice(totalPrice + perCost);
    } else {
      ekMalzemes.pop(e);
      setMalzemeSayaci(malzemeSayaci - 1);
      setTotalPrice(totalPrice - perCost);
      
    }
  };
  const changeHandler = (e) => {
    setOrderPizza({ ...orderPizza, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    
    props.siparisss(orderPizza);
    
    
    
    axios.post("https://75e9o.mocklab.io/json/1", orderPizza).then((response) => {
      console.log(response.data);
      
      navigate("/pizza");
      
    });
    
    
  };
  

  useEffect(() => {
    console.log(">>>>>>>>>>>>>", orderPizza);
  }, [orderPizza]);

  useEffect(() => {
    console.log("counter", counter);
    setOrderPizza({ ...orderPizza, count: counter });
  }, [counter]);

  useEffect(() => {
    setOrderPizza({
      ...orderPizza,
      totalPrice: totalPrice,
      secimler: malzemeSayaci * perCost,
    });
    
  }, [totalPrice]);

  return (
    <div>

      <div>
        <h3>pizza name</h3>
        <div>price and puan için</div>
        <p>
          descriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescription
        </p>
        <Form onSubmit={submitHandler}>
          <FormGroup className="d-flex">
            <FormGroup tag="fieldset" id="size-dropdown">
              <legend>Boyut Seç</legend>

              <FormGroup check>
                <Input
                  name="boyut"
                  type="radio"
                  id="size-dropdown"
                  value="Küçük"
                  onChange={changeHandler}
                />{" "}
                <Label check>Küçük Boy</Label>
              </FormGroup>
              <FormGroup check>
                <Input
                  name="boyut"
                  type="radio"
                  id="size-dropdown"
                  value="Orta"
                  onChange={changeHandler}
                />{" "}
                <Label check>Orta Boy</Label>
              </FormGroup>
              <FormGroup check>
                <Input
                  name="boyut"
                  type="radio"
                  id="size-dropdown"
                  value="Büyük"
                  onChange={changeHandler}
                />{" "}
                <Label check>Büyük Boy</Label>
              </FormGroup>
            </FormGroup>

            <UncontrolledDropdown>
              <DropdownToggle caret color="ligth">
                Hamur Seç
              </DropdownToggle>
              <DropdownMenu ligth>
                <DropdownItem header id="hamur-type">
                  Hamur Kalınlığı
                </DropdownItem>

                <DropdownItem
                  name="hamur"
                  value="İnce"
                  id="hamur-type"
                  onClick={changeHandler}
                >
                  İnce Hamur
                </DropdownItem>
                <DropdownItem
                  value="Orta"
                  id="hamur-type"
                  onClick={changeHandler}
                >
                  Orta Hamur
                </DropdownItem>
                <DropdownItem
                  value="Kalın"
                  id="hamur-type"
                  onClick={changeHandler}
                >
                  Kalın Hamur
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </FormGroup>
        
        <FormGroup>
          <h4>Ek Malzemeler:</h4>
          <p>En Fazla 10 malzeme seçebilrisiniz. 5tl</p>

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
        </FormGroup>

        <FormGroup>
          <Label for="special-text">Sipariş Notu</Label>
          <Input
            id="special-text"
            name="text"
            type="textarea"
            placeholder="Siparişine eklemek istediğin not var mı?"
            onChange={changeHandler}
          />
        </FormGroup>

        <FormGroup className="d-flex">
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
              <span>Toplam: {lastPrice} TL </span>
            </CardText>
            <Button id="order-button" type="submit" color="warning">
              SİPARİŞ VER
            </Button>
          </Card>
        </FormGroup>
        </Form>
      </div>
    </div>
  );
};
export default Order;
