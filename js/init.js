const __scriptFolder = "./js/";

function loadingScript(src) {
    return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = src;
        script.type = "module";

        // Dodajemy skrypt do dokumentu
        document.getElementsByTagName("body")[0].appendChild(script);

        script.onload = () => {
            resolve();
        };

        script.onerror = () => {
            reject(new Error(`Failed to load script: ${src}`));
        };
    });
}

const scripts = [
    "personal.js",
    "technologies.js",
    "projects.js",
    "form_contact.js",
    "footer.js",
    "socials.js",
    "scrollTop.js",
    "courses.js",
];

async function init() {
    for (const script of scripts) {
        await loadingScript(__scriptFolder + script);
    }
}
init();
