 $(document).ready(function () {
            var owl = $(".slider");
            owl.owlCarousel({
                loop: true,
                items: 1,
                nav: true,
                navText: ""
            });
            $(".next").click(function () {
                owl.trigger('next.owl.carousel');
            })
            $(".prev").click(function () {
                owl.trigger('prev.owl.carousel');
            })
        });