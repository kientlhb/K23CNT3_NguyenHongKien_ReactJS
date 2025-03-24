import React from "react";

export default function NhkHome() {
  return (
    <section
      aria-label="Welcome Section"
      className="container-fluid p-0"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/free-vector/dark-blue-waves-dots-abstract-background_79603-879.jpg?t=st=1742397126~exp=1742400726~hmac=e27576d12ce8864badeae450a51d6d9fa01d60556afd3b577a44c3ffa5811704&w=1380')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        minHeight: "20vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        className="text-center p-4 animate__animated animate__fadeIn"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          borderRadius: "10px",
          maxWidth: "90%",
          width: "600px",
        }}
      >
        <h1
          className="display-5 animate__animated animate__bounce"
          style={{ color: "#ffd700" }} 
        >
          Chào mừng đến với WEB MOCKAPI của NHK (Nguyen Hong Kien)
        </h1>
        <p
          className="lead animate__animated animate__fadeInUp"
          style={{ color: "#00c3ff" }} 
        >
          Simple, Fast, Secure and Free!
        </p>
      </div>
    </section>
  );
}
