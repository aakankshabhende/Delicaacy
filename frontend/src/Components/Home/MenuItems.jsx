import sandwich from "../../Assets/breakfast-1.jpg"; // imported sandwich pic from Assets folder

// Array of menu items.
const MenuItems = [
  {
    img: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    name: "Pasta",
    price: "₹ 80",
    description: "Fresh Creamy",
  },
  {
    img: "https://images.unsplash.com/photo-1574126154517-d1e0d89ef734?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80",
    name: "Pizza",
    price: "₹ 100",
    description: "Fresh Cheesy",
  },
  {
    img: sandwich,
    name: "Sandwich",
    price: "₹ 60",
    description: "Loaded with Veggies",
  },
];

export default MenuItems;
