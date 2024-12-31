$(function () {
    gsap.timeline({
        scrollTrigger: {
            trigger: ".page01",
            start: "top",
            end: "200%",
            pin: true,
            scrub: 2,
            markers: false,
        },
    })
        .to(
            ".members",
            {
                transform: "translateY(0px)",
                opacity: "1",
                duration: 0.5,
            },
            0.1
        )
        .to(
            ".m_txt",
            {
                transform: "translateY(0px)",
                opacity: "1",
                duration: 0.5,
            },
            0.5
        )
        .to(
            ".p1_txt > li:nth-child(1)",
            {
                transform: "translateX(0%)",
                opacity: "1",
                duration: 0.5,
            },
            1.0
        )
        .to(
            ".txt1",
            {
                transform: "translateY(0%)",
                opacity: "1",
                duration: 1,
            },
            1.5
        )
        .to(
            ".txt2",
            {
                transform: "translateY(0%)",
                opacity: "1",
                duration: 1,
            },
            2.0
        )
        .to(
            ".txt3",
            {
                transform: "translateY(0%)",
                opacity: "1",
                duration: 1,
            },
            2.5
        )
        .to(
            ".txt_box > a ",
            {
                transform: "translateY(0%)",
                opacity: "1",
                duration: 1,
            },
            3.0
        )
        .to(
            ".txt_box > a ",
            {
                transform: "translateY(0%)",
                opacity: "1",
                duration: 1,
            },
            4.0
        );
    gsap.timeline({
        scrollTrigger: {
            trigger: ".page02",
            start: "-50%",
            end: "30%",
            pin: false,
            scrub: 2,
            markers: false,
        },
    })
        .to(
            ".care",
            {
                transform: "translateY(0px)",
                opacity: "1",
                duration: 0.5,
            },
            0.1
        )
        .to(
            ".care_txt",
            {
                transform: "translateY(0px)",
                opacity: "1",
                duration: 0.5,
            },
            0.5
        )
        .to(
            ".care_service > li:nth-child(1)",
            {
                transform: "scale(1)",
                duration: 1,
            },
            1.0
        )
        .to(
            ".care_service > li:nth-child(2)",
            {
                transform: "scale(1)",
                duration: 1,
            },
            1.5
        )
        .to(
            ".care_service > li:nth-child(3)",
            {
                transform: "scale(1)",
                duration: 1,
            },
            2.0
        )
        .to(
            ".care_service > li:nth-child(4)",
            {
                transform: "scale(1)",
                duration: 1,
            },
            2.5
        );

    gsap.timeline({
        scrollTrigger: {
            trigger: ".emergency",
            start: "-1000%",
            end: "-800%",
            pin: false,
            scrub: 2,
            markers: false,
        },
    }).to(
        ".emergency",
        {
            transform: "translateY(0px)",
            opacity: "1",
            duration: 0.5,
        },
        0.1
    );

    gsap.timeline({
        scrollTrigger: {
            trigger: ".page03",
            start: "6%",
            end: "200%",
            pin: true,
            scrub: 2,
            markers: false,
        },
    })
        .to(
            ".p3_txt li:nth-child(1)",
            {
                transform: "translateY(0px)",
                opacity: "1",
                duration: 0.5,
            },
            0.5
        )
        .to(
            ".p3_txt li:nth-child(2)",
            {
                transform: "translateY(0px)",
                opacity: "1",
                duration: 0.5,
            },
            1.0
        )
        .to(
            ".p3_txt li:nth-child(3)",
            {
                transform: "translateY(0px)",
                opacity: "1",
                duration: 0.5,
            },
            1.5
        )
        .to(
            ".process",
            {
                top: "48%",
                opacity: "1",
                duration: 0.5,
            },
            2.0
        )
        .to(
            ".process li:nth-child(1)",
            {
                transform: "translateY(0px)",
                opacity: "1",
                duration: 1,
            },
            2.2
        )
        .to(
            ".process li:nth-child(1)",
            {
                transform: "translateY(0px)",
                opacity: "1",
                duration: 1,
            },
            2.4
        )
        .to(
            ".process li:nth-child(2)",
            {
                transform: "translateY(0px)",
                opacity: "1",
                duration: 1,
            },
            2.6
        )
        .to(
            ".process li:nth-child(3)",
            {
                transform: "translateY(0px)",
                opacity: "1",
                duration: 1,
            },
            2.8
        )
        .to(
            ".process li:nth-child(4)",
            {
                transform: "translateY(0px)",
                opacity: "1",
                duration: 1,
            },
            3.0
        )
        .to(
            ".process li:nth-child(5)",
            {
                transform: "translateY(0px)",
                opacity: "1",
                duration: 1,
            },
            3.2
        )
        .to(
            ".process li:nth-child(6)",
            {
                transform: "translateY(0px)",
                opacity: "1",
                duration: 1,
            },
            3.4
        )
        .to(
            ".process li:nth-child(7)",
            {
                transform: "translateY(0px)",
                opacity: "1",
                duration: 1,
            },
            3.6
        )
        .to(
            ".process li:nth-child(8)",
            {
                transform: "translateY(0px)",
                opacity: "1",
                duration: 1,
            },
            3.8
        )
        .to(
            ".process li:nth-child(9)",
            {
                transform: "translateY(0px)",
                opacity: "1",
                duration: 1,
            },
            4.0
        )
        .to(
            ".process li:nth-child(10)",
            {
                transform: "translateY(0px)",
                opacity: "1",
                duration: 1,
            },
            4.2
        )
        .to(
            ".process li:nth-child(11)",
            {
                transform: "translateY(0px)",
                opacity: "1",
                duration: 1,
            },
            4.4
        )
        .to(
            ".process li:nth-child(12)",
            {
                transform: "translateY(0px)",
                opacity: "1",
                duration: 1,
            },
            4.6
        )
        .to(
            ".process li:nth-child(13)",
            {
                transform: "translateY(0px)",
                opacity: "1",
                duration: 1,
            },
            4.8
        );
    gsap.timeline({
        scrollTrigger: {
            trigger: ".car_support",
            start: "-1000%",
            end: "-800%",
            pin: false,
            scrub: 2,
            markers: false,
        },
    }).to(
        ".car_support",
        {
            transform: "translateY(0px)",
            opacity: "1",
            duration: 0.5,
        },
        0.1
    );
    gsap.timeline({
        scrollTrigger: {
            trigger: ".page04",
            start: "15%",
            end: "100%",
            pin: true,
            scrub: 2,
            markers: false,
        },
    })
        .to(
            ".p4_txt1",
            {
                transform: "translateY(0px)",
                opacity: "1",
                duration: 0.5,
            },
            0.1
        )
        .to(
            ".p4_txt2",
            {
                transform: "translateY(0px)",
                opacity: "1",
                duration: 0.5,
            },
            0.5
        )
        .to(
            ".p4_txt a",
            {
                transform: "translateY(0px)",
                opacity: "1",
                duration: 0.5,
            },
            1.0
        );
});
