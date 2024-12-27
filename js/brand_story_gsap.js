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
    gsap.timeline({
        scrollTrigger: {
            trigger: ".mid_titl",
            start: "-800%",
            end: "-400%",
            pin: false,
            scrub: 2,
            markers: false,
        },
    }).to(
        ".mid_titl > h2",
        {
            transform: "translateY(0px)",
            opacity: "1",
            duration: 0.5,
        },
        0.1
    );
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
            ".p2_txt li:nth-child(1) .up_bar",
            {
                transform: "translateY(0px)",
                opacity: "1",
                duration: 0.5,
            },
            0.1
        )
        .to(
            ".txt1",
            {
                transform: "translateY(0px)",
                opacity: "1",
                duration: 0.5,
            },
            0.3
        )
        .to(
            ".txt2",
            {
                transform: "translateY(0px)",
                opacity: "1",
                duration: 0.5,
            },
            0.5
        )
        .to(
            ".txt3",
            {
                transform: "translateY(0px)",
                opacity: "1",
                duration: 0.5,
            },
            0.7
        )
        .to(
            ".p2_txt li:nth-child(1) .down_bar",
            {
                transform: "translateY(0px)",
                opacity: "1",
                duration: 0.5,
            },
            1.0
        )
        .to(
            ".p2_txt li:nth-child(2) .up_bar",
            {
                transform: "translateY(0px)",
                opacity: "1",
                duration: 0.5,
            },
            1.2
        )
        .to(
            ".txt4",
            {
                transform: "translateY(0px)",
                opacity: "1",
                duration: 0.5,
            },
            1.4
        )
        .to(
            ".txt5",
            {
                transform: "translateY(0px)",
                opacity: "1",
                duration: 0.5,
            },
            1.6
        )
        .to(
            ".txt6",
            {
                transform: "translateY(0px)",
                opacity: "1",
                duration: 0.5,
            },
            1.8
        )
        .to(
            ".p2_txt li:nth-child(2) .down_bar",
            {
                transform: "translateY(0px)",
                opacity: "1",
                duration: 0.5,
            },
            2.0
        )
        .to(
            ".p2_txt li:nth-child(3) .up_bar",
            {
                transform: "translateY(0px)",
                opacity: "1",
                duration: 0.5,
            },
            2.2
        )
        .to(
            ".txt7",
            {
                transform: "translateY(0px)",
                opacity: "1",
                duration: 0.5,
            },
            2.4
        )
        .to(
            ".txt8",
            {
                transform: "translateY(0px)",
                opacity: "1",
                duration: 0.5,
            },
            2.6
        )
        .to(
            ".txt9",
            {
                transform: "translateY(0px)",
                opacity: "1",
                duration: 0.5,
            },
            2.8
        )
        .to(
            ".p2_txt li:nth-child(3) .down_bar",
            {
                transform: "translateY(0px)",
                opacity: "1",
                duration: 0.5,
            },
            3.0
        );
    gsap.timeline({
        scrollTrigger: {
            trigger: ".titl2",
            start: "-900%",
            end: "-500%",
            pin: false,
            scrub: 2,
            markers: false,
        },
    }).to(
        ".titl2 > h2",
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
            start: "-20%",
            end: "80%",
            pin: false,
            scrub: 2,
            markers: false,
        },
    })
        .to(
            ".p3_txt li:nth-child(1)",
            {
                transform: "scale(1)",
                opacity: "1",
                duration: 0.5,
            },
            0.2
        )
        .to(
            ".p3_txt li:nth-child(2) .txt_wrap",
            {
                top: "50%",
                opacity: "1",
                duration: 0.5,
            },
            0.5
        )
        .to(
            ".p3_txt li:nth-child(4)",
            {
                transform: "scale(1)",
                opacity: "1",
                duration: 0.5,
            },
            1.0
        )
        .to(
            ".p3_txt li:nth-child(3) .txt_wrap",
            {
                top: "50%",
                opacity: "1",
                duration: 0.5,
            },
            1.5
        )
        .to(
            ".p3_txt li:nth-child(5)",
            {
                transform: "scale(1)",
                opacity: "1",
                duration: 0.5,
            },
            2.0
        )
        .to(
            ".p3_txt li:nth-child(6) .txt_wrap",
            {
                top: "50%",
                opacity: "1",
                duration: 0.5,
            },
            2.5
        )
        .to(
            ".p3_txt li:nth-child(8)",
            {
                transform: "scale(1)",
                opacity: "1",
                duration: 0.5,
            },
            3.0
        )
        .to(
            ".p3_txt li:nth-child(7) .txt_wrap",
            {
                top: "50%",
                opacity: "1",
                duration: 0.5,
            },
            3.5
        )
        .to(
            ".p3_txt li:nth-child(7) .txt_wrap",
            {
                top: "50%",
                opacity: "1",
                duration: 0.5,
            },
            4.5
        );
});
