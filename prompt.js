<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>French Beginner Notes PDF Generator</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
    <style>
        body {
            font-family: 'Segoe UI', Arial, sans-serif;
            max-width: 900px;
            margin: 0 auto;
            padding: 20px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
        }
        .container {
            background: white;
            padding: 40px;
            border-radius: 15px;
            box-shadow: 0 15px 35px rgba(0,0,0,0.1);
        }
        h1 {
            color: #2d3748;
            text-align: center;
            margin-bottom: 30px;
            font-size: 28px;
        }
        .download-btn {
            background: linear-gradient(45deg, #4CAF50, #45a049);
            color: white;
            border: none;
            padding: 20px 40px;
            font-size: 20px;
            border-radius: 10px;
            cursor: pointer;
            display: block;
            margin: 30px auto;
            transition: all 0.3s;
            font-weight: bold;
        }
        .download-btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 25px rgba(76, 175, 80, 0.3);
        }
        .download-btn:active {
            transform: translateY(0);
        }
        .preview {
            background: #f8f9fa;
            padding: 25px;
            border-radius: 10px;
            margin: 25px 0;
            border-left: 5px solid #4CAF50;
        }
        .preview h3 {
            color: #2d3748;
            margin-top: 0;
        }
        .preview ul {
            list-style: none;
            padding: 0;
        }
        .preview li {
            padding: 8px 0;
            padding-left: 25px;
            position: relative;
        }
        .preview li:before {
            content: "✓";
            position: absolute;
            left: 0;
            color: #4CAF50;
            font-weight: bold;
        }
        .status {
            text-align: center;
            margin: 20px 0;
            font-weight: bold;
            padding: 15px;
            border-radius: 8px;
        }
        .success {
            background: #d4edda;
            color: #155724;
            border: 1px solid #c3e6cb;
        }
        .loading {
            background: #fff3cd;
            color: #856404;
            border: 1px solid #ffeaa7;
        }
        .download-info {
            background: #e3f2fd;
            padding: 20px;
            border-radius: 10px;
            margin: 25px 0;
            border-left: 5px solid #2196f3;
        }
        .download-info h3 {
            color: #1565c0;
            margin-top: 0;
        }
        .download-info code {
            background: #f5f5f5;
            padding: 3px 8px;
            border-radius: 4px;
            color: #d32f2f;
            font-weight: bold;
        }
        .feature-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 15px;
            margin: 20px 0;
        }
        .feature-card {
            background: #fff;
            padding: 15px;
            border-radius: 8px;
            border: 1px solid #e0e0e0;
            text-align: center;
        }
        .feature-icon {
            font-size: 24px;
            margin-bottom: 10px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>🇫🇷 French Beginner Notes for Samridhi</h1>
        
        <div class="preview">
            <h3>📚 Complete PDF Contents (सभी कुछ Hindi में भी है!):</h3>
            <div class="feature-grid">
                <div class="feature-card">
                    <div class="feature-icon">🔤</div>
                    <strong>Alphabet</strong><br>
                    Pronunciation + Hindi
                </div>
                <div class="feature-card">
                    <div class="feature-icon">👋</div>
                    <strong>Greetings</strong><br>
                    Basic Phrases
                </div>
                <div class="feature-card">
                    <div class="feature-icon">🔢</div>
                    <strong>Numbers</strong><br>
                    0-100 with Hindi
                </div>
                <div class="feature-card">
                    <div class="feature-icon">👤</div>
                    <strong>Pronouns</strong><br>
                    Je, Tu, Il, Elle
                </div>
                <div class="feature-card">
                    <div class="feature-icon">👨‍👩‍👧‍👦</div>
                    <strong>Family</strong><br>
                    Père, Mère, etc.
                </div>
                <div class="feature-card">
                    <div class="feature-icon">🎨</div>
                    <strong>Colors</strong><br>
                    Rouge, Bleu, Vert
                </div>
                <div class="feature-card">
                    <div class="feature-icon">📅</div>
                    <strong>Days & Months</strong><br>
                    Complete Calendar
                </div>
                <div class="feature-card">
                    <div class="feature-icon">⚡</div>
                    <strong>Verbs</strong><br>
                    Common + Conjugations
                </div>
                <div class="feature-card">
                    <div class="feature-icon">💬</div>
                    <strong>Expressions</strong><br>
                    Daily Use Phrases
                </div>
                <div class="feature-card">
                    <div class="feature-icon">📝</div>
                    <strong>Practice Sheet</strong><br>
                    Daily Exercises
                </div>
            </div>
        </div>

        <button class="download-btn" onclick="createAndDownloadPDF()">
            📥 Download करें - French Notes PDF
        </button>
        
        <div id="status" class="status" style="display: none;"></div>

        <div class="download-info">
            <h3>📍 PDF कहाँ download होगी?</h3>
            <p><strong>File name:</strong> <code>French_Notes_Samridhi.pdf</code></p>
            <p><strong>Location:</strong> आपके browser का Downloads folder में</p>
            <ul>
                <li><strong>Windows:</strong> C:\Users\[आपका नाम]\Downloads\</li>
                <li><strong>Mac:</strong> Downloads folder में</li>
                <li><strong>Mobile:</strong> Downloads app में देखें</li>
            </ul>
            <p>💡 <strong>Tip:</strong> Download के बाद browser के bottom में notification दिखेगी</p>
        </div>
    </div>

    <script>
        function createAndDownloadPDF() {
            // Show loading status
            const statusDiv = document.getElementById('status');
            statusDiv.style.display = 'block';
            statusDiv.className = 'status loading';
            statusDiv.innerHTML = '⏳ PDF बनाई जा रही है... Please wait...';
            
            try {
                const { jsPDF } = window.jspdf;
                const doc = new jsPDF();
                
                // Page setup
                let y = 20;
                const margin = 20;
                const pageHeight = 280;
                
                // Helper function to check page break
                function checkPageBreak(requiredSpace) {
                    if (y + requiredSpace > pageHeight) {
                        doc.addPage();
                        y = 20;
                    }
                }
                
                // Title
                doc.setFontSize(24);
                doc.setTextColor(25, 118, 210);
                doc.text('French Beginner Notes', 105, y, { align: 'center' });
                y += 15;
                
                doc.setFontSize(16);
                doc.setTextColor(100, 100, 100);
                doc.text('Prepared for Samridhi', 105, y, { align: 'center' });
                y += 20;
                
                doc.setFontSize(12);
                doc.setTextColor(60, 60, 60);
                doc.text('Complete French learning guide with Hindi translations', 105, y, { align: 'center' });
                y += 25;
                
                // Section 1: Alphabet
                checkPageBreak(60);
                doc.setFontSize(16);
                doc.setTextColor(156, 39, 176);
                doc.text('1. French Alphabet & Pronunciation', margin, y);
                y += 12;
                
                doc.setFontSize(10);
                doc.setTextColor(0, 0, 0);
                const alphabet = [
                    'A - "ah" sound - अ की तरह',
                    'B - "bay" - बे', 
                    'C - "say" - से',
                    'D - "day" - दे',
                    'E - "uh" - हल्का अ',
                    'F - "eff" - एफ',
                    'G - "zhay" - झे',
                    'H - "ash" - आश (silent)',
                    'I - "ee" - ई',
                    'J - "zhee" - झी',
                    'K - "kah" - का',
                    'L - "ell" - एल',
                    'M - "emm" - एम',
                    'N - "enn" - एन',
                    'O - "oh" - ओ',
                    'P - "pay" - पे',
                    'Q - "koo" - कू', 
                    'R - "err" - एर्र (rolled)',
                    'S - "ess" - एस',
                    'T - "tay" - ते',
                    'U - "oo" - ऊ',
                    'V - "vay" - वे',
                    'W - "double-vay" - डबल-वे',
                    'X - "eeks" - ईक्स',
                    'Y - "ee-grek" - ई-ग्रेक',
                    'Z - "zed" - जेड'
                ];
                
                alphabet.forEach((letter, index) => {
                    if (index % 2 === 0) {
                        checkPageBreak(5);
                        doc.text(letter, margin, y);
                        if (alphabet[index + 1]) {
                            doc.text(alphabet[index + 1], margin + 90, y);
                        }
                        y += 5;
                    }
                });
                
                y += 10;
                
                // Section 2: Greetings
                checkPageBreak(40);
                doc.setFontSize(16);
                doc.setTextColor(76, 175, 80);
                doc.text('2. Greetings & Basic Phrases', margin, y);
                y += 12;
                
                doc.setFontSize(10);
                doc.setTextColor(0, 0, 0);
                const greetings = [
                    'Bonjour - Hello/Good morning - सुबह का अभिवादन',
                    'Bonsoir - Good evening - शाम का अभिवादन', 
                    'Salut - Hi/Bye (informal) - हैलो/बाय',
                    'Au revoir - Goodbye - अलविदा',
                    'Merci - Thank you - धन्यवाद',
                    'De rien - You\'re welcome - कोई बात नहीं',
                    'S\'il vous plaît - Please - कृपया',
                    'Excusez-moi - Excuse me - माफ करें',
                    'Pardon - Sorry - क्षमा करें',
                    'Oui - Yes - हाँ',
                    'Non - No - नहीं'
                ];
                
                greetings.forEach(greeting => {
                    checkPageBreak(5);
                    doc.text(greeting, margin, y);
                    y += 5;
                });
                
                y += 10;
                
                // Section 3: Numbers
                checkPageBreak(50);
                doc.setFontSize(16);
                doc.setTextColor(255, 152, 0);
                doc.text('3. Numbers (संख्याएं) 0-100', margin, y);
                y += 12;
                
                doc.setFontSize(10);
                const numbers = [
                    'Basic Numbers (0-10):',
                    '0-zéro, 1-un, 2-deux, 3-trois, 4-quatre, 5-cinq',
                    '6-six, 7-sept, 8-huit, 9-neuf, 10-dix',
                    '',
                    '11-19: 11-onze, 12-douze, 13-treize, 14-quatorze',
                    '15-quinze, 16-seize, 17-dix-sept, 18-dix-huit, 19-dix-neuf',
                    '',
                    'Tens: 20-vingt, 30-trente, 40-quarante, 50-cinquante',
                    '60-soixante, 70-soixante-dix, 80-quatre-vingts',
                    '90-quatre-vingt-dix, 100-cent'
                ];
                
                numbers.forEach(num => {
                    checkPageBreak(5);
                    doc.text(num, margin, y);
                    y += 5;
                });
                
                y += 10;
                
                // Section 4: Pronouns
                checkPageBreak(35);
                doc.setFontSize(16);
                doc.setTextColor(33, 150, 243);
                doc.text('4. Pronouns (सर्वनाम)', margin, y);
                y += 12;
                
                doc.setFontSize(10);
                const pronouns = [
                    'Je - I - मैं (J\' before vowels)',
                    'Tu - You (informal) - तुम',
                    'Il - He - वह (masculine)',
                    'Elle - She - वह (feminine)',
                    'Nous - We - हम',
                    'Vous - You (formal/plural) - आप',
                    'Ils - They (masculine) - वे (पुरुष)',
                    'Elles - They (feminine) - वे (महिला)'
                ];
                
                pronouns.forEach(pronoun => {
                    checkPageBreak(5);
                    doc.text(pronoun, margin, y);
                    y += 5;
                });
                
                y += 10;
                
                // Section 5: Family
                checkPageBreak(40);
                doc.setFontSize(16);
                doc.setTextColor(156, 39, 176);
                doc.text('5. Family Words (पारिवारिक शब्द)', margin, y);
                y += 12;
                
                doc.setFontSize(10);
                const family = [
                    'La famille - Family - परिवार',
                    'Père/Papa - Father/Dad - पिता/पापा',
                    'Mère/Maman - Mother/Mom - माता/मम्मी',
                    'Frère - Brother - भाई',
                    'Sœur - Sister - बहन',
                    'Fils - Son - बेटा',
                    'Fille - Daughter - बेटी',
                    'Grand-père - Grandfather - दादाजी/नानाजी',
                    'Grand-mère - Grandmother - दादीजी/नानीजी',
                    'Oncle - Uncle - चाचा/मामा',
                    'Tante - Aunt - चाची/मामी'
                ];
                
                family.forEach(member => {
                    checkPageBreak(5);
                    doc.text(member, margin, y);
                    y += 5;
                });
                
                y += 10;
                
                // Section 6: Colors
                checkPageBreak(35);
                doc.setFontSize(16);
                doc.setTextColor(255, 152, 0);
                doc.text('6. Colors (रंग)', margin, y);
                y += 12;
                
                doc.setFontSize(10);
                const colors = [
                    'Rouge - Red - लाल',
                    'Bleu - Blue - नीला', 
                    'Vert - Green - हरा',
                    'Jaune - Yellow - पीला',
                    'Noir - Black - काला',
                    'Blanc - White - सफेद',
                    'Rose - Pink - गुलाबी',
                    'Orange - Orange - नारंगी',
                    'Violet - Purple - बैंगनी',
                    'Gris - Gray - स्लेटी',
                    'Marron - Brown - भूरा'
                ];
                
                colors.forEach(color => {
                    checkPageBreak(5);
                    doc.text(color, margin, y);
                    y += 5;
                });
                
                y += 10;
                
                // Section 7: Days & Months
                checkPageBreak(45);
                doc.setFontSize(16);
                doc.setTextColor(76, 175, 80);
                doc.text('7. Days & Months (दिन और महीने)', margin, y);
                y += 12;
                
                doc.setFontSize(10);
                const daysMonths = [
                    'Days of the Week:',
                    'Lundi-Monday-सोमवार, Mardi-Tuesday-मंगलवार',
                    'Mercredi-Wednesday-बुधवार, Jeudi-Thursday-गुरुवार',
                    'Vendredi-Friday-शुक्रवार, Samedi-Saturday-शनिवार',
                    'Dimanche-Sunday-रविवार',
                    '',
                    'Months:',
                    'Janvier-January, Février-February, Mars-March',
                    'Avril-April, Mai-May, Juin-June',
                    'Juillet-July, Août-August, Septembre-September',
                    'Octobre-October, Novembre-November, Décembre-December'
                ];
                
                daysMonths.forEach(item => {
                    checkPageBreak(5);
                    doc.text(item, margin, y);
                    y += 5;
                });
                
                y += 10;
                
                // Section 8: Verbs
                checkPageBreak(60);
                doc.setFontSize(16);
                doc.setTextColor(33, 150, 243);
                doc.text('8. Common Verbs (सामान्य क्रियाएं)', margin, y);
                y += 12;
                
                doc.setFontSize(10);
                const verbs = [
                    'Être - To be - होना',
                    '  Je suis-I am, Tu es-You are, Il/Elle est-He/She is',
                    '  Nous sommes-We are, Vous êtes-You are, Ils sont-They are',
                    '',
                    'Avoir - To have - रखना/होना',
                    '  J\'ai-I have, Tu as-You have, Il/Elle a-He/She has',
                    '  Nous avons-We have, Vous avez-You have, Ils ont-They have',
                    '',
                    'Other Important Verbs:',
                    'Aller - To go - जाना',
                    'Faire - To do/make - करना/बनाना',
                    'Venir - To come - आना',
                    'Voir - To see - देखना',
                    'Savoir - To know - जानना'
                ];
                
                verbs.forEach(verb => {
                    checkPageBreak(5);
                    doc.text(verb, margin, y);
                    y += 5;
                });
                
                y += 10;
                
                // Section 9: Expressions
                checkPageBreak(45);
                doc.setFontSize(16);
                doc.setTextColor(156, 39, 176);
                doc.text('9. Useful Expressions (उपयोगी वाक्य)', margin, y);
                y += 12;
                
                doc.setFontSize(10);
                const expressions = [
                    'Comment allez-vous? - How are you? - आप कैसे हैं?',
                    'Ça va? - How\'s it going? - कैसा चल रहा है?',
                    'Ça va bien - I\'m doing well - मैं ठीक हूं',
                    'Où est...? - Where is...? - कहाँ है...?',
                    'Qu\'est-ce que c\'est? - What is this? - यह क्या है?',
                    'Combien ça coûte? - How much does it cost? - कितने का है?',
                    'Je ne comprends pas - I don\'t understand - मैं नहीं समझा',
                    'Pouvez-vous répéter? - Can you repeat? - क्या आप दोहरा सकते हैं?',
                    'Parlez-vous anglais? - Do you speak English? - क्या आप अंग्रेजी बोलते हैं?',
                    'Je voudrais... - I would like... - मैं चाहूंगा...'
                ];
                
                expressions.forEach(expr => {
                    checkPageBreak(5);
                    doc.text(expr, margin, y);
                    y += 5;
                });
                
                y += 15;
                
                // Section 10: Practice Sheet
                checkPageBreak(80);
                doc.setFontSize(16);
                doc.setTextColor(255, 152, 0);
                doc.text('10. Daily Practice Sheet (दैनिक अभ्यास)', margin, y);
                y += 12;
                
                doc.setFontSize(10);
                const practice = [
                    'Date: _______________',
                    '',
                    'Word of the day: _________________________',
                    'Hindi meaning: ___________________________',
                    '',
                    'Phrase of the day: _______________________',
                    'Hindi translation: _______________________',
                    '',
                    'Write 3 times:',
                    'Bonjour   _______________   _______________',
                    'Merci     _______________   _______________',
                    'Au revoir _______________   _______________',
                    '',
                    'Today I learned:',
                    '_______________________________________',
                    '_______________________________________',
                    '_______________________________________',
                    '',
                    'Tomorrow I will practice:',
                    '_______________________________________'
                ];
                
                practice.forEach(line => {
                    checkPageBreak(5);
                    doc.text(line, margin, y);
                    y += 6;
                });
                
                // Success message
                statusDiv.className = 'status success';
                statusDiv.innerHTML = '✅ PDF तैयार है! Download हो रही है...';
                
                // Download the PDF
                doc.save('French_Notes_Samridhi.pdf');
                
                // Final success message
                setTimeout(() => {
                    statusDiv.innerHTML = '🎉 PDF successfully downloaded!<br>📁 File: <strong>French_Notes_Samridhi.pdf</strong><br>📍 Check your Downloads folder';
                }, 1000);
                
                // Hide status after 10 seconds
                setTimeout(() => {
                    statusDiv.style.display = 'none';
                }, 10000);
                
            } catch (error) {
                console.error('Error creating PDF:', error);
                statusDiv.className = 'status';
                statusDiv.style.background = '#f8d7da';
                statusDiv.style.color = '#721c24';
                statusDiv.innerHTML = '❌ Error creating PDF. Please try again or refresh the page.';
            }
        }
    </script>
</body>
</html>
