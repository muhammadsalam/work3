// Ripple effect
function createRipple(event) {
    const button = event.currentTarget;

    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
    circle.classList.add('ripple');

    const ripple = button.getElementsByClassName('ripple')[0];

    if (ripple) {
        ripple.remove();
    }

    button.appendChild(circle);
}

const rippleButtons = document.getElementsByClassName('gradient-btn');
for (const rippleButton of rippleButtons) {
    rippleButton.addEventListener('click', createRipple);
}

jQuery(function ($) {
    $('.content__address-btn').on('click', function () {
        let $this = $(this);
        // let old_value = $input.attr('value');
        let value = $('#smart-contract-address').text();

        if ($this.data('clicked') === 'yes') {
            return;
        }

        $this.data('clicked', 'yes');

        // Create an invisible input just to copy the value.
        let $tempInput = $('<input value="' + value + '" />');
        $tempInput.css({
            'position': 'absolute',
            'left': '-1000000px',
            'top': '-1000000px',
        });
        $tempInput.appendTo('.content__block-address');
        $tempInput.attr('value', value);

        if (navigator.userAgent.match(/ipad|iphone/i)) {
            var range = document.createRange(),
                selection;

            $tempInput[0].contentEditable = true;
            $tempInput[0].readOnly = true;

            range.selectNodeContents($tempInput[0]);

            selection = window.getSelection();
            selection.removeAllRanges();
            selection.addRange(range);

            $tempInput[0].setSelectionRange(0, 999999);
        } else {
            $tempInput.select();
        }

        document.execCommand('copy');

        $this.text('Copied!');
        setTimeout(function () {
            $this.text('Copy');
            $tempInput.remove();
            $this.data('clicked', 'no');
        }, 1500);
    });
});
