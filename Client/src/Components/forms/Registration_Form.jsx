import React from "react";
//Registration_from.css===Registraion_form.jsx

//can delete XForm is also a registration form
export default function Registraion_Form() {
  return (
    <form>
      <div class="mb-3 row">
        <label for="staticId" class="col-sm-2 col-form-label">
          ID
        </label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="ID" />
        </div>
      </div>
      <div class="mb-3 row">
        <label for="staticUsername" class="col-sm-2 col-form-label">
          Username
        </label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="username" />
        </div>
      </div>
      <div class="mb-3 row">
        <label for="staticEmail" class="col-sm-2 col-form-label">
          Email
        </label>
        <div class="col-sm-10">
          <input type="email" class="form-control" id="email" />
        </div>
      </div>
      <div class="mb-3 row">
        <label for="inputPassword" class="col-sm-2 col-form-label">
          Password
        </label>
        <div class="col-sm-10">
          <input type="password" class="form-control" id="inputPassword" />
        </div>
      </div>
      <div class="btn-group">
        <label class="gender-label">gender</label>
        <input
          type="radio"
          class="btn-check"
          name="options"
          id="option1"
          autocomplete="off"
          checked
        />
        {/* <label class="btn btn-secondary" for="option1">
          Checked
        </label> */}

        <input
          type="radio"
          class="btn-check"
          name="options"
          id="option2"
          autocomplete="off"
        />
        <label class="btn btn-secondary" for="option2">
         Male
        </label>

        <input
          type="radio"
          class="btn-check"
          name="options"
          id="option3"
          autocomplete="off"
        />
        <label class="btn btn-secondary" for="option3">
        Female
        </label>
      </div>
      <div class="mb-3 row">
        <label for="staticfirstname" class="col-sm-2 col-form-label">
          first name
        </label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="firstname" />
        </div>
      </div>{" "}
      <div class="mb-3 row">
        <label for="staticlastname" class="col-sm-2 col-form-label">
          Last name
        </label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="lastname" />
        </div>
        <div class="form-group" id="DOB">
          <label class="control-label" id="date-1" for="date">
            Date
          </label>
          <input
            class="form-control"
            id="date"
            name="date"
            placeholder="MM/DD/YYY"
            type="text"
          />
        </div>
      </div>
      <div class="mb-3 row">
        <label class="col-sm-2 col-form-label">company name</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="company name" />
        </div>
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label" id="textarea">
          Example textarea
        </label>
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
    </form>
  );
}
