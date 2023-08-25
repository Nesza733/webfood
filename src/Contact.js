import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Layout, Footer } from "./App";
import ReactDOM from "react-dom/client";
import "./App.css";
import Prodi from "./prodi.jpg";

function Full() {
  return (
    <>
      <Layout />
      <div className="">
        <nav class="row">
          <div className="col-sm-3">
            <></>
          </div>

          <div className="col-sm-5">
            <Contact />
          </div>

          <div class="col-sm-4 ">
            <></>
          </div>
        </nav>
      </div>
      <Footer />
    </>
  );
}

function Contact() {
  return (
    <>
      <div className="card">
        <Avatar />
        <div className="data">
          <Intro />
          <SkillList />
        </div>
      </div>
    </>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="Ai" emoji=" 😢" color="red" />
      <Skill skill="Python" emoji=" 😢" color="orange" />
      <Skill skill="Html" emoji=" 😢" color="yellow" />
      <Skill skill="Css" emoji=" 😢 " color="cyan" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

function Intro() {
  return (
    <div>
      <h1>นายสกุลวรรษ นาวัน</h1>
      <p>
        นักศึกษาสาขาเทคโนโลยีสารสนเทศและการสื่อสาร คณะวิทยาศาสตร์
        มหาวิทยาลัยอุบลราชธี ชื่นชอบเล่นเกม งานอดิเรก นอน ฟังเพลง
      </p>
    </div>
  );
}

function Avatar() {
  return <img src={Prodi} alt="PAT1" className="img-tumbail" />;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Contact />
  </React.StrictMode>
);

export default Full;
