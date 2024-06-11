document.addEventListener('DOMContentLoaded', () => {
    const buyButton = document.getElementById('buyButton');
    const checkoutForm = document.getElementById('checkoutForm');
    const paymentButton = document.getElementById('paymentButton');
    const paymentForm = document.getElementById('paymentForm');
    const pixButton = document.getElementById('pixButton');
    const pixDetails = document.getElementById('pixDetails');

    buyButton.addEventListener('click', () => {
        checkoutForm.classList.remove('hidden');
    });

    paymentButton.addEventListener('click', () => {
        paymentForm.classList.remove('hidden');
    });

    pixButton.addEventListener('click', () => {
        pixDetails.classList.remove('hidden');
        const verifyingAnimation = document.createElement('div');
        verifyingAnimation.classList.add('verifying-animation');
        verifyingAnimation.innerHTML = `
            <div class="spinner"></div>
            <p>Verificando...</p>
        `;
        paymentForm.appendChild(verifyingAnimation);

        setTimeout(() => {
            verifyingAnimation.innerHTML = `
                <p>Chave PIX: 12baf272-93b0-4596-a1f6-fc87499f4d9c</p>
                <p class="almost-yours">É quase seu!</p>
            `;
        }, 2000);
    });
});