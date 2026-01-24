
let currentLang = 'en';

const menuData = {
  beverages: [
    { name: { en: "Masala Chai", ar: "شاي ماسالا" }, description: "", id: "b1", price: "$5", image: "icon/masala.jpeg" },
    { name: { en: "Lassi", ar: "لاسي" }, description: "", id: "b2", price: "$5", image: "icon/lassi.jpeg" },
    { name: { en: "Filter Coffee", ar: "قهوة فلتر" }, description: "", id: "b3", price: "$4.5", image: "icon/filter.jpeg" },
    { name: { en: "Aam Panna", ar: "عام بانا" }, description: "", id: "b4", price: "$5.5", image: "icon/Aam Panna.jpeg" },
    { name: { en: "Jaljeera", ar: "جالجيرا" }, description: "", id: "b5", price: "$4.5", image: "icon/jaljeera.jpeg" },
    { name: { en: "Thandai", ar: "ثانداي" }, description: "", id: "b6", price: "$7", image: "icon/thandai.jpeg" },
    { name: { en: "Sugarcane Juice", ar: "عصير قصب السكر" }, description: "", id: "b7", price: "$3.5", image: "icon/sugar-cane.jpeg" },
    { name: { en: "Badam Milk", ar: "حليب اللوز" }, description: "", id: "b8", price: "$6", image: "icon/badam.jpeg" }
  ],
  chinese: [
    { name: { en: "Chilli Gobi", ar: "قرنبيط بالفلفل الحار" }, description: "", id: "c1", price: "$12", image: "icon/chilli.jpeg" },
    { name: { en: "Hakka Noodles", ar: "نودلز هاكا" }, description: "", id: "c2", price: "$13", image: "icon/hakka.jpeg" },
    { name: { en: "Vegetable Spring Rolls", ar: "سبرينغ رولز خضار" }, description: "", id: "c3", price: "$9", image: "icon/spring.jpeg" },
    { name: { en: "Vegetable Chow Mein", ar: "تشو مين خضار" }, description: "", id: "c4", price: "$13", image: "icon/chowmein.jpeg" },
    { name: { en: "Hot and Sour Soup", ar: "شوربة حامض حار" }, description: "", id: "c5", price: "$13", image: "icon/soup.jpeg" },
    { name: { en: "Gobi Manchurian", ar: "قرنبيط منشوريا" }, description: "", id: "c6", price: "$11", image: "icon/Gobi.jpeg" }
  ],
  indian: [
    { name: { en: "Paneer Tikka", ar: "بانير تيكا" }, description: "", id: "i1", price: "$15", image: "icon/paneer.jpeg" },
    { name: { en: "Dal Tadka", ar: "دال تادكا" }, description: "", id: "i2", price: "$12", image: "icon/dal.jpeg" },
    { name: { en: "Chole Bhature", ar: "تشولي باتوري" }, description: "", id: "i3", price: "$14", image: "icon/chole.jpeg" },
    { name: { en: "Masala Dosa", ar: "ماسالا دوسا" }, description: "", id: "i4", price: "$10", image: "icon/masala-d.jpeg" },
    { name: { en: "Samosa", ar: "سمبوسة" }, description: "", id: "i5", price: "$4", image: "icon/samosa.jpeg" },
    { name: { en: "Gulab Jamun", ar: "جولاب جامون" }, description: "", id: "i6", price: "$5", image: "icon/gulab.jpeg" },
    { name: { en: "Rasgulla", ar: "راسغولا" }, description: "", id: "i7", price: "$5", image: "icon/rasgulla.jpeg" }
  ],
  Rice: [
    { name: { en: "Jeera Rice", ar: "أرز بالكمون" }, id: "r1", price: "$8", image: "icon/jeera.jpeg" },
    { name: { en: "Veg Fried Rice", ar: "أرز مقلي بالخضار" }, id: "r2", price: "$11", image: "icon/veg.jpeg" },
    { name: { en: "Paneer Fried Rice", ar: "أرز مقلي بالبانير" }, id: "r3", price: "$13", image: "icon/paneer.jpeg" },
    { name: { en: "Schezwan Fried Rice", ar: "أرز سيتشوان المقلي" }, id: "r4", price: "$13", image: "icon/schezwan.jpeg" },
    { name: { en: "Curd Rice", ar: "أرز بالزبادي" }, id: "r5", price: "$7", image: "icon/curd.jpeg" },
    { name: { en: "Lemon Rice", ar: "أرز بالليمون" }, id: "r6", price: "$8", image: "icon/lemon.jpeg" },
    { name: { en: "Tomato Rice", ar: "أرز بالطماطم" }, id: "r7", price: "$9", image: "icon/tomato.jpeg" },
    { name: { en: "Vegetable Biryani", ar: "برياني خضار" }, id: "r8", price: "$14", image: "icon/veg.jpeg" },
    { name: { en: "Pulao", ar: "بولو" }, id: "r9", price: "$12", image: "icon/pulao.jpeg" }
  ],
  Special_Combos: [
    { name: { en: "North Indian Thali", ar: "ثالي شمال الهند" }, id: "s1", price: "$18", image: "icon/north.jpeg" },
    { name: { en: "South Indian Thali", ar: "ثالي جنوب الهند" }, id: "s2", price: "$16", image: "icon/south.jpeg" },
    { name: { en: "Chapati & Sabzi Combo", ar: "كومبو شباتي وسبزي" }, id: "s3", price: "$13", image: "icon/chapathi.jpeg" }
  ],
  desserts: [
    { name: { en: "Gulab Jamun", ar: "جولاب جامون" }, id: "d1", price: "$5", image: "icon/gulab.jpeg" },
    { name: { en: "Rasgulla", ar: "راسغولا" }, id: "d2", price: "$5", image: "icon/rasgulla.jpeg" },
    { name: { en: "Jalebi", ar: "زلابية" }, id: "d3", price: "$4", image: "icon/jalebi.jpeg" },
    { name: { en: "Kheer", ar: "أرز بلبن" }, id: "d4", price: "$6", image: "icon/kheer.jpeg" },
    { name: { en: "Mysore Pak", ar: "مايسور باك" }, id: "d5", price: "$8", image: "icon/mysore.jpeg" },
    { name: { en: "Malpua", ar: "مالبوا" }, id: "d6", price: "$7.5", image: "icon/malpuva.jpeg" },
    { name: { en: "Vanilla Ice Cream", ar: "آيس كريم فانيليا" }, id: "q1", price: "$6", image: "icon/vanilla.jpeg" },
    { name: { en: "Chocolate Ice Cream", ar: "آيس كريم شوكولاتة" }, id: "q2", price: "$7", image: "icon/chocolate.jpeg" },
    { name: { en: "Strawberry Ice Cream", ar: "آيس كريم فراولة" }, id: "q3", price: "$7", image: "icon/strawberry.jpeg" },
    { name: { en: "Mango Ice Cream", ar: "آيس كريم مانجو" }, id: "q4", price: "$8", image: "icon/mango.jpeg" },
    { name: { en: "Butterscotch Ice Cream", ar: "آيس كريم باترسكوتش" }, id: "q5", price: "$8", image: "icon/butterscotch.jpeg" },
    { name: { en: "Kulfi", ar: "كولفي" }, id: "q6", price: "$10", image: "icon/kulfi.jpeg" }
  ]
};


const translations = {
  en: {
    brand: "Welcome to Delicious Bites",
    back: "Back To Main Menu",
    summary: "Order Summary",
    cartEmpty: "Your cart is empty!",
    floatingText: "Total Items",
    grandTotal: "Grand Total",
    edit: "Edit Order",
    reset: "Reset Order",
    whatsapp: "Send Order On Whatsapp",
    catTitles: {
      beverages: "Beverages 🍹",
      chinese: "Chinese Cuisine 🥡",
      indian: "Indian Cuisine 🍛",
      Rice: "Rice & Biryani 🍚",
      Special_Combos: "Special Combos 🍽️",
      desserts: "Desserts 🍰"
    },
    thanksTitle: "Order Sent!",
    thanksMsg: "Your order has been sent. We will contact you soon.",
    ok: "OK",
    locLabel: "📍 Delivery Location",
    locError: "Location: Not provided"
  },
  ar: {
    brand: "أهلاً وسهلاً بكم في لقيمات لذيذة",
    back: "العودة للقائمة",
    summary: "ملخص الطلب",
    cartEmpty: "عربة التسوق فارغة!",
    floatingText: "إجمالي العناصر",
    grandTotal: "المبلغ الإجمالي",
    edit: "تعديل الطلب",
    reset: "إعادة تعيين",
    whatsapp: "إرسال عبر واتساب",
    catTitles: {
      beverages: "المشروبات 🍹",
      chinese: "المطبخ الصيني 🥡",
      indian: "المطبخ الهندي 🍛",
      Rice: "أرز وبرياني 🍚",
      Special_Combos: "وجبات خاصة 🍽️",
      desserts: "حلويات 🍰"
    },
    thanksTitle: "تم إرسال الطلب!",
    thanksMsg: "تم إرسال طلبك بنجاح. سنتواصل معك قريباً.",
    ok: "تم",
    locLabel: "📍 موقع التوصيل",
    locError: "الموقع: لم يتم توفيره"
  }
};

const cartState = {};
const homepage = document.getElementById("homepage");
const categoryPage = document.getElementById("category-page");
const backButton = document.getElementById("back-button");
const categoryTitle = document.getElementById("category-title");
const itemsList = document.querySelector(".items-list");



// 1. Language Switcher Function
function setLanguage(lang) {
  currentLang = lang;
  
  // Set global direction
  document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';
  
  // Update Header/Static text using your translations object
  const brandEl = document.querySelector('.brand');
  if (brandEl) brandEl.innerText = translations[lang].brand;
  
  const backBtn = document.getElementById('back-button');
  if (backBtn) backBtn.innerText = translations[lang].back;
  
  const summaryBtn = document.getElementById('proceed');
  if (summaryBtn) summaryBtn.innerText = translations[lang].summary;

  // Update Category Cards on Homepage
  document.querySelectorAll(".category-card").forEach(card => {
    const catId = card.getAttribute("data-category");
    const titleEl = card.querySelector('h3');
    if (titleEl && translations[lang].catTitles[catId]) {
        titleEl.innerText = translations[lang].catTitles[catId];
    }
  });}

document.querySelectorAll(".category-card").forEach(category => {
  category.addEventListener("click", () => {
    const categoryName = category.getAttribute("data-category");
    showCategoryPage(categoryName);
  });
});

backButton.addEventListener("click", () => {
  homepage.classList.add("active");
  categoryPage.classList.remove("active");
  categoryTitle.removeAttribute("data-current-cat");
});

function showCategoryPage(category) {
  homepage.classList.remove("active");
  categoryPage.classList.add("active");
  categoryTitle.setAttribute("data-current-cat", category);

  categoryTitle.textContent = translations[currentLang].catTitles[category] || category.toUpperCase();
  itemsList.innerHTML = ``;

  menuData[category].forEach(item => {
    const savedQty = cartState[item.id] || 0;
    itemsList.innerHTML += `
      <div class="item" data-id="${item.id}">
          <img src="${item.image}" alt="${item.name[currentLang]}">
          <h3>${item.name[currentLang]}</h3>
          <p class="cart"></p>
          <p class="price">${item.price}</p>
          <div class="addingDiv">
            <button class="deleteQuantity">-</button>
            <input type="number" class="quantity" value="${savedQty}" readonly>
            <button class="addQuantity">+</button>
          </div>
      </div>`;
  });

  attachItemListeners();
  updateTotalCounter();
}

function attachItemListeners() {

  document.querySelectorAll('.item').forEach(itemDiv => {
    const id = itemDiv.getAttribute('data-id');
    const input = itemDiv.querySelector('.quantity');
    const cartText = itemDiv.querySelector('.cart');

    const updateItemText = (val) => {
      cartText.textContent = val > 0 ? `${val} ${currentLang === 'en' ? 'items' : 'عناصر'}` : "";
    };

    updateItemText(parseInt(input.value) || 0);

    itemDiv.querySelector('.addQuantity').onclick = () => {
      const newVal = (parseInt(input.value) || 0) + 1;
      input.value = newVal;
      cartState[id] = newVal;
      updateItemText(newVal);
      updateTotalCounter();
    };

    itemDiv.querySelector('.deleteQuantity').onclick = () => {
      let val = (parseInt(input.value) || 0);
      if (val > 0) {
        const newVal = val - 1;
        input.value = newVal;
        cartState[id] = newVal;
        updateItemText(newVal);
        updateTotalCounter();
      }
    };
  });

  document.getElementById('proceed').onclick = handleProceed;
  const floatBtn = document.getElementById('floatingProceed');
  if (floatBtn) floatBtn.onclick = handleProceed;
}

function updateTotalCounter() {
  const total = Object.values(cartState).reduce((acc, qty) => acc + qty, 0);
  const floatingBtn = document.getElementById('floatingProceed');
  const totalQtySpan = document.getElementById('totalQty');

  if (total > 0) {
    if (totalQtySpan) totalQtySpan.textContent = total;
    if (floatingBtn) {
      floatingBtn.style.display = 'block';
      // Simple label update for floating button
      floatingBtn.innerHTML = `🛒 ${translations[currentLang].floatingText}: (<span id="totalQty">${total}</span>)`;
    }
  } else {
    if (floatingBtn) floatingBtn.style.display = 'none';
  }
}

function handleProceed() {
  const selectedItems = [];
  let grandTotal = 0;

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

  if (selectedItems.length === 0) {
    return alert(translations[currentLang].cartEmpty);
  }

  renderSummaryPage(selectedItems, grandTotal);
}

function renderSummaryPage(items, total) {
  const mainContent = document.querySelector('.main-content');
  const summaryView = document.getElementById('summary-view');
  const container = summaryView.querySelector('.summary-container');

  // 1. Set global direction for the summary page
  const isAr = currentLang === 'ar';
  summaryView.dir = isAr ? 'rtl' : 'ltr';
  summaryView.style.textAlign = isAr ? 'right' : 'left';

  mainContent.style.display = 'none';
  summaryView.style.display = 'block';

  // 2. Clear and build header
  container.innerHTML = `<h1>${translations[currentLang].summary}</h1>`;

  // 3. Loop items using Flexbox to handle "Start vs End" positioning
  items.forEach(item => {
    container.innerHTML += `
            <div class="summary-item" style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #eee; padding: 10px 0;">
                <strong style="flex: 1;">${item.name[currentLang]}</strong>
                <span dir="ltr" style="font-weight: bold; margin-${isAr ? 'right' : 'left'}: 15px;">
                    ${item.qty} x ${item.price} = $${item.subtotal.toFixed(2)}
                </span>
            </div>`;
  });

  // 4. Grand Total Row
  container.innerHTML += `
        <div style="display: flex; justify-content: space-between; margin-top: 20px; border-top: 2px solid #333; padding-top: 10px;">
            <h2>${translations[currentLang].grandTotal}:</h2>
            <h2 dir="ltr">$${total.toFixed(2)}</h2>
        </div>`;

  // 5. Create Controls (Buttons)
  const controlsContainer = document.createElement('div');
  controlsContainer.className = 'summary-controls';
  controlsContainer.style.display = 'flex';
  controlsContainer.style.gap = '10px';
  controlsContainer.style.justifyContent = 'center';
  controlsContainer.style.marginTop = '20px';

  const editBtn = document.createElement('button');
  editBtn.innerText = translations[currentLang].edit;
  editBtn.id = "editButton";
  editBtn.onclick = () => {
    summaryView.style.display = 'none';
    mainContent.style.display = 'block';
  };

  const resetBtn = document.createElement('button');
  resetBtn.innerText = translations[currentLang].reset;
  resetBtn.id = "resetButton";
  resetBtn.onclick = () => location.reload();

  const whatsappBtn = document.createElement('button');
  whatsappBtn.innerText = translations[currentLang].whatsapp;
  whatsappBtn.id = 'whatsappBtn';

  whatsappBtn.onclick = () => sendWhatsAppOrder(items, total);

  // 6. Final Append
  controlsContainer.append(editBtn, resetBtn);
  container.append(controlsContainer, whatsappBtn);
}


// Ensure sendWhatsAppMessage is defined globally or inside the same scope


// 1. Update the call inside renderSummaryPage to pass 'items':
// whatsappBtn.onclick = () => sendWhatsAppOrder(items, total);

// 2. The Combined Function
function sendWhatsAppOrder(items, currentTotal) {
  const isAr = currentLang === 'ar';
  const phoneNumber = "96176045076";

  // Header based on language
  let whatsappText = isAr ? "*طلب جديد:*\n" : "*New Order:*\n";

  // Build item list from the passed 'items' array
  items.forEach(item => {
    const itemName = item.name[currentLang];
    whatsappText += `• ${itemName} (${item.qty} x ${item.price})\n`;
  });

  // Grand Total
  const totalLabel = isAr ? "المبلغ الإجمالي" : "Grand Total";
  whatsappText += `\n*${totalLabel}: $${currentTotal.toFixed(2)}*`;

  // Handle Location (Optional: requests browser permission)
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        const locLabel = isAr ? "📍 موقع التوصيل" : "📍 Delivery Location";
        whatsappText += `\n\n${locLabel}:\nhttps://www.google.com/maps?q=${lat},${lng}`;
        finishWhatsApp(whatsappText, phoneNumber);
      },
      () => {
        // If user denies location
        const locError = isAr ? "\n\nالموقع: لم يتم توفيره" : "\n\nLocation: Not provided";
        whatsappText += locError;
        finishWhatsApp(whatsappText, phoneNumber);
      }
    );
  } else {
    finishWhatsApp(whatsappText, phoneNumber);
  }
}

// Helper to open the final link
function finishWhatsApp(text, phone) {
  const encodedText = encodeURIComponent(text);
  const link = `https://wa.me/${phone}?text=${encodedText}`;
  window.open(link, '_blank');
}



document.addEventListener('touchmove', function (e) {
  // Check if the user is at the very top of the page
  if (window.scrollY === 0) {
    // Note: {passive: false} is required for preventDefault() to work in modern browsers
  }
}, { passive: false });

// Apply Fade-in Effect
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.body.classList.add("fade-in");
  }, 500);
});







