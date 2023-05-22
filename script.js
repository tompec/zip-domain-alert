setInterval(() => {
    // This script adds a red border and some padding to all links with .zip TLD
    const links = document.getElementsByTagName('a');
    for (let link of links) {
        // Extract hostname from link
        let hostname = new URL(link.href).hostname;

        // Check if the TLD is .zip
        if (hostname.slice(-4) === '.zip') {
            link.style.border = '2px solid red';
            link.style.padding = '5px';
        }
    }
}, 500);
