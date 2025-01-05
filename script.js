

    // Contact form submission
    const contactForm = document.getElementById("contact-form");

    if (contactForm) {
        contactForm.addEventListener("submit", event => {
            event.preventDefault(); // Prevent form from refreshing the page on submit

            // Collect form data
            const formData = {
                name: document.getElementById("name").value,
                mobile: document.getElementById("mobile").value,
                email: document.getElementById("email").value,
                subject: document.getElementById("subject").value || "No Subject",
                message: document.getElementById("message").value
            };

            // Display a confirmation alert (replace with server submission logic as needed)
            alert(`Thank you, ${formData.name}! Your message has been received.`);

            // Clear the form
            contactForm.reset();
        });
    }
    document.addEventListener("DOMContentLoaded", () => {
        const welcomeSection = document.querySelector("#welcome");
    
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    welcomeSection.classList.add("fade-in");
                }
            },
            { threshold: 0.5 }
        );
    
        observer.observe(welcomeSection);
    });
   // scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const productCards = document.querySelectorAll('.product-card');

    productCards.forEach(card => {
        card.addEventListener('click', (event) => {
            const productName = card.querySelector('h3').textContent;
            window.location.href = `product-details.html?product=${encodeURIComponent(productName)}`;
        });
    });
});
// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);

    // Get URL parameters for product details
    const productName = urlParams.get('product');
    const productPrice = urlParams.get('price');
    const productDescription = urlParams.get('description');

    // Dynamically update the product details section
    if (productName) {
        document.getElementById('product-name').textContent = productName;

        // Dynamically set the product image URL
        document.getElementById('product-image').src = `/photo/${productName.replace(/\s+/g, '-').toLowerCase()}.jpg`;
    }

    if (productPrice) {
        document.getElementById('product-price').textContent = productPrice;
    } else {
        document.getElementById('product-price').textContent = '₹0.00'; // Default fallback if no price is provided
    }

    if (productDescription) {
        document.getElementById('product-description').textContent = productDescription;
    } else {
        document.getElementById('product-description').textContent = 'No description available.'; // Default fallback
    }

    // WhatsApp Button Dynamic Message
    const whatsappBtn = document.getElementById('whatsapp-btn');
    const whatsappNumber = "918290385656"; // Include country code
    const whatsappMessage = encodeURIComponent(
        `Hello,\n\nI am interested in the following product:\n\nProduct Name: ${productName || "JCB Bucket"}\nPrice: ${productPrice || "₹0.00"}\nDescription: ${productDescription || "No description available"}.\n\nPlease provide more details.`
    );

    // WhatsApp link with dynamic text
    whatsappBtn.href = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
});
document.addEventListener("DOMContentLoaded", () => {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach((item) => {
        const question = item.querySelector(".faq-question");
        question.addEventListener("click", () => {
            // Close other open FAQ items
            faqItems.forEach((faq) => {
                if (faq !== item && faq.classList.contains("active")) {
                    faq.classList.remove("active");
                }
            });

            // Toggle the current FAQ item
            item.classList.toggle("active");
        });
    });
});
