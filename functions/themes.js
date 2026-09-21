export default function themes() {
    const thems = [...document.getElementsByClassName("thems")];

    const ths = [
        {
            c1: "rgb(54, 51, 62)",
            c2: "rgb(0, 0, 0)",
            c3: "rgb(250, 202, 27)",
            c4: "rgb(217, 120, 34)",
            c5: "rgb(255, 255, 255)",
        },
        {
            c4: "rgb(243, 128, 28)",
            c2: "rgb(0, 0, 0)",
            c3: "rgb(82, 22, 233)",
            c1: "rgb(250, 202, 27)",
            c5: "hsl(0, 0%, 1%)",
        },
        {
            c1: "rgb(253, 252, 255)",
            c2: "rgb(0, 0, 0)",
            c3: "rgb(250, 202, 27)",
            c4: "rgb(217, 120, 34)",
            c5: "hsl(0, 0%, 1%)",
        },
        {
            c1: "rgb(82, 22, 233)",
            c2: "rgb(0, 0, 0)",
            c3: "rgb(250, 202, 27)",
            c4: "rgb(217, 120, 34)",
            c5: "hsl(0, 0%, 1%)",
        },
    ];

    thems.forEach((e, i) => {
        e.addEventListener("click", () => {
            for (const c in ths[i]) {
                document.documentElement.style.setProperty(`--${c}`, ths[i][c]);
            }

            thems.forEach((theme) => {
                theme.classList.remove("selected");
            });

            e.classList.add("selected");
        });
    });
}

themes();
