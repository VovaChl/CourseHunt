(function ($) {
    // Tabs
    const controls = $('.nav-tabs li a');
    // Add event listener
    controls.on('click', tabs);
    // Handler
    function tabs (e) {
        e.preventDefault();

        if ($(this).closest('li').hasClass('active')) {
            return;
        }
        // Find parents
        const list = $(this).closest('ul');
        const tabContent = list.next('.tab-content');
        // Target to display
        const target = $(this).attr('href');
        // Active tab
        const tabActive = tabContent.find('.tab-pane.active');

        // Set active class
        list.find('li.active').removeClass('active');
        $(this).closest('li').addClass('active');

        // Show active tab
        tabActive.fadeOut('fast', () => {
            tabActive.removeClass('active');

            $(target).fadeIn('fast', () =>  $(target).addClass('active'));
        })
    }
}(jQuery));