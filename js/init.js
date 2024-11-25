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
    "additional_information.js",
    "courses.js",
    "clauses.js",
    "diplomas.js",
    "projects.js",
    "personal.js",
    "socials.js",
    "technologies.js",
    // "scrollTop.js",
];

async function init() {
    for (const script of scripts) {
        await loadingScript(__scriptFolder + script);
    }
}
init();
