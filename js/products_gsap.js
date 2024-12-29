$(function () {
    gsap.timeline({
        scrollTrigger: {
            trigger: ".page01",
            start: "top",
            end: "100%",
            pin: true,
            scrub: 2,
            markers: false,
        },
    })
        .to(
            ".ioniq",
            {
                transform: "scale(1)",
                "border-radius": "0px",
                duration: 1,
            },
            0.1
        )
        .to(
            ".page01 .sub_titl h2",
            {
                color: "#fff",
                duration: 1,
            },
            0.1
        )
        .to(
            ".page01 .sub_titl h2",
            {
                color: "#fff",
                duration: 1,
            },
            1.1
        );

    let list = gsap.utils.toArray(".p2_photo");
    gsap.timeline({
        scrollTrigger: {
            trigger: ".page02",
            start: "top",
            end: "200%",
            pin: true,
            scrub: 2,
            markers: false,
        },
    })
        .to(
            ".p2_titl",
            {
                top: "15%",
                opacity: "1",
                duration: 0.5,
            },
            0.1
        )
        .to(list, {
            xPercent: 6 * (list.length - 4),
        });

    gsap.timeline({
        scrollTrigger: {
            trigger: ".page03",
            start: "top",
            end: "100%",
            pin: true,
            scrub: 2,
            markers: false,
        },
    })
        .to(
            ".avante",
            {
                transform: "scale(1)",
                "border-radius": "0px",
                duration: 1,
            },
            0.1
        )
        .to(
            ".page03 .sub_titl h2",
            {
                color: "#fff",
                duration: 1,
            },
            0.1
        )
        .to(
            ".page03 .sub_titl h2",
            {
                color: "#fff",
                duration: 1,
            },
            1.1
        );
    gsap.timeline({
        scrollTrigger: {
            trigger: ".page04",
            start: "-45%",
            end: "40%",
            pin: false,
            scrub: 2,
            markers: false,
        },
    })
        .to(
            ".page04 h2",
            {
                transform: "translateY(0px)",
                opacity: "1",
                duration: 0.5,
            },
            0.1
        )
        .to(
            ".p4_photo > li:nth-child(2)",
            {
                transform: "translateX(0%)",
                opacity: "1",
                duration: 0.5,
            },
            0.5
        )
        .to(
            ".p4_photo .pic1",
            {
                transform: "translateX(0%)",
                opacity: "1",
                duration: 0.5,
            },
            1.0
        )
        .to(
            ".p4_photo .pic2",
            {
                transform: "translateX(0%)",
                opacity: "1",
                duration: 0.5,
            },
            1.5
        )
        .to(
            ".p4_photo > li:nth-child(3)",
            {
                transform: "translateY(0%)",
                opacity: "1",
                duration: 0.5,
            },
            2.0
        );
});
