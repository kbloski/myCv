const __scriptFolder = './js/'

function loadingScript(src) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;

        // Dodajemy skrypt do dokumentu
        document.getElementsByTagName('body')[0].appendChild(script);

        script.onload = () => {
            resolve();
        };

        script.onerror = () => {
            reject(new Error(`Failed to load script: ${src}`));
        };
    });
}

const scripts = [
    'todolist.js',
    'technologies.js',
    'personal.js',
    'project.js',
    'courses.js',
    'clause.js',
    'credentials.js',
    'certificates.js',
    'education.js',
    'interests.js'
];

async function init() {
    for (const script of scripts) {
        await loadingScript( __scriptFolder + script);
    }
}
init();
