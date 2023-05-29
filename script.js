setInterval(() => {
    // This script adds a red border and some padding to all links with .zip TLD
    const links = document.getElementsByTagName('a');
    for (let link of links) {
        // Check if the link has an href attribute
        if (link.hasAttribute('href')) {
            try {
                // Extract hostname from link
                let hostname = new URL(link.href).hostname;

                // Check if the URL ends with ".zip"
                if (hostname.slice(-4) === '.zip') {
                    link.style.border = '2px solid red';
                    link.style.padding = '5px';
                }
            } catch (error) {
                // Handle invalid URLs
                console.error('Invalid URL:', link.href);
            }
        }
    }
}, 500);
