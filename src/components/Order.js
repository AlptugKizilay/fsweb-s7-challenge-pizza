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
  FormFeedback,
  CardBody,
  CardSubtitle,
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
      sugest:
        "Galaktik Pizza, İtalyan mutfağından dünya çapında tanınan, hamur tabanı üzerine mozarella peyniri, domates sosu ve çeşitli malzemelerin eklenmesiyle hazırlanan lezzetli bir yemektir. Sıcak servis edilir ve çeşitli restoranlarda veya fast food zincirlerinde bulamazsınız. ",
      img: "../assets/food-1.png"
      },
    {
      id: 2,
      name: "Techno",
      price: 99,
      sugest:
        "Techno Pizza, hamur tabanı üzerine eklenen mozarella peyniri, domates sosu, sebzeler ve et ürünleri gibi çeşitli malzemelerle hazırlanan, dünya genelinde sevilen bir İtalyan yemeğidir. Pizza hamuru, ince ve çıtır bir kıvama sahiptir ve fırınlanarak hazırlanır. Dilimlenerek servis edilir ve yanında soslar, biberonlu şeker, kekik veya kırmızı biber gibi baharatlar sunulabilir.",
      img: "../assets/food-2.png"
    },
    {
      id: 3,
      name: "Travis",
      price: 109,
      sugest:
        "Travis Pizza, hemen hemen herkesin sevdiği bir yemektir. Hamur tabanı, domates sosu, mozarella peyniri ve çeşitli malzemelerle hazırlanır. Malzemeler arasında salam, sosis, jambon, mantar, biber, soğan, mısır gibi sebzeler ve peynir çeşitleri yer alabilir. Pizza, sıcak servis edilir ve genellikle dilimlenerek servis edilir. Ayrıca, kişisel tercihlerine göre malzemeler değiştirilebilir veya pizza çeşitleri de farklılık gösterebilir.",
      img: "../assets/food-1.png"
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
    ekMalzemeler: "",
    sugest: "",
  });
  const [formErrors, setFormErrors] = useState({
    id: "",
    name: "",
    price: "",
    boyut: "",
    hamur: "",
    text: "",
    count: "",
    secimler: "",
    totalPrice: "",
    ekMalzemeler: "",
    sugest: "",
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
  const [ekMalzemeler, setEkMalzemeler] = useState([]);
  /* const ekMalzemes= []; */

  const perCost = 5;
  const navigate = useNavigate();

  const orderFormSchema = Yup.object().shape({
    boyut: Yup.string().required("Pizza boyutunu seçmek zorunlu"),
    hamur: Yup.string().required("Pizza hamurunu seçmek zorunlu"),
    ekMalzemeler: Yup.array()
      .length()
      .min(4, "en az 4 seçim"),
    text: Yup.string().required("Sipariş notu girin"),
  });
  const selectPizza = (e) => {
    console.log(pizza[e.target.id - 1]);

    setOrderPizza({
      ...orderPizza,
      name: pizza[e.target.id - 1].name,
      price: pizza[e.target.id - 1].price,
      id: pizza[e.target.id - 1].id,
      sugest: pizza[e.target.id - 1].sugest,
    });
  };

  const setCheck = (e) => {
    setOrderPizza({ ...orderPizza, [e.target.name]: e.target.checked });

    if (e.target.checked == true) {
      setEkMalzemeler([...ekMalzemeler, e.target.name]);
      setMalzemeSayaci(malzemeSayaci + 1);
      setTotalPrice(totalPrice + perCost);
    } else {
      setMalzemeSayaci(malzemeSayaci - 1);
      setTotalPrice(totalPrice - perCost);
    }
  };
  const changeHandler = (e) => {
    setOrderPizza({ ...orderPizza, [e.target.name]: e.target.value });

    Yup.reach(orderFormSchema, e.target.name)
      .validate(e.target.value)
      .then((valid) => {
        setFormErrors({ ...formErrors, [e.target.name]: "" });
      })
      .catch((err) => {
        setFormErrors({ ...formErrors, [e.target.name]: err.errors[0] });
      });
  };
  const submitHandler = (e) => {
    e.preventDefault();

    props.siparisss(orderPizza);

    axios
      .post("https://75e9o.mocklab.io/json/1", orderPizza)
      .then((response) => {
        console.log(response.data);

        navigate("/pizza");
      });
  };

  useEffect(() => {
    console.log(ekMalzemeler);
  }, [ekMalzemeler]);

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
      ekMalzemeler: ekMalzemeler,
    });
  }, [totalPrice]);

  return (
    <div className="d-flex flex-column ">
      
      <div className="d-flex flex-row justify-content-center flex-wrap ">
        {pizza.map((e, index) => {
          return (
            <Card
              key={e.id}
              for={e.id}
              style={{
                width: "18rem",
              }}
            >
              <img alt="Sample" src={require(`../assets/food-${e.id}.png` )}/>
              <CardBody>
                <CardTitle tag="h5">{e.name}</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  {e.price} TL
                </CardSubtitle>
                <CardText>{e.sugest}</CardText>
                <Button
                  id={e.id}
                  type="button"
                  name={e.name}
                  onClick={selectPizza}
                >
                  SEÇ
                </Button>
              </CardBody>
            </Card>
          );
          
        })}
        </div>
        <div style={{
      width:"40%",
      margin:"2rem 30%",
      
      
    }}>
        <div className="shadow-sm p-3 mb-1 bg-body rounded">
          <h3 className="text-center"> {orderPizza.name} </h3>
          <div>{orderPizza.price} TL </div>
          <p>
          {orderPizza.sugest}
          </p>
        </div>
        <Form onSubmit={submitHandler}>
          <FormGroup className="d-flex p-2 bd-highlight justify-content-between d-grid gap-2 ">
            <FormGroup
              className="shadow-sm p-3 mb-1 bg-body rounded "
              tag="fieldset"
              id="size-dropdown"
              invalid={formErrors.boyut}
              style={{ width: "50%" }}
            >
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
              <FormFeedback>{formErrors.boyut}</FormFeedback>
            </FormGroup>

            <UncontrolledDropdown
              className="shadow-sm p-3 mb-1 bg-body rounded"
              style={{ width: "50%" }}
            >
              <DropdownToggle caret color="ligth">
                <strong>Hamur Seç</strong>
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
                  name="hamur"
                  value="Orta"
                  id="hamur-type"
                  onClick={changeHandler}
                >
                  Orta Hamur
                </DropdownItem>
                <DropdownItem
                  name="hamur"
                  value="Kalın"
                  id="hamur-type"
                  onClick={changeHandler}
                >
                  Kalın Hamur
                </DropdownItem>
              </DropdownMenu>
              <br></br>
              <p>
                {" "}
                <strong>{orderPizza.hamur}</strong>
              </p>
            </UncontrolledDropdown>
          </FormGroup>

          <FormGroup className="shadow-sm p-3 mb-1 bg-body rounded">
            <h4>Ek Malzemeler:</h4>
            <p>En Fazla 10 malzeme seçebilrisiniz. 5tl</p>
            <FormFeedback>{formErrors.ekMalzemeler}</FormFeedback>

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
              invalid={formErrors.text}
            />
            <FormFeedback>{formErrors.text}</FormFeedback>
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
