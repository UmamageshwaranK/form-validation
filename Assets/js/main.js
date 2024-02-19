import JustValidate from "just-validate";

// js validation using plugins
const formEl1 = document.getElementById("formEl");
// console.log(formEl1);
// using instance of JustValidate && check before validation
const formValidation = new JustValidate(formEl1, {
  validateBeforeSubmitting: true,
});

// console.log(formValidation);
// lets use Plugins
formValidation.addField(
  "#name",
  [
    { rule: "required" },
    {
      rule: "minLength",
      value: 3,
    },
    {
      rule: "maxLength",
      value: 20,
    },
  ],
  {
    // Css Class
    errorLabelCssClass: ["form-error"],
  }
);
// its for phone number validation
formValidation.addField(
  "#phone",
  [
    { rule: "required" },
    {
      rule: "number",
    },
    {
      rule: "minLength",
      value: 10,
    },
    {
      rule: "maxLength",
      value: 10,
    },
  ],
  {
    errorLabelCssClass: ["form-error"],
  }
);

formValidation.onSuccess(() => {
  console.log("submited");
  // FormData  get value from this one
  const formData = new FormData(formEl1);
  // console.log(formEl1);
  // console.log(formData);
  // FormData means  whatever forms inside body tag we can access the form data .
  // first create instance of the form data and  then use the inbuild formdata method is called entries().
  // In this method it will return key and values pair contain inside a form data .

  // Object.fromEnteries  its convert the array data into object format
  const formvalueObj = Object.fromEntries(formData.entries());

  // use json to store value  in local storage
  // const dataJson = JSON.stringify(formvalueObj);
  // console.log(dataJson);
  // just converted into json value
  // json stands for javasript object notation its used to store the data key  and value pair. and then its change datatype to string type
  // whenever use the json to use the method of  stringfy()
  // And whenever the data reterive from the database use the  parse() method

  // lets create Array into an object using  fresh object data
  // lets push into the array format

  // exiting Data and check the data empty create an array otherwise not
  //  lets check the value havent in the localstorage
  let existingData = localStorage.getItem("courierData")
    ? JSON.parse(localStorage.getItem("courierData"))
    : [];
  // console.log(existingData);
  existingData.push(formvalueObj);
  // lets test our code
  console.log(existingData);
  localStorage.setItem("courierData", JSON.stringify(existingData));
});
