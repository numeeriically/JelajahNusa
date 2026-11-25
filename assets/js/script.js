// Calling Elements
const heroBox = document.getElementById('hero-box-img');
const templateCard = document.querySelector('.destination-card')
const destinationSection = document.querySelector('.card-flex')

// ============================================================================================ //

// General Scripts

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
        articleImage: ""
    },

    {
        id: "2",
        articleCategory: "Papua Barat",
        articleTitle: "Raja Ampat",
        articleText: "Gugusan pulau karang dengan surga menyelam kelas dunia.",
        articleImage: ""
    },

    {
        id: "3",
        articleCategory: "Jawa Timur",
        articleTitle: "Bromo",
        articleText: "Matahari terbit di atas lautan pasir dan kawah yang berkabut",
        articleImage: ""
    },

    {
        id: "4",
        articleCategory: "NTT",
        articleTitle: "Labuan Bajo",
        articleText: "Pintu gerbang Pulau Komodo, dengan pelayaran dan senja memukau",
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