export default function() {
    const div = document.createElement('div');
    div.id = "contact";
    div.innerHTML = `
        <h2>Serving Pizza for 5 years and counting</h2>
        <div id="contact-container">
            <p>📞 1123 123 96</p>
            <p>🏠 Hollywood Boulevard 42, Los Angeles, USA</p>
            <div id="hours">
            <h2>Hours</h2>
            <p>Monday to Friday</p>
            <p>8 AM - 10 PM</p>
        </div>
        </div>
        <h3>Interested? Message Us</h3>
        <form action="#">
            <div class="input-box">
                <label for="name">Name</label><input type="text" id="name" required autofocus placeholder="Marcus Aurelious">
            </div>
            <div class="input-box">
                <label for="email">Email</label><input type="email" id="email" required placeholder="sample@email.com">
            </div>
            <div class="input-box">
                <label for="address">Address</label><input type="text" id="address" required placeholder="Sunny Ville, Venice">
            </div>
            <div class="input-box">
                <label for="message">Message</label>
                <textarea required id="message" name="message" rows="4" cols="50">
                    I like to order...
                    </textarea>
            </div>
            <button type="submit">Let's Roll</button>
        </form>
        
    `;

    return div
}