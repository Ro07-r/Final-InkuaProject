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