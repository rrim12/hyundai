$(function () {
    gsap.timeline({
        scrollTrigger: {
            trigger: "#visual",
            start: "top",
            end: "200%",
            pin: true,
            scrub: 2,
            markers: false,
        },
    })
        .to(
            ".sonata, .v_light",

            {
                "margin-left": "0px",
                duration: 1,
            },
            0.1
        )
        .to(
            ".light",
            {
                opacity: "1",
                duration: 1,
            },
            0.8
        )
        .to(
            ".s_txt > h2",
            {
                y: "0px",
                opacity: "1",
                duration: 1,
            },
            1.5
        )
        .to(
            ".s_txt > p",
            {
                y: "0px",
                opacity: "1",
                duration: 1,
            },
            2.5
        )
        .to(
            ".s_txt > p",
            {
                y: "0px",
                opacity: "1",
                duration: 1,
            },
            3.5
        );
    gsap.timeline({
        scrollTrigger: {
            trigger: ".brandStory",
            start: "-30%",
            end: "50%",
            pin: false,
            scrub: 2,
            markers: false,
        },
    })
        .to(
            ".bs",
            {
                transform: "translateY(0px)",
                opacity: "1",
                duration: 0.5,
            },
            0.1
        )
        .to(
            ".box1 > li:nth-child(2) img",
            {
                transform: "scale(1)",
                opacity: "1",
                duration: 1,
            },
            0.4
        )
        .to(
            ".l_box > .txt1",
            {
                transform: "translateY(0px)",
                opacity: "1",
                duration: 1,
            },
            0.7
        )
        .to(
            ".l_box > .txt2",
            {
                transform: "translateY(0px)",
                opacity: "1",
                duration: 1,
            },
            1.0
        )
        .to(
            ".l_box > .txt3",
            {
                transform: "translateY(0px)",
                opacity: "1",
                duration: 1,
            },
            1.5
        )
        .to(
            ".l_box > .more",
            {
                transform: "translateY(0px)",
                opacity: "1",
                duration: 1,
            },
            2.0
        )
        .to(
            ".box2 > li:nth-child(1) img",
            {
                transform: "scale(1)",
                opacity: "1",
                duration: 1,
            },
            2.5
        )
        .to(
            ".r_box > .txt1",
            {
                transform: "translateY(0px)",
                opacity: "1",
                duration: 1,
            },
            3.0
        )
        .to(
            ".r_box > .txt2",
            {
                transform: "translateY(0px)",
                opacity: "1",
                duration: 1,
            },
            3.3
        )
        .to(
            ".r_box > .txt3",
            {
                transform: "translateY(0px)",
                opacity: "1",
                duration: 1,
            },
            3.6
        )
        .to(
            ".r_box > .more",
            {
                transform: "translateY(0px)",
                opacity: "1",
                duration: 1,
            },
            3.9
        );
    gsap.timeline({
        scrollTrigger: {
            trigger: ".pd",
            start: "-150%",
            end: "-20%",
            pin: false,
            scrub: 2,
            markers: false,
        },
    }).to(
        ".product1 > .pd",
        {
            transform: "translateY(0px)",
            opacity: "1",
            duration: 0.5,
        },
        0.1
    );
    gsap.timeline({
        scrollTrigger: {
            trigger: ".product1",
            start: "24%",
            end: "150%",
            pin: true,
            scrub: 2,
            markers: false,
        },
    })
        .to(
            ".p1_bg > li:nth-child(1)",
            {
                transform: "translateX(0px)",
                duration: 1,
            },
            0.1
        )
        .to(
            ".cl_light",
            {
                opacity: "1",
                duration: 0.5,
            },
            0.8
        )
        .to(
            ".p1_bg > li:nth-child(2)",
            {
                transform: "translateX(0px)",
                duration: 1,
            },
            0.1
        )
        .to(
            ".cr_light",
            {
                opacity: "1",
                duration: 0.5,
            },
            1.5
        )
        .to(
            ".up1",
            {
                transform: "translateY(0px)",
                opacity: "1",
                duration: 1,
            },
            2.0
        )
        .to(
            ".up2",
            {
                transform: "translateY(0px)",
                opacity: "1",
                duration: 1,
            },
            2.5
        )
        .to(
            ".p1_txt a",
            {
                transform: "translateY(0px)",
                opacity: "1",
                duration: 1,
            },
            3.0
        )
        .to(
            ".p1_txt a",
            {
                transform: "translateY(0px)",
                opacity: "1",
                duration: 1,
            },
            4.5
        );
    gsap.timeline({
        scrollTrigger: {
            trigger: ".product2",
            start: "5%",
            end: "200%",
            pin: true,
            scrub: 2,
            markers: false,
        },
    })
        .to(
            ".p2_bg",
            {
                transform: "translateX(0%)",
                duration: 1,
            },
            0.1
        )
        .to(
            ".car",
            {
                transform: " translateZ(80px) scale(1)",
                duration: 0.7,
            },
            0.7
        )
        .to(
            ".p2_txt > p",
            {
                transform: "translateY(0px)",
                opacity: "1",
                duration: 1,
            },
            1.0
        )
        .to(
            ".p2_txt a",
            {
                transform: "translateY(0px)",
                opacity: "1",
                duration: 1,
            },
            1.5
        )
        .to(
            ".p2_txt a",
            {
                transform: "translateY(0px)",
                opacity: "1",
                duration: 1,
            },
            2.0
        );
    gsap.timeline({
        scrollTrigger: {
            trigger: ".movie",
            start: "9%",
            end: "200%",
            pin: true,
            scrub: 2,
            markers: false,
        },
    })
        .to(
            ".m_txt1",
            {
                transform: "translateY(200%)",
                opacity: "1",
                duration: 0.5,
            },
            0.1
        )
        .to(
            ".m_txt2",
            {
                transform: "translateY(200%)",
                opacity: "1",
                duration: 0.5,
            },
            0.8
        )
        .to(
            ".m_txt1",
            {
                transform: "translateY(0%)",
                opacity: "1",
                "font-size": "40px",
                color: "#fff",
                duration: 1,
            },
            1.5
        )
        .to(
            ".m_txt2",
            {
                transform: "translateY(0%)",
                opacity: "1",
                "font-size": "40px",
                color: "#fff",
                duration: 1,
            },
            1.5
        )
        .to(
            "video",
            {
                transform: "translateY(0%)",
                duration: 1,
            },
            1.5
        )
        .to(
            ".m_bg",
            {
                transform: "translateY(0%)",
                duration: 1,
            },
            1.5
        )
        .to(
            ".m_txt a",
            {
                transform: "translateY(0%)",
                duration: 1,
            },
            2.5
        )
        .to(
            ".m_txt a",
            {
                transform: "translateY(0%)",
                opacity: "1",
                duration: 1,
            },
            3.5
        );
    gsap.timeline({
        scrollTrigger: {
            trigger: ".service",
            start: "-35%",
            end: "30%",
            pin: false,
            scrub: 2,
            markers: false,
        },
    })
        .to(
            ".service > .sv",
            {
                transform: "translateY(0px)",
                opacity: "1",
                duration: 0.5,
            },
            0.1
        )
        .to(
            ".s_box > li:nth-child(1)",
            {
                transform: "translateX(0%)",
                opacity: "1",
                duration: 1,
            },
            0.5
        )
        .to(
            ".s_box > li:nth-child(2)",
            {
                transform: "translateX(0%)",
                opacity: "1",
                duration: 1,
            },
            1.0
        )
        .to(
            ".s_box > li:nth-child(3)",
            {
                transform: "translateX(0%)",
                opacity: "1",
                duration: 1,
            },
            1.5
        )
        .to(
            ".sb_txt1",
            {
                top: "50%",
                opacity: "1",
                duration: 1,
            },
            1.8
        )
        .to(
            ".sb_txt2",
            {
                top: "50%",
                opacity: "1",
                duration: 1,
            },
            2.5
        )
        .to(
            ".sb_txt3",
            {
                top: "50%",
                opacity: "1",
                duration: 1,
            },
            3.0
        );
});
