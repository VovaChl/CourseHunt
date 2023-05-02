(function ($) {
    class Modal {
        constructor(element, options) {
            this.default = {
                closeClass: 'close-modal',
                autoClose: false,
                autoCloseTime: 1000,
                opacity: .7,
                position: 'center', // top, bottom
                duration: 500,
            };
            this.modal = element;
            this.options = $.extend(this.default, options);
            this.overlay = $('.overlay');
        }

        init() {
            // Show overlay
            this.showOverlay();
            // Show modal
            this.showModal();
            // Set events
            this.events();
        }

        events() {
            this.overlay.on('click', (e) => this.closeModal());
            $(`.${this.options.closeClass}`).on('click', (e) => this.closeModal());
        }

        clearEvents() {
            this.overlay.off('click');
            $(`.${this.options.closeClass}`).off('click');
        }

        showOverlay() {
            if (!this.overlay.length) {
                this.overlay = $('<div class="overlay"></div>');
            }
            // Setup style
            this.overlay.css({
                'display': 'block',
                'position': 'fixed',
                'top':'0',
                'left':'0',
                'right':'0',
                'bottom':'0',
                'opacity':'0',
                'background-color':'`rgba(0, 0, 0, ${this}.options.opacity)`',
                'z-index':'999',
            });

            this.modal.before(this.overlay);
        }

        showModal() {
            // Get width, height
            const halfWidth = this.modal.outerWidth() / 2;
            const halfHeight = this.modal.outerHeight() / 2;
            
            this.overlay.animate({
                opacity: 1
            }, this.options.duration);

            this.modal.css({
                'top':'50%',
                'left':'50%',
                'display':'block',
                'position':'fixed',
                'opacity':'0',
                'z-index':'1000', 
                'margin-top':'`-${halfHeight}px`',
                'margin-left':'`-${halfWidth}px`',
            }).animate({
                opacity: 1,
            }, this.options.duration);

            this.clearEvents();

            // clear timeout
            //
        }

        closeModal() {
            // Close overlay
            this.overlay.animate({
                opacity: 0,
            }, this.options.duration, () => {
                this.overlay.css({ 'display' : 'none' })
            });

            // Close modal
            this.modal.animate({
                opacity: 0,
            }, this.options.duration, () => {
                this.modal.css({ 'display' : 'none' })
            });

        }}

        $.fn.easyModal = function(options) {
            // Init modal
            new Modal(this, options).init();
        }

}(jQuery));