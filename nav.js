// nav.js - Lädt die Navigation in die Seite
document.addEventListener("DOMContentLoaded", function() {
    const navPlaceholder = document.getElementById("nav-placeholder");

    if (navPlaceholder) {
        fetch("nav.html")
            .then(response => {
                if (!response.ok) {
                    throw new Error("Navigation konnte nicht geladen werden.");
                }
                return response.text();
            })
            .then(data => {
                navPlaceholder.innerHTML = data;
                // Wichtig: Lucide Icons nach dem Laden neu triggern
                if (window.lucide) {
                    window.lucide.createIcons();
                }
            })
            .catch(error => {
                console.error("Fehler beim Laden der nav.html:", error);
            });
    }
});
