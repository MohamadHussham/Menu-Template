// Sample Data
const menuData = {
  beverages: [
    { name: "Masala Chai", description:"", id :"b1", price: "$5", image: "https://res.cloudinary.com/dacpbywfp/image/upload/v1742058735/filter_jjaozc.jpg" },
    { name: "Lassi", description:"", id :"b2", price: "$5", image: "https://res.cloudinary.com/dacpbywfp/image/upload/v1742058741/lassi_ttxyta.jpg" },
    { name: "Filter Coffee", description:"", id :"b3", price: "$4.5", image: "https://res.cloudinary.com/dacpbywfp/image/upload/v1742058735/filter_jjaozc.jpg" },
    { name: "Aam Panna", description:"", id :"b4", price: "$5.5", image: "https://res.cloudinary.com/dacpbywfp/image/upload/v1742058721/Aam_Panna_wksjn8.jpg" },
    { name: "Jaljeera", description:"", id :"b5", price: "$4.5", image: "https://res.cloudinary.com/dacpbywfp/image/upload/v1742058740/jaljeera_gd575s.jpg" },
    { name: "Thandai", description:"", id :"b6", price: "$7", image: "https://res.cloudinary.com/dacpbywfp/image/upload/v1742058734/beverages_gjavoo.jpg" },
    { name: "Sugarcane Juice", description:"", id :"b7", price: "$3.5", image: "https://res.cloudinary.com/dacpbywfp/image/upload/v1742058734/beverages_gjavoo.jpg" },
    { name: "Badam Milk", description:"", id :"b8", price: "$6", image: "https://res.cloudinary.com/dacpbywfp/image/upload/v1742058722/badam_yxzzs7.jpg" }
],

chinese: [
  { name: "Chilli Gobi", description:"", id :"c1", price: "$12", image: "https://res.cloudinary.com/dacpbywfp/image/upload/v1742058724/chilli_qcq2q9.jpg" },
  { name: "Hakka Noodles", description:"", id :"c2", price: "$13", image: "https://res.cloudinary.com/dacpbywfp/image/upload/v1742058737/hakka_h7hgwg.jpg" },
  { name: "Vegetable Spring Rolls", description:"", id :"c3", price: "$9", image: "https://res.cloudinary.com/dacpbywfp/image/upload/v1742058738/Chinese_Cuisine_lmmpm6.jpg" },
  { name: "Vegetable Chow Mein", description:"", id :"c4", price: "$13", image: "https://res.cloudinary.com/dacpbywfp/image/upload/v1742058741/chowmein_vsaxqu.jpg" },
  { name: "Hot and Sour Soup", description:"", id :"c5", price: "$13", image: "https://res.cloudinary.com/dacpbywfp/image/upload/v1742058755/soup_obhccu.jpg" },
  { name: "Gobi Manchurian", description:"", id :"c6", price: "$11", image: "https://res.cloudinary.com/dacpbywfp/image/upload/v1742058737/Gobi_yvhcct.jpg" }
],



indian: [
  { name: "Paneer Tikka", description:"", id :"i1", price: "$15", image: "https://res.cloudinary.com/dacpbywfp/image/upload/v1742058751/paneer_gssuym.jpg" },
  { name: "Dal Tadka", description:"", id :"i2", price: "$12", image: "https://res.cloudinary.com/dacpbywfp/image/upload/v1742058734/dal_gkocel.jpg" },
  { name: "Chole Bhature", description:"", id :"i3", price: "$14", image: "https://res.cloudinary.com/dacpbywfp/image/upload/v1742058730/chole_lyaqyv.jpg" },
  { name: "Masala Dosa", description:"", id :"i4", price: "$10", image: "https://res.cloudinary.com/dacpbywfp/image/upload/v1742058744/masala-d_wcs428.jpg" },
  { name: "Samosa", description:"", id :"i5", price: "$4", image: "https://res.cloudinary.com/dacpbywfp/image/upload/v1742058738/indian-cuisine_kj9pvm.jpg" },
  { name: "Gulab Jamun", description:"", id :"i6", price: "$5", image: "https://res.cloudinary.com/dacpbywfp/image/upload/v1742058736/gulab_hezplt.jpg" },
  { name: "Rasgulla", description:"", id :"i7", price: "$5", image: "https://res.cloudinary.com/dacpbywfp/image/upload/v1742058753/rasgulla_on1yn8.jpg" }
],
Rice: [
  { name: "Jeera Rice", description:"", id :"r1", price: "$8", image: "icon/jeera.jpeg" },
  { name: "Veg Fried Rice", description:"", id :"r2", price: "$11", image: "icon/veg.jpeg" },
  { name: "Paneer Fried Rice", description:"", id :"r3", price: "$13", image: "icon/paneer.jpeg" },
  { name: "Schezwan Fried Rice", description:"", id :"r4", price: "$13", image: "icon/schezwan.jpeg" },
  { name: "Curd Rice", description:"", id :"r5", price: "$7", image: "icon/curd.jpeg" },
  { name: "Lemon Rice", description:"", id :"r6", price: "$8", image: "icon/lemon.jpeg" },
  { name: "Tomato Rice", description:"", id :"r7", price: "$9", image: "icon/tomato.jpeg" },
  { name: "Vegetable Biryani", description:"", id :"r8", price: "$14", image: "icon/veg.jpeg" },
  { name: "Pulao", description:"", id :"r9", price: "$12", image: "icon/pulao.jpeg" },

],
Special_Combos: [
  { name: "North Indian Thali", description:"", id :"s1", price: "$18", image: "https://res.cloudinary.com/dacpbywfp/image/upload/v1742058752/north_khmdvt.jpg" },
  { name: "South Indian Thali", description:"", id :"s2", price: "$16", image: "https://res.cloudinary.com/dacpbywfp/image/upload/v1742058738/indian-cuisine_kj9pvm.jpg" },
  { name: "Chapati & Sabzi Combo", description:"", id :"s3", price: "$13", image: "https://res.cloudinary.com/dacpbywfp/image/upload/v1742058724/chapathi_euexrc.jpg" }
],

desserts: [
  { name: "Gulab Jamun", description:"", id :"d1", price: "$5", image: "icon/gulab.jpeg" },
  { name: "Rasgulla", description:"", id :"d2", price: "$5", image: "icon/rasgulla.jpeg" },
  { name: "Jalebi", description:"", id :"d3", price: "$4", image: "icon/jalebi.jpeg" },
  { name: "Kheer", description:"", id :"d4", price: "$6", image: "icon/kheer.jpeg" },
  { name: "Mysore Pak", description:"", id :"d5", price: "$8", image: "icon/mysore.jpeg" },
  { name: "Malpua", description:"", id :"d6", price: "$7.5", image: "icon/malpuva.jpeg" },
  ,

  // Ice Creams
  { name: "Vanilla Ice Cream", description:"", id :"q1", price: "$6", image: "icon/vanilla.jpeg" },
  { name: "Chocolate Ice Cream", description:"", id :"q2", price: "$7", image: "icon/chocolate.jpeg" },
  { name: "Strawberry Ice Cream", description:"", id :"q3", price: "$7", image: "icon/strawberry.jpeg" },
  { name: "Mango Ice Cream", description:"", id :"q4", price: "$8", image: "icon/mango.jpeg" },
  { name: "Butterscotch Ice Cream", description:"q5", id :"", price: "$8", image: "icon/butterscotch.jpeg" },
  { name: "Kulfi", description:"", id :"q6", price: "$10", image: "icon/kulfi.jpeg" }
]

  };
  
  // DOM Elements
  const homepage = document.getElementById("homepage");
  const categoryPage = document.getElementById("category-page");
  const backButton = document.getElementById("back-button");
  const categoryTitle = document.getElementById("category-title");
  const itemsList = document.querySelector(".items-list");
  
  // Event Listeners
  document.querySelectorAll(".category-card").forEach(category => {
    category.addEventListener("click", () => {
      const categoryName = category.getAttribute("data-category");
      showCategoryPage(categoryName);
    });
  });
  
  backButton.addEventListener("click", () => {
    homepage.classList.add("active");
    categoryPage.classList.remove("active");
  });
  
  // Functions
 // Highlight Active Category
const cartState = {}; 

function showCategoryPage(category) {
  homepage.classList.remove("active");
  categoryPage.classList.add("active");

  categoryTitle.textContent = category.toUpperCase();
  // Keep the proceed button at the top
  itemsList.innerHTML = ``;

  menuData[category].forEach(item => {
    // Check if we already have a saved quantity for this item
    const savedQty = cartState[item.id] || 0;

    itemsList.innerHTML += `
      <div class="item" data-id="${item.id}">
          <img src="${item.image}" alt="${item.name}">
          <h3>${item.name}</h3>
          <p class="description">${item.description}</p>
          <p class="price">${item.price}</p>
          <div class="addingDiv">
            <button class="deleteQuantity">-</button>
            <input type="number" class="quantity" value="${savedQty}" placeholder="0" id="${item.id}" readonly>
            <button class="addQuantity">+</button>
          </div>
      </div>`;
  });
   attachItemListeners();
}


 // Add Active Class for Highlight Effect
  document.querySelectorAll(".category-card").forEach(card => {
      card.classList.remove("active-category");
  });
  document.querySelector(`[data-category="${category}"]`).classList.add("active-category");




// Handle Increment and Decrement


function attachItemListeners() {
  document.querySelectorAll('.item').forEach(itemDiv => {
    const id = itemDiv.getAttribute('data-id');
    const input = itemDiv.querySelector('.quantity');

    itemDiv.querySelector('.addQuantity').onclick = () => {
      const newVal = (parseInt(input.value) || 0) + 1;
      input.value = newVal;
      cartState[id] = newVal; // Save to global state
    };

    itemDiv.querySelector('.deleteQuantity').onclick = () => {
      let val = (parseInt(input.value) || 0);
      if (val > 0) {
        const newVal = val - 1;
        input.value = newVal;
        cartState[id] = newVal; // Save to global state
      }
    };
  });

    document.getElementById('proceed').onclick = () => {
    const selectedItems = [];
    let grandTotal = 0;

    // Loop through every item in your entire menuData object
    Object.keys(menuData).forEach(cat => {
      menuData[cat].forEach(item => {
        const qty = cartState[item.id] || 0;
        if (qty > 0) {
          const priceValue = parseFloat(item.price.replace(/[^0-9.-]+/g, ""));
          const subtotal = priceValue * qty;
          grandTotal += subtotal;
          selectedItems.push({ ...item, qty, subtotal });
        }
      });
    });

    if (selectedItems.length === 0) return alert("Your cart is empty!");

    renderSummaryPage(selectedItems, grandTotal);
  };
}

function renderSummaryPage(items, total) {
    document.body.innerHTML = '<div class="summary-container"><h1>Order Summary</h1></div>';
    const container = document.querySelector('.summary-container');

    items.forEach(item => {
        container.innerHTML += `
            <div class="summary-item">
                <p><strong>${item.name}</strong>: ${item.qty} x ${item.price} = $${item.subtotal.toFixed(2)}</p>
            </div>`;
    });

    container.innerHTML += `<h2>Grand Total: $${total.toFixed(2)}</h2>`;

    const backBtn = document.createElement('button');
    backBtn.innerText = 'Reset Order';
    backBtn.id = 'resetButton';
    backBtn.onclick = () => location.reload();
    container.appendChild(backBtn);

    const whatsappBtn = document.createElement('button');
    whatsappBtn.innerText = 'Order';
    whatsappBtn.id = 'whatsappBtn';
    container.appendChild(whatsappBtn);

    whatsappBtn.onclick = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const location = `Lat: ${position.coords.latitude}, Lon: ${position.coords.longitude}`;
                    sendWhatsAppMessage(items, total, location);
                },
                (error) => {
                    console.error("Error getting location:", error);
                    sendWhatsAppMessage(items, total, "Location not available");
                }
            );
        } else {
            console.error("Geolocation is not supported by this browser.");
            sendWhatsAppMessage(items, total, "Location not available");
        }
    };
}

function sendWhatsAppMessage(items, total, location) {
    let whatsappText = "I want to order:\n";
    const summaryItems = document.querySelectorAll(".summary-item p");

    summaryItems.forEach(p => {
        whatsappText += `- ${p.innerText.trim()}\n`;
    });

    whatsappText += `\nGrand Total: $${total.toFixed(2)}\n`;
    whatsappText += `\nMy Location: ${location}`;

    const encodedText = encodeURIComponent(whatsappText);
    const whatsappLink = `https://wa.me/96176045076?text=${encodedText}`;
    window.open(whatsappLink, '_blank');
}

   

    
 

 

// Apply Fade-in Effect
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
      document.body.classList.add("fade-in");
  }, 500);
});

  
  
  
  


