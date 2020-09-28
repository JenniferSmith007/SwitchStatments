let resturantItem = "Salmon";
let price = ` `;

switch (resturantItem) {
  case "Burger":
    price += `$10.00`;
    break;
  case "Steak":
    price += `$25.00`;
    break;
  case "Salmon":
    price += `$20.00`;
    break;
  case `Shrimp`:
    price += `$20.00`;
    break;
  case "Chicken":
    price += `$15.00`;
    break;
  default:
    price = ` option not available`;
}
