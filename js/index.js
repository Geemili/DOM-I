const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

function elm(query) {
    return document.querySelector(query);
}

function elmSet(query, attr, value) {
    return document.querySelector(query).setAttribute(attr, value);
}

function elms(query) {
    return document.querySelectorAll(query);
}

function main() {
    // Navbar
    let logo = document.getElementById("logo-img");
    logo.setAttribute('src', siteContent["nav"]["img-src"]);

    elms("nav a").forEach((elm, idx) => elm.textContent = siteContent["nav"][`nav-item-${idx}`]);

    // Call to action
    elm(".cta h1").textContent = siteContent["cta"][`h1`];
    elm(".cta button").textContent = siteContent["cta"][`button`];
    elmSet(".cta img", "src", siteContent["cta"][`img-src`]);

    // Top content
    elm(".top-content :nth-child(1) h4").textContent = siteContent["main-content"][`features-h4`];
    elm(".top-content :nth-child(1) p").textContent = siteContent["main-content"][`features-content`];

    elm(".top-content :nth-child(2) h4").textContent = siteContent["main-content"][`about-h4`];
    elm(".top-content :nth-child(2) p").textContent = siteContent["main-content"][`about-content`];

    // Middle image
    elmSet("#middle-img", "src", siteContent["main-content"][`middle-img-src`]);

    // Bottom content
    elm(".bottom-content :nth-child(1) h4").textContent = siteContent["main-content"][`services-h4`];
    elm(".bottom-content :nth-child(1) p").textContent = siteContent["main-content"][`services-content`];

    elm(".bottom-content :nth-child(2) h4").textContent = siteContent["main-content"][`product-h4`];
    elm(".bottom-content :nth-child(2) p").textContent = siteContent["main-content"][`product-content`];

    elm(".bottom-content :nth-child(3) h4").textContent = siteContent["main-content"][`vision-h4`];
    elm(".bottom-content :nth-child(3) p").textContent = siteContent["main-content"][`vision-content`];


    // Contact
    const c = siteContent["contact"];
    const paragraphs = [c["address"], c["phone"], c["email"]];

    elm(".contact h4").textContent = c[`contact-h4`];
    elms(".contact p").forEach((elm, idx) => {elm.textContent = paragraphs[idx];});

    // Footer
    elm("footer p").textContent = siteContent["footer"][`copyright`];
}

window.onload = main;
