document.addEventListener('DOMContentLoaded', () => {
    const rapportBtn = document.getElementById('rapport-btn');
    if (rapportBtn) {
        rapportBtn.addEventListener('click', function() {
            // 1. Trigger the Bootstrap Modal
            const successModal = new bootstrap.Modal(document.getElementById('successModal'));
            successModal.show();

            // 2. Disable the button (simulating a one-time action)
            this.disabled = true;
            this.innerText = 'Request Sent!';
            this.classList.remove('btn-primary');
            this.classList.add('btn-success', 'disabled');

            // 3. Optional: Add a visual cue to the card (like before)
            document.querySelector('.card').classList.add('border-success', 'border-4');
        });
    }
});
