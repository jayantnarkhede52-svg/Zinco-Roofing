/* 
   ZINCO ROOFING SOLUTIONS 
   Main JavaScript (Static Version)
*/

document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            const icon = menuToggle.querySelector('i');
            if (icon) {
                if (mobileMenu.classList.contains('active')) {
                    icon.className = 'fas fa-times'; // Assuming FontAwesome is used
                } else {
                    icon.className = 'fas fa-bars';
                }
            }
        });
    }

    // Close mobile menu on link click
    const mobileLinks = document.querySelectorAll('.mobile-menu a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        });
    });

    // Navbar Scroll Effect — handled by CSS .scrolled class + passive listener in page script

    // Smooth scroll for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Scroll Reveal System
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // Form Submission Logic
    const quoteForm = document.getElementById('quoteForm');
    const formStatus = document.getElementById('formStatus');
    const submitBtn = document.getElementById('submitBtn');

    if (quoteForm) {
        const originalBtnText = submitBtn.innerText;
        quoteForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            submitBtn.disabled = true;
            submitBtn.innerText = 'Submitting...';
            formStatus.style.display = 'block';
            formStatus.style.color = 'var(--text-primary)';
            formStatus.innerText = 'Sending your request...';

            const formData = new FormData(quoteForm);
            const data = {
                name: formData.get('name'),
                phone: formData.get('phone'),
                email: formData.get('email'),
                service_type: formData.get('serviceType'),
                message: formData.get('message'),
                source: 'Static Website Form',
                created_at: new Date().toISOString()
            };

            try {
                // Supabase logic (requires supabase-js script in HTML)
                if (typeof supabase !== 'undefined' && typeof supabase.createClient !== 'undefined') {
                    const sbUrl = 'https://imoaeuefhblivruvrfyd.supabase.co';
                    const sbKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imltb2FldWVmaGJsaXZydXZyZnlkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ0NTQ1NTAsImV4cCI6MjA5MDAzMDU1MH0.tQ1Iv9tbhX6tcZT8W5JMpNRyxpLStxmySGowHm9KKhI';
                    const client = supabase.createClient(sbUrl, sbKey);

                    const { error } = await client
                        .from('leads')
                        .insert([data]);

                    if (error) throw error;
                    
                    formStatus.style.color = '#10b981';
                    formStatus.innerText = 'Thank you! We have received your request.';
                    quoteForm.reset();

                    // Trigger Google Ads Conversion
                    if (typeof gtag_report_conversion === 'function') {
                        gtag_report_conversion();
                    }
                } else {
                    console.error('Supabase library not loaded');
                    formStatus.style.color = '#ef4444';
                    formStatus.innerText = 'Error: Service unreachable. Please call us directly.';
                }
            } catch (error) {
                console.error('Submission error:', error);
                formStatus.textContent = "Oops! Something went wrong. Please try again.";
                formStatus.style.color = "#ef4444";
            } finally {
                submitBtn.disabled = false;
                submitBtn.textContent = originalBtnText;
            }
        });
    }

    // Gallery Filtering Logic
    const filterBtns = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const category = btn.getAttribute('data-category');

            galleryItems.forEach(item => {
                if (category === 'All' || item.getAttribute('data-category') === category) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Cost Calculator Logic
    const areaInput = document.getElementById('calcArea');
    const materialSelect = document.getElementById('calcMaterial');
    const areaDisplay = document.getElementById('areaDisplay');
    const priceDisplay = document.getElementById('priceDisplay');

    const materials = {
        metal: { name: 'Metal Roofing (PPGL)', price: 65 },
        upvc: { name: 'UPVC Roofing Sheets', price: 85 },
        puf: { name: 'PUF Insulated Panels', price: 180 },
        polycarbonate: { name: 'Polycarbonate Sheets', price: 120 }
    };

    function updateEstimate() {
        if (!areaInput || !priceDisplay) return;
        
        const area = parseInt(areaInput.value) || 0;
        const material = materialSelect.value;
        const pricePerSqFt = materials[material].price;
        
        if (areaDisplay) areaDisplay.textContent = area + ' sq.ft';
        
        const min = area * pricePerSqFt;
        const max = Math.round(min * 1.15);
        
        const formatter = new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0
        });
        
        priceDisplay.textContent = `${formatter.format(min)} - ${formatter.format(max)}`;
    }

    if (areaInput) {
        areaInput.addEventListener('input', updateEstimate);
        materialSelect.addEventListener('change', updateEstimate);
        updateEstimate(); // Initial run
    }

    // Visitor Counter Logic
    const visitorDisplay = document.getElementById('visitorCount');
    if (visitorDisplay) {
        let count = localStorage.getItem('visitorCount');
        if (!count) {
            count = 1000 + Math.floor(Math.random() * 50);
        } else {
            count = parseInt(count) + 1;
        }
        localStorage.setItem('visitorCount', count);
        visitorDisplay.textContent = count.toLocaleString();
    }

    // Phone Click Tracking
    document.querySelectorAll('a[href^="tel:"]').forEach(link => {
        link.addEventListener('click', () => {
            if (typeof gtag === 'function') {
                gtag('event', 'phone_call_click', {
                    'event_category': 'Engagement',
                    'event_label': link.getAttribute('href')
                });
            }
        });
    });
});
