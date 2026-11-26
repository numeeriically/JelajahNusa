// ============================================================================================ //

    // Calling Elements
const heroBox = document.getElementById('hero-box-img');
const templateCard = document.querySelector('.destination-card-col')
const destinationSection = document.querySelector('.card-flex')

// ============================================================================================ //

    // General Scripts

const dataAbBox = [
    "https://images.unsplash.com/photo-1541666282672-5f4aad922c63?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    "https://images.unsplash.com/photo-1605860632725-fa88d0ce7a07?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    "https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
]

const dataImg = [
    "assets/images/hero-div-slide-image1.jpg",
    "assets/images/hero-div-slide-image2.jpg",
    "assets/images/hero-div-slide-image3.jpg",
    "assets/images/hero-div-slide-image4.jpg"
]

if (heroBox) {
    heroBox.src = dataImg[0];
}

    

const dataDstBox = [
    {
        id: 1,
        articleCategory: "Bali",
        articleTitle: "Bali",
        articleText: "Pantain berpasir, sawah yang terasering, dan budaya yang hangat di Pulau Dewata",
        articleImage: "https://images.unsplash.com/photo-1604999333679-b86d54738315?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
    },

    {
        id: "2",
        articleCategory: "Papua Barat",
        articleTitle: "Raja Ampat",
        articleText: "Gugusan pulau karang dengan surga menyelam kelas dunia.",
        articleImage: "https://images.unsplash.com/photo-1703769605297-cc74106244d9?q=80&w=2084&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
    },

    {
        id: "3",
        articleCategory: "Jawa Timur",
        articleTitle: "Bromo",
        articleText: "Matahari terbit di atas lautan pasir dan kawah yang berkabut",
        articleImage: "https://images.unsplash.com/flagged/photo-1557804521-990f076ccb96?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
    },

    {
        id: "4",
        articleCategory: "NTT",
        articleTitle: "Labuan Bajo",
        articleText: "Pintu gerbang Pulau Komodo, dengan pelayaran dan senja memukau",
        articleImage: "https://images.unsplash.com/photo-1619880889144-d6e252999afa?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
    }
]

const dataPackBox = [
    {
        id: "1",
        articleCategory: "4 Hari 3 Malam",
        articleTitle: "Bali Escape",
        articleText: "Ubu, Uluwatu, dan sunset di Tanah Lot.",
        articlePrice: "Rp2.450.000",
        articleImage: ""
    }
        {
        id: "2",
        articleCategory: "2 Hari 1 Malam",
        articleTitle: "Bromo Sunrise Trip",
        articleText: "Penanjakan, lautan pasir, dan Savana",
        articlePrice: "Rp1.350.000",
        articleImage: ""
    }
        {
        id: "3",
        articleCategory: "5 Hari 4 Malam",
        articleTitle: "Raja Ampat Discovery",
        articleText: "Island hopping, snorkeling, dan Wayag.",
        articlePrice: "Rp5.750.000",
        articleImage: ""
    }
        {
        id: "4",
        articleCategory: "3 Hari 2 Malam",
        articleTitle: "Labuan Bajo Explorer",
        articleText: "Pulau Padar, Komodo, dan Pink Beach.",
        articlePrice: "Rp3.950.000",
        articleImage: ""
    }
]

if (destinationSection && templateCard) {
    dataDstBox.forEach(({ articleCategory, articleText, articleTitle, articleImage }, index) => {
        const articleCard = index === 0 ? templateCard : templateCard.cloneNode(true);

        const img = articleCard.querySelector(".card-destination-img img");
        if (img && articleImage) {
            img.src = articleImage;
            img.alt = articleTitle;
        }

        const categoryBadge = articleCard.querySelector(".span-category-place");
        if (categoryBadge) {
            categoryBadge.textContent = articleCategory;
        }

        const content = articleCard.querySelector(".card-destination-info");
        if (content) {
            content.querySelector(".destination-card-title").textContent = articleTitle;
            content.querySelector(".destination-card-text").textContent = articleText;
        }

        if (index > 0) destinationSection.appendChild(articleCard);
    });
}

// ============================================================================================ //

    // Contact Form Validation & Submission Feedback
const contactForm = document.getElementById("contactForm");
const contactSuccessAlert = document.getElementById("contactSuccessAlert");
const contactSuccessText = document.getElementById("contactSuccessText");
const contactFailAlert = document.getElementById("contactFailAlert");
const contactFailText = document.getElementById("contactFailText");

document.querySelectorAll("[data-alert-close]").forEach((btn) => {
    btn.addEventListener("click", () => {
        const target = document.getElementById(btn.dataset.alertClose);
        if (target) target.classList.add("d-none");
    });
});

if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const requiredFields = contactForm.querySelectorAll("[required]");
        const hasEmptyField = Array.from(requiredFields).some(
            (field) => field.value.trim() === ""
        );

        if (!contactForm.checkValidity() || hasEmptyField) {
            event.stopPropagation();
            contactForm.classList.add("was-validated");

            if (contactSuccessAlert) contactSuccessAlert.classList.add("d-none");
            if (contactFailAlert && contactFailText) {
                contactFailText.textContent =
                    "Mohon lengkapi semua kolom yang wajib diisi dengan benar sebelum mengirim pesan.";
                contactFailAlert.classList.remove("d-none");
            }
            return;
        }

        const senderName =
            document.getElementById("contactName")?.value.trim() || "Pelanggan";

        if (contactFailAlert) contactFailAlert.classList.add("d-none");
        if (contactSuccessAlert && contactSuccessText) {
            contactSuccessText.textContent = `Terima kasih, ${senderName}! Pesan Anda telah diterima dan tim kami akan membalas dalam 1x24 jam kerja.`;
            contactSuccessAlert.classList.remove("d-none");
        }

        contactForm.reset();
        contactForm.classList.remove("was-validated");
    });
}

// ============================================================================================ //