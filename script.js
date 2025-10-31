// Array berisi kutipan (Anda bisa menambahkan lebih banyak)
const quotes = [
    {
        quote: "Satu-satunya cara untuk melakukan pekerjaan hebat adalah mencintai apa yang Anda lakukan.",
        author: "Steve Jobs"
    },
    {
        quote: "Masa depan tergantung pada apa yang Anda lakukan hari ini.",
        author: "Mahatma Gandhi"
    },
    {
        quote: "Hidup itu 10% apa yang terjadi pada Anda dan 90% bagaimana Anda meresponsnya.",
        author: "Lou Holtz"
    },
    {
        quote: "Kesuksesan bukanlah kunci kebahagiaan. Kebahagiaan adalah kunci kesuksesan.",
        author: "Albert Schweitzer"
    },
    {
        quote: "Jangan pernah berhenti belajar, karena hidup tidak pernah berhenti mengajar.",
        author: "Anonim"
    }
];

function generateQuote() {
    // 1. Pilih indeks acak dari array quotes
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];

    // 2. Dapatkan elemen HTML
    const quoteTextElement = document.getElementById('quoteText');
    const quoteAuthorElement = document.getElementById('quoteAuthor');

    // 3. Perbarui teks di HTML
    quoteTextElement.textContent = `"${randomQuote.quote}"`;
    quoteAuthorElement.textContent = `- ${randomQuote.author}`;
}

// Panggil fungsi sekali saat halaman dimuat untuk menampilkan kutipan awal
window.onload = generateQuote;