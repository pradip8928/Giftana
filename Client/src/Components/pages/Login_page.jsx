import React from "react";

export default function Login_page() {
  return (
    <section>
      <div className="col-1">
        <div className="login" id="main">
          <h1>SMARTSTORE</h1>
          <form>
            <div className="input-div">
            <input type="text" placeholder="username" />
            <input type="text" placeholder="password" />
            </div>
            <button className="btnn">Log in</button>
            <span class="psw"><a href="#">Forgot password?</a></span>
            
           
     
          </form>
        </div>
      </div>
    </section>
  );
}
