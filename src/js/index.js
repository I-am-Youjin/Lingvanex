const form = document.getElementById("product-members_form");
const lableTravelers = document.getElementById("travelers_label");
const travelersSliderItem = document.getElementById("travelers_slider_item");
const lableOrganization = document.getElementById("organization_label");
const organizationSliderItem = document.getElementById(
  "organization_slider_item"
);
const lableEmployees = document.getElementById("employees_label");
const employeesSliderItem = document.getElementById("employees_slider_item");
console.log(travelersSliderItem);
console.log(organizationSliderItem);
console.log(employeesSliderItem);

const sliderToogler = (event) => {
  switch (event.target.htmlFor) {
    case "travelers":
      lableTravelers.classList.add("radio-label-checked");
      lableOrganization.classList.remove("radio-label-checked");
      lableEmployees.classList.remove("radio-label-checked");
      travelersSliderItem.classList.remove("slider_item_invisible");
      organizationSliderItem.classList.add("slider_item_invisible");
      employeesSliderItem.classList.add("slider_item_invisible");
      break;
    case "organization":
      lableTravelers.classList.remove("radio-label-checked");
      lableOrganization.classList.add("radio-label-checked");
      lableEmployees.classList.remove("radio-label-checked");
      travelersSliderItem.classList.add("slider_item_invisible");
      organizationSliderItem.classList.remove("slider_item_invisible");
      employeesSliderItem.classList.add("slider_item_invisible");

      break;
    default:
      lableTravelers.classList.remove("radio-label-checked");
      lableOrganization.classList.remove("radio-label-checked");
      lableEmployees.classList.add("radio-label-checked");
      travelersSliderItem.classList.add("slider_item_invisible");
      organizationSliderItem.classList.add("slider_item_invisible");
      employeesSliderItem.classList.remove("slider_item_invisible");
  }
  //   console.log(event.target.htmlFor);
};

lableTravelers?.addEventListener("click", sliderToogler);
lableOrganization?.addEventListener("click", sliderToogler);
lableEmployees?.addEventListener("click", sliderToogler);
