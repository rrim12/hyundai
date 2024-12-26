$(function () {
    gsap.timeline({
        scrollTrigger: {
            trigger: ".page01",
            start: "top",
            end: "200%",
            pin: true,
            scrub: 2,
            markers: true,
        },
    })
        .to(
            ".p1_txt > li:nth-child(2)",
            {
                transform: "translateY(0%)",
                opacity: "1",
                duration: 1,
            },
            0.1
        )
        .to(
            "  .p1_card  > li:nth-child(2)",
            {
                transform: "translateY(0%)",
                opacity: "1",
                duration: 1,
            },
            0.2
        )
        .to(
            ".p1_txt > li:nth-child(3)",
            {
                transform: "translateY(0%)",
                opacity: "1",
                duration: 1,
            },
            1.5
        )
        .to(
            "  .p1_card  > li:nth-child(3)",
            {
                transform: "translateY(0%)",
                opacity: "1",
                duration: 1,
            },
            1.6
        )
        .to(
            "  .p1_card  > li:nth-child(3)",
            {
                transform: "translateY(0%)",
                opacity: "1",
                duration: 1,
            },
            2.6
        );
});
