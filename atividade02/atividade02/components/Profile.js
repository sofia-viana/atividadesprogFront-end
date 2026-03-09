export default function Profile() {
  return (
    <div style={{ textAlign: "center"}}>
    <br></br>
    <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
      <img
        src="/foto.jpg"
        alt="Foto de Sofia"
        width="200"
        style={{ borderRadius: "20%" }}
      />
      </div>

      <h2>Sofia Viana</h2>

      <p>
        Olá! tenho 19 anos, estou cursando Sistemas para Internet na UNICAP e
        estou no 3° período.
    </p>
    <p>
        técnica em Programação de Jogos Digitais pela ETE Cícero Dias. 
    </p>
    <p>
        Tenho interesse na área de Dados, especificamente em Ánalise.
    </p>
    </div>
  );
}