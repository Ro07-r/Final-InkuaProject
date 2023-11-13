//Botones Mercado Pago   

const productDescription = document.getElementById("product-description");

const heart5Button = document.getElementById("donate-5");
const heart10Button = document.getElementById("donate-10");
const heart20Button = document.getElementById("donate-20");

const amountInput = document.getElementById("amount-input");
const totalAmount = document.getElementById("total-amount");

let heartCount = 0;

heart5Button.addEventListener("click", () => {
  amountInput.value = 5;
  heartCount = 5;
  updateTotalAmount();
});

heart10Button.addEventListener("click", () => {
  amountInput.value = 10;
  heartCount = 10;
  updateTotalAmount();
});

heart20Button.addEventListener("click", () => {
  amountInput.value = 20;
  heartCount = 20;
  updateTotalAmount();
});

amountInput.addEventListener("input", () => {
  heartCount = amountInput.value;
  updateTotalAmount();
});

const updateTotalAmount = () => {
  const updatedAmount = heartCount * 100;
  totalAmount.innerText = updatedAmount;
};



//Mercado Pago
const mercadopago = new MercadoPago("TEST-366f97e4-58ef-4ae9-9334-57f3015a2dd8", {
    locale: "es-AR", // The most common are: 'pt-BR', 'es-AR' and 'en-US'
  });
  
  document.getElementById("checkout-btn").addEventListener("click", function () {
    const orderData = {
      quantity: 1,
      description: productDescription.innerText,
      price: totalAmount.innerText,
    };
  
    fetch("http://localhost:8080/create_preference", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderData),
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (preference) {
        createCheckoutButton(preference.id);
      })
      .catch(function () {
        alert("Unexpected error");
      });
  });
  
  function createCheckoutButton(preferenceId) {
    // Initialize the checkout
    const bricksBuilder = mercadopago.bricks();
  
    const renderComponent = async (bricksBuilder) => {
      if (window.checkoutButton) window.checkoutButton.unmount();
  
      await bricksBuilder.create(
        "wallet",
        "button-checkout", // class/id where the payment button will be displayed
        {
          initialization: {
            preferenceId: preferenceId,
          },
          callbacks: {
            onError: (error) => console.error(error),
            onReady: () => {},
          },
        }
      );
    };
    window.checkoutButton = renderComponent(bricksBuilder);
  }
