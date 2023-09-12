import Image from "next/image";
import ButtonGroup from "../../components/ButtonGroup";
import Cards from "../../components/Cards";
import Header from "../../components/Header";

const data = [
  {
    firstBtn: "EFFETTUA IL LOGIN",
    secondBtn: "ACCEDI AL TUO ACCOUNT",
  },
  {
    firstBtn: "SCEGLI LA TUA BOUTIQUE",
    secondBtn: "SCEGLI TRA UNA VASTA GAMMA DI ABBIGLIAMENTI A MILANO",
  },
  {
    firstBtn: "CHIAMACI",
    secondBtn: "CHIAMACI PER EFFETTUARE L’ORDINE",
  },
  {
    firstBtn: "IL TUO ORDINE E’ IN ARRIVO",
    secondBtn:
      "PAGAMENTO AL MOMENTO DELLA CONSEGNA. CARTA DI CREDITO O IN CONTANTI",
  },
];

export default function Home() {
  return (
    <div className="container">
      <Header />
      <div className="button-group-container">
        {data.map((item, index) => (
          <div
            key={index}
            className="btn-wrapper"
          >
            <ButtonGroup firstBtn={item.firstBtn} secondBtn={item.secondBtn} />
          </div>
        ))}
      </div>
      <div className="cards-container">
        <Cards />
      </div>
    </div>
  );
}
