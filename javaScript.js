// fetch('products.json') // Replace with your API or JSON file URL
// .then(response => {
//   if (!response.ok) {
//     throw new Error("Network response was not ok");
//   }
//   return response.json(); // Parse JSON
// })
// .then(data => {
//   const productsContainer = document.querySelector(".products"); // Parent container
//   data.products.forEach(product => {

//     const totalPrice = product.price * product.quantity;
//     const averagePrice = totalPrice / product.quantity;

//     // Create a new item for each product
//     const item = document.createElement("div");
//     item.classList.add("item");
//     item.innerHTML = `
//       <div class="cross spread">X</div>
//       <div class="heart spread"></div>
//       <div class="image spread">
//         <img src="${product.image}" alt="${product.name}" />
//       </div>
//       <div class="item-detail spread">
//         <h3>${product.name}</h3>
//         <p>Price: ₹${product.price}</p>
//       </div>
//       <div class="remove-item spread">➖</div>
//       <div class="quantity">Quantity: ${product.quantity}</div>
//       <div class="add-item spread">➕</div>
//       <div class="curent-price spread">Total: ₹${totalPrice}</div>
//       <div class="add-item spread">Average: ₹${calculateAverage(product.price, product.quantity)}</div>
//     `;
//     productsContainer.appendChild(item); // Append item to the container


//       // Select the 'add-item', 'remove-item', 'quantity', and 'curent-price' elements within each item
//       const addItemButton = item.querySelector(".add-item");
//       const removeItemButton = item.querySelector(".remove-item");
//       const quantityElement = item.querySelector(".quantity");
//       const totalPriceElement = item.querySelector(".curent-price");

//       // Event listener for 'add-item' button to increase quantity and update price
//       addItemButton.addEventListener("click", () => {
//         product.quantity += 1; // Increase quantity
//         quantityElement.textContent = `Quantity: ${product.quantity}`; // Update quantity in UI
//         totalPriceElement.textContent = `Total: ₹${product.price * product.quantity}`; // Update total price
//         averagePriceElement.textContent = `Average: ₹${calculateAverage(product.price, product.quantity)}`;
//       });
    
//     function calculateAverage(price, quantity) {
//       const dumbValue = 0;
//         if (quantity > 0) {
//           return (price * quantity / quantity).toFixed(2);  // Correct average calculation
//         }
//         return dumbValue.toFixed(2);  // Return product price as default if quantity is 0
//       }

//       // Event listener for 'remove-item' button to decrease quantity and update price
//       removeItemButton.addEventListener("click", () => {
//         if (product.quantity > 0) {
//           product.quantity -= 1; // Decrease quantity
//           quantityElement.textContent = `Quantity: ${product.quantity}`; // Update quantity in UI
//           totalPriceElement.textContent = `Total: ₹${product.price * product.quantity}`; // Update total price
//           averagePriceElement.textContent = `Average: ₹${calculateAverage(product.price, product.quantity)}`;
//         } else {
//           alert("You cannot remove more items. The quantity is already at 0.");
//         }
//       });
    
//       // Select the heart element within each item
//       const heart = item.querySelector(".heart");

//       // Add event listener to toggle the "liked" style on the heart
//       heart.addEventListener("click", () => {
//         heart.classList.toggle("is-active") // Toggle the "liked" class on click
//       });

//   });
// })
// .catch(error => {
//   console.error("Error fetching or parsing JSON data:", error);
// });


fetch('products.json') // Replace with your API or JSON file URL
  .then(response => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json(); // Parse JSON
  })
  .then(data => {
    const productsContainer = document.querySelector(".products"); // Parent container
    data.products.forEach(product => {

      const totalPrice = product.price * product.quantity;
      const average = calculateAverage(product.price, product.quantity);

      // Create a new item for each product
      const item = document.createElement("div");
      item.classList.add("item");
      item.innerHTML = `
        <div class="cross spread">X</div>
        <div class="heart spread"></div>
        <div class="image spread">
          <img src="${product.image}" alt="${product.name}" />
        </div>
        <div class="item-detail spread">
          <h3>${product.name}</h3>
          <p>Price: ₹${product.price}</p>
        </div>
        <div class="remove-item spread">➖</div>
        <div class="quantity">Quantity: ${product.quantity}</div>
        <div class="add-item spread">➕</div>
        <div class="curent-price spread">Total: ₹${totalPrice}</div>
        <div class="average-price spread">Average: ₹0</div>
      `;
      productsContainer.appendChild(item); // Append item to the container

      // Select the 'add-item', 'remove-item', 'quantity', 'curent-price', and 'average-price' elements within each item
      const addItemButton = item.querySelector(".add-item");
      const removeItemButton = item.querySelector(".remove-item");
      const quantityElement = item.querySelector(".quantity");
      const totalPriceElement = item.querySelector(".curent-price");
      const averagePriceElement = item.querySelector(".average-price");

      // Function to calculate average price
      function calculateAverage(price, quantity) {
        // console.log((quantity > 0) ? ((price * quantity) / quantity).toFixed(2) : 0);
        return (quantity > 0) ? ((price * quantity) / quantity).toFixed(2) : 0;
      }

      // Event listener for 'add-item' button to increase quantity and update price
      addItemButton.addEventListener("click", () => {
        product.quantity += 1; // Increase quantity
        quantityElement.textContent = `Quantity: ${product.quantity}`; // Update quantity in UI
        totalPriceElement.textContent = `Total: ₹${product.price * product.quantity}`; // Update total price
        averagePriceElement.textContent = `Average: ₹${calculateAverage(product.price, product.quantity)}`; // Update average price
      });

      // Event listener for 'remove-item' button to decrease quantity and update price
      removeItemButton.addEventListener("click", () => {
        if (product.quantity > 0) {
          product.quantity -= 1; // Decrease quantity
          quantityElement.textContent = `Quantity: ${product.quantity}`; // Update quantity in UI
          totalPriceElement.textContent = `Total: ₹${product.price * product.quantity}`; // Update total price
          averagePriceElement.textContent = `Average: ₹${calculateAverage(product.price, product.quantity)}`; // Update average price
        } else {
          alert("You cannot remove more items. The quantity is already at 0.");
        }
      });

      // Select the heart element within each item
      const heart = item.querySelector(".heart");

      // Add event listener to toggle the "liked" style on the heart
      heart.addEventListener("click", () => {
        heart.classList.toggle("is-active"); // Toggle the "liked" class on click
      });

    });
  })
  .catch(error => {
    console.error("Error fetching or parsing JSON data:", error);
  });



