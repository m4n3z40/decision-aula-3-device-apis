document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    const telInputControl = document.querySelector('.tel-input-control');
    const telLabel = telInputControl.querySelector('label');
    const telInput = telInputControl.querySelector('input');

    telLabel.style.display = 'none';

    telInput.addEventListener('input', evt => {
        if (evt.target.value) {
            telLabel.style.display = 'inline';
        } else {
            telLabel.style.display = 'none';
        }
    });
});
