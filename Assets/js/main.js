// js validation using plugins
import JustValidate from "just-validate";

const formEl1 = document.getElementById("formEl");
console.log(formEl1);
// using instance of JustValidate
const formValidation = new JustValidate(formEl1);

console.log(formValidation);
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
    {
      rule: "number",
    },
    {
      rule: "minNumber",
      value: 10,
    },
    {
      rule: "maxNumber",
      value: 10,
    },
  ],
  {
    errorLabelCssClass: ["form-error"],
  }
);
