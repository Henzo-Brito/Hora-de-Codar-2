let pageTimeoutToken = null;

export function alterPage(cont, msg) {
    const div = document.getElementById("functions");

    if (pageTimeoutToken) {
        clearTimeout(pageTimeoutToken);
        pageTimeoutToken = null;
    }

    div.innerHTML = "";

    if (msg) {
        div.innerHTML = cont;

        pageTimeoutToken = setTimeout(() => {
            div.innerHTML = ``;
        }, 5000);
    } else {
        div.appendChild(cont);
    }
}
