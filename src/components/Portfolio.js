import { Button, Container, Row, Col } from "react-bootstrap";
import "../style/Portfolio.scss";
import elang from "../assets/elangdua.png";
import kasir from "../assets/kasir.png";
import hoops from "../assets/hoops.png";
import portgam from "../assets/portfolio.png";
import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Portfolio() {
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const ref6 = useRef(null);
  const ref7 = useRef(null);
  const ref8 = useRef(null);
  const ref9 = useRef(null);
  const refa = useRef(null);
  const refb = useRef(null);
  const refc = useRef(null);
  const refd = useRef(null);
  const refe = useRef(null);
  const reff = useRef(null);
  const pergi = useNavigate();
  useEffect(() => {
    var kecap = ref4.current;
    kecap.onclick = function () {
      var foto = elang;
      var judul = "Website Bisnis";
      var deskripsi =
        "Project ini merupakan hasil pesanan dari sebuah perusahaan kecap yang ingin mempunyai website sendiri, Website tersebut saya bangun menggunakan HTML, CSS serta dengan bantuan Framerwork Bootstrap dan SCSS. Pada website ini terdapat tampilan informasi-informasi seputar perusahaan, seperti produk perusahaan, contact perusahan, dan alamat perusahaan. Website dapat dikunjungi dengan mengklik Gambar !!";
      var a = "https://elangdua.rf.gd/";
      localStorage.setItem("foto", foto);
      localStorage.setItem("judul", judul);
      localStorage.setItem("des", deskripsi);
      localStorage.setItem("to", a);

      pergi("/portfolio");
    };

    ref8.current.onclick = function () {
      var foto = elang;
      var judul = "Website Bisnis";
      var deskripsi =
        "Project ini merupakan hasil pesanan dari sebuah perusahaan kecap yang ingin mempunyai website sendiri, Website tersebut saya bangun menggunakan HTML, CSS serta dengan bantuan Framerwork Bootstrap dan SCSS. Pada website ini terdapat tampilan informasi-informasi seputar perusahaan, seperti produk perusahaan, contact perusahan, dan alamat perusahaan. Website dapat dikunjungi dengan mengklik Gambar !!";
      var a = "https://elangdua.rf.gd/";
      localStorage.setItem("foto", foto);
      localStorage.setItem("judul", judul);
      localStorage.setItem("des", deskripsi);
      localStorage.setItem("to", a);

      pergi("/portfolio");
    };
    ref9.current.onclick = function () {
      var foto = elang;
      var judul = "Website Bisnis";
      var deskripsi =
        "Project ini merupakan hasil pesanan dari sebuah perusahaan kecap yang ingin mempunyai website sendiri, Website tersebut saya bangun menggunakan HTML, CSS serta dengan bantuan Framerwork Bootstrap dan SCSS. Pada website ini terdapat tampilan informasi-informasi seputar perusahaan, seperti produk perusahaan, contact perusahan, dan alamat perusahaan. Website dapat dikunjungi dengan mengklik Gambar !!";
      var a = "https://elangdua.rf.gd/";
      localStorage.setItem("foto", foto);
      localStorage.setItem("judul", judul);
      localStorage.setItem("des", deskripsi);
      localStorage.setItem("to", a);

      pergi("/portfolio");
    };

    var kasirr = ref5.current;
    kasirr.onclick = function () {
      var foto = kasir;
      var judul = "Aplikasi Kasir";
      var deskripsi =
        "Project ini merupakan sebuah aplikasi kasir yang terkoneksi ke database gudang, sehingga setiap pemesanan dan pembelian barang akan tercatat secara otomatis pada database gudang. Aplikasi ini saya bangun menggunakan programming language C# dan SQL pada databasenya. source code aplikasi ini dapat dilihat pada repository Github saya atau mengKlik Gambar !!";
      var a = "https://github.com/cun-song/Kasir-Warehouse";
      localStorage.setItem("to", a);
      localStorage.setItem("foto", foto);
      localStorage.setItem("judul", judul);
      localStorage.setItem("des", deskripsi);
      pergi("/portfolio");
    };
    refa.current.onclick = function () {
      var foto = kasir;
      var judul = "Aplikasi Kasir";
      var deskripsi =
        "Project ini merupakan sebuah aplikasi kasir yang terkoneksi ke database gudang, sehingga setiap pemesanan dan pembelian barang akan tercatat secara otomatis pada database gudang. Aplikasi ini saya bangun menggunakan programming language C# dan SQL pada databasenya. source code aplikasi ini dapat dilihat pada repository Github saya atau mengKlik Gambar !!";
      var a = "https://github.com/cun-song/Kasir-Warehouse";
      localStorage.setItem("to", a);
      localStorage.setItem("foto", foto);
      localStorage.setItem("judul", judul);
      localStorage.setItem("des", deskripsi);
      pergi("/portfolio");
    };

    refb.current.onclick = function () {
      var foto = kasir;
      var judul = "Aplikasi Kasir";
      var deskripsi =
        "Project ini merupakan sebuah aplikasi kasir yang terkoneksi ke database gudang, sehingga setiap pemesanan dan pembelian barang akan tercatat secara otomatis pada database gudang. Aplikasi ini saya bangun menggunakan programming language C# dan SQL pada databasenya. source code aplikasi ini dapat dilihat pada repository Github saya atau mengKlik Gambar !!";
      var a = "https://github.com/cun-song/Kasir-Warehouse";
      localStorage.setItem("to", a);
      localStorage.setItem("foto", foto);
      localStorage.setItem("judul", judul);
      localStorage.setItem("des", deskripsi);
      pergi("/portfolio");
    };
    var ecommerce = ref6.current;
    ecommerce.onclick = function () {
      var foto = hoops;
      var judul = "Website Ecommerce";
      var deskripsi =
        "Project ini merupakan sebuah website Ecommerce/Toko online yang menjual peralatan-peralatan olahraga basket. Website ini saya bangun menggunakan HTML, CSS, dan JavaScript. Website ini masih sangat sederhana karena hanya sebagai tampilan, bisa melakukan transaksi akan tetapi tidak tercatat ke database. website ini masih dalam tahap prototype, Website dapat dikunjungi dengan mengklik Gambar !!";
      var a = "https://hoopsuniverse.netlify.app/";
      localStorage.setItem("to", a);
      localStorage.setItem("foto", foto);
      localStorage.setItem("judul", judul);
      localStorage.setItem("des", deskripsi);

      pergi("/portfolio");
    };

    refc.current.onclick = function () {
      var foto = hoops;
      var judul = "Website Ecommerce";
      var deskripsi =
        "Project ini merupakan sebuah website Ecommerce/Toko online yang menjual peralatan-peralatan olahraga basket. Website ini saya bangun menggunakan HTML, CSS, dan JavaScript. Website ini masih sangat sederhana karena hanya sebagai tampilan, bisa melakukan transaksi akan tetapi tidak tercatat ke database. website ini masih dalam tahap prototype, Website dapat dikunjungi dengan mengklik Gambar !!";
      var a = "https://hoopsuniverse.netlify.app/";
      localStorage.setItem("to", a);
      localStorage.setItem("foto", foto);
      localStorage.setItem("judul", judul);
      localStorage.setItem("des", deskripsi);

      pergi("/portfolio");
    };

    refd.current.onclick = function () {
      var foto = hoops;
      var judul = "Website Ecommerce";
      var deskripsi =
        "Project ini merupakan sebuah website Ecommerce/Toko online yang menjual peralatan-peralatan olahraga basket. Website ini saya bangun menggunakan HTML, CSS, dan JavaScript. Website ini masih sangat sederhana karena hanya sebagai tampilan, bisa melakukan transaksi akan tetapi tidak tercatat ke database. website ini masih dalam tahap prototype, Website dapat dikunjungi dengan mengklik Gambar !!";
      var a = "https://hoopsuniverse.netlify.app/";
      localStorage.setItem("to", a);
      localStorage.setItem("foto", foto);
      localStorage.setItem("judul", judul);
      localStorage.setItem("des", deskripsi);

      pergi("/portfolio");
    };

    var porto = ref7.current;
    porto.onclick = function () {
      var foto = portgam;
      var judul = "Website Portofolio";
      var deskripsi =
        "Project ini merupakan sebuah website Portofolio yang menampilkan informasi-informasi mengenai saya dan portofolio yang telah saya kerjakan. Website ini saya bangung menggunakan HTML, SASS dan bantuan framework Bootstrap dan ReactJS. Website ini merupakan website yang sedang kalian akses sekarang, terdapat juga tampilan Contact, About, dan Skill saya.";
      var a = "https://cunsong.me/";
      localStorage.setItem("to", a);
      localStorage.setItem("foto", foto);
      localStorage.setItem("judul", judul);
      localStorage.setItem("des", deskripsi);
      pergi("/portfolio");
    };

    refe.current.onclick = function () {
      var foto = portgam;
      var judul = "Website Portofolio";
      var deskripsi =
        "Project ini merupakan sebuah website Portofolio yang menampilkan informasi-informasi mengenai saya dan portofolio yang telah saya kerjakan. Website ini saya bangung menggunakan HTML, SASS dan bantuan framework Bootstrap dan ReactJS. Website ini merupakan website yang sedang kalian akses sekarang, terdapat juga tampilan Contact, About, dan Skill saya.";
      var a = "https://cunsong.me/";
      localStorage.setItem("to", a);
      localStorage.setItem("foto", foto);
      localStorage.setItem("judul", judul);
      localStorage.setItem("des", deskripsi);
      pergi("/portfolio");
    };
    reff.current.onclick = function () {
      var foto = portgam;
      var judul = "Website Portofolio";
      var deskripsi =
        "Project ini merupakan sebuah website Portofolio yang menampilkan informasi-informasi mengenai saya dan portofolio yang telah saya kerjakan. Website ini saya bangung menggunakan HTML, SASS dan bantuan framework Bootstrap dan ReactJS. Website ini merupakan website yang sedang kalian akses sekarang, terdapat juga tampilan Contact, About, dan Skill saya.";
      var a = "https://cunsong.me/";
      localStorage.setItem("to", a);
      localStorage.setItem("foto", foto);
      localStorage.setItem("judul", judul);
      localStorage.setItem("des", deskripsi);
      pergi("/portfolio");
    };
  }, [pergi]);

  return (
    <Container>
      <div className="d-flex align-items-center justify-content-between mb-5 boxjudulporto">
        <div>
          <h1 className="judulp">FEATURED PROJECTS</h1>
          <div className="garisfolio"></div>
        </div>
        <Button className="d-none butview text-light">VIEW ALL</Button>
      </div>
      <Row className="justify-content-between">
        <Col xl="2" className="mask">
          <div className="bg-danger backimage">
            <img src={elang} className="w-100 h-100" alt="" ref={ref4} />
          </div>
          <h2 className="judulporto" ref={ref8}>
            Elang Dua
          </h2>
          <div className="d-flex align-items-center boxknow" ref={ref9}>
            <h3 className="know mt-2 me-2">KNOW MORE</h3>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-right arrow" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
            </svg>
          </div>
        </Col>
        <Col xl="2" className="mask">
          <div className="bg-danger backimage">
            <img src={kasir} className="w-100 h-100" alt="" ref={ref5} />
          </div>
          <h2 className="judulporto" ref={refb}>
            Kasir
          </h2>
          <div className="d-flex align-items-center" ref={refa}>
            <h3 className="know mt-2 me-2">KNOW MORE</h3>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-right arrow" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
            </svg>
          </div>
        </Col>
        <Col xl="2" className="mask">
          <div className="bg-danger backimage">
            <img src={hoops} className="w-100 h-100" alt="" ref={ref6} />
          </div>
          <h2 className="judulporto" ref={refc}>
            Hoops Universe
          </h2>
          <div className="d-flex align-items-center " ref={refd}>
            <h3 className="know mt-2 me-2">KNOW MORE</h3>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-right arrow" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
            </svg>
          </div>
        </Col>
        <Col xl="2" className="mask">
          <div className="bg-danger backimage">
            <img src={portgam} className="w-100 h-100" alt="" ref={ref7} />
          </div>
          <h2 className="judulporto" ref={refe}>
            API Visualization
          </h2>
          <div className="d-flex align-items-center" ref={reff}>
            <h3 className="know mt-2 me-2">KNOW MORE</h3>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-right arrow" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
            </svg>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Portfolio;
