// Application Data with Comprehensive Translations
const appData = {
  kerala_districts: [
    {"name": "Ernakulam", "workers": 8752, "alerts": 12},
    {"name": "Wayanad", "workers": 6632, "alerts": 8},
    {"name": "Kannur", "workers": 5963, "alerts": 6},
    {"name": "Kozhikode", "workers": 4377, "alerts": 5},
    {"name": "Kasargod", "workers": 4138, "alerts": 4},
    {"name": "Thrissur", "workers": 3841, "alerts": 7},
    {"name": "Kottayam", "workers": 3618, "alerts": 3},
    {"name": "Palakkad", "workers": 3255, "alerts": 2}
  ],
  origin_states: [
    {"state": "West Bengal", "percentage": 35, "workers": 1085000},
    {"state": "Odisha", "percentage": 19, "workers": 589000},
    {"state": "Tamil Nadu", "percentage": 16, "workers": 496000},
    {"state": "Assam", "percentage": 14, "workers": 434000},
    {"state": "Bihar", "percentage": 10, "workers": 310000},
    {"state": "Uttar Pradesh", "percentage": 6, "workers": 186000}
  ],
  demographics: {
    age_groups: [
      {"age": "18-25", "male": 45000, "female": 2800},
      {"age": "26-35", "male": 78000, "female": 4200},
      {"age": "36-45", "male": 52000, "female": 2100},
      {"age": "46-60", "male": 23000, "female": 900}
    ]
  },
  disease_trends: [
    {"month": "Jan", "skinDiseases": 145, "respiratory": 89, "injuries": 67},
    {"month": "Feb", "skinDiseases": 152, "respiratory": 94, "injuries": 71},
    {"month": "Mar", "skinDiseases": 148, "respiratory": 78, "injuries": 83},
    {"month": "Apr", "skinDiseases": 167, "respiratory": 112, "injuries": 76},
    {"month": "May", "skinDiseases": 189, "respiratory": 125, "injuries": 89},
    {"month": "Jun", "skinDiseases": 198, "respiratory": 134, "injuries": 92}
  ],
  health_incidents_chart: [
    {"month": "Jan 2024", "incidents": 2},
    {"month": "Feb 2024", "incidents": 1},
    {"month": "Mar 2024", "incidents": 0},
    {"month": "Apr 2024", "incidents": 1},
    {"month": "May 2024", "incidents": 3},
    {"month": "Jun 2024", "incidents": 1},
    {"month": "Jul 2024", "incidents": 0},
    {"month": "Aug 2024", "incidents": 1}
  ],
  sample_worker: {
    "id": "MW-1001",
    "name": "Rajesh Kumar",
    "age": 28,
    "gender": "Male",
    "bloodType": "B+",
    "contact": "+91 9876543210",
    "origin": "West Bengal",
    "profession": "Construction Worker",
    "experience": "5 years",
    "workStatus": "Currently Working",
    "workplace": "Ernakulam District",
    "workType": "Building Construction",
    "employer": "Kerala Infrastructure Ltd",
    "employerType": "Private",
    "duration": "18 months",
    "healthScore": 78,
    "vaccinationStatus": "Fully Vaccinated",
    "lastCheckup": "2024-08-15",
    "lastCheckupPlace": "PHC Perumbavoor"
  }
};

// Comprehensive Translation Object
const translations = {
  "en": {
    "appTitle": "MigraCare",
    "appSubtitle": "Healthcare Management for Migrant Workers",
    "language": "Language",
    "role": "Your Role",
    "userId": "User ID",
    "passcode": "4-Digit Passcode",
    "login": "Login",
    "forgotPasscode": "Forgot Passcode?",
    "newRegistration": "New User Registration",
    "migrantWorker": "Migrant Worker",
    "governmentOfficial": "Government Official",
    "healthcareWorker": "Healthcare Worker",
    "logout": "Logout",
    "welcome": "Welcome",
    "profile": "Profile",
    "health": "Health",
    "healthcare": "Healthcare",
    "schemes": "Schemes",
    "settings": "Settings",
    "personalDetails": "Personal Details",
    "workDetails": "Work Details",
    "basicHealthInfo": "Basic Health Information",
    "healthScore": "Health Score",
    "medicalHistory": "Medical History",
    "vaccinationStatus": "Vaccination Status",
    "nearbyHospitals": "Nearby Hospitals",
    "emergencyNumbers": "Emergency Numbers",
    "governmentSchemes": "Government Schemes",
    "changePasscode": "Change Passcode",
    "updateEmail": "Update Email",
    "updateContact": "Update Contact",
    "notificationSettings": "Notification Settings",
    "languagePreferences": "Language Preferences",
    "dashboard": "Dashboard",
    "totalWorkers": "Total Workers",
    "diseaseAlerts": "Disease Alerts",
    "avgHealthScore": "Average Health Score",
    "districtsCovered": "Districts Covered",
    "searchWorker": "Search Worker",
    "updateHealthData": "Update Health Data",
    "ambulance": "Ambulance",
    "police": "Police",
    "disaster": "Disaster Helpline"
  },
  "hi": {
    "appTitle": "माइग्राकेयर",
    "appSubtitle": "प्रवासी श्रमिकों के लिए स्वास्थ्य प्रबंधन",
    "language": "भाषा",
    "role": "आपकी भूमिका",
    "userId": "यूजर आईडी",
    "passcode": "4-अंकीय पासकोड",
    "login": "लॉगिन",
    "forgotPasscode": "पासकोड भूल गए?",
    "newRegistration": "नया उपयोगकर्ता पंजीकरण",
    "migrantWorker": "प्रवासी श्रमिक",
    "governmentOfficial": "सरकारी अधिकारी",
    "healthcareWorker": "स्वास्थ्य कर्मी",
    "logout": "लॉगआउट",
    "welcome": "स्वागत",
    "profile": "प्रोफ़ाइल",
    "health": "स्वास्थ्य",
    "healthcare": "स्वास्थ्य सेवा",
    "schemes": "योजनाएं",
    "settings": "सेटिंग्स",
    "personalDetails": "व्यक्तिगत विवरण",
    "workDetails": "काम का विवरण",
    "basicHealthInfo": "बुनियादी स्वास्थ्य जानकारी",
    "healthScore": "स्वास्थ्य स्कोर",
    "medicalHistory": "चिकित्सा इतिहास",
    "vaccinationStatus": "टीकाकरण की स्थिति",
    "nearbyHospitals": "नजदीकी अस्पताल",
    "emergencyNumbers": "आपातकालीन नंबर",
    "governmentSchemes": "सरकारी योजनाएं",
    "changePasscode": "पासकोड बदलें",
    "updateEmail": "ईमेल अपडेट करें",
    "updateContact": "संपर्क अपडेट करें",
    "notificationSettings": "सूचना सेटिंग्स",
    "languagePreferences": "भाषा प्राथमिकताएं",
    "dashboard": "डैशबोर्ड",
    "totalWorkers": "कुल श्रमिक",
    "diseaseAlerts": "रोग अलर्ट",
    "avgHealthScore": "औसत स्वास्थ्य स्कोर",
    "districtsCovered": "जिले कवर किए गए",
    "searchWorker": "श्रमिक खोजें",
    "updateHealthData": "स्वास्थ्य डेटा अपडेट करें",
    "ambulance": "एम्बुलेंस",
    "police": "पुलिस",
    "disaster": "आपदा हेल्पलाइन"
  },
  "kn": {
    "appTitle": "ಮೈಗ್ರಾಕೇರ್",
    "appSubtitle": "ವಲಸೆ ಕಾರ್ಮಿಕರಿಗಾಗಿ ಆರೋಗ್ಯ ನಿರ್ವಹಣೆ",
    "language": "ಭಾಷೆ",
    "role": "ನಿಮ್ಮ ಪಾತ್ರ",
    "userId": "ಬಳಕೆದಾರ ಐಡಿ",
    "passcode": "4-ಅಂಕಿಯ ಪಾಸ್‌ಕೋಡ್",
    "login": "ಲಾಗಿನ್",
    "forgotPasscode": "ಪಾಸ್‌ಕೋಡ್ ಮರೆತಿರಾ?",
    "newRegistration": "ಹೊಸ ಬಳಕೆದಾರ ನೋಂದಣಿ",
    "migrantWorker": "ವಲಸೆ ಕಾರ್ಮಿಕ",
    "governmentOfficial": "ಸರ್ಕಾರಿ ಅಧಿಕಾರಿ",
    "healthcareWorker": "ಆರೋಗ್ಯ ಕಾರ್ಮಿಕ",
    "logout": "ಲಾಗ್ ಔಟ್",
    "welcome": "ಸ್ವಾಗತ",
    "profile": "ಪ್ರೊಫೈಲ್",
    "health": "ಆರೋಗ್ಯ",
    "healthcare": "ಆರೋಗ್ಯ ಸೇವೆ",
    "schemes": "ಯೋಜನೆಗಳು",
    "settings": "ಸೆಟ್ಟಿಂಗ್‌ಗಳು",
    "personalDetails": "ವೈಯಕ್ತಿಕ ವಿವರಗಳು",
    "workDetails": "ಕೆಲಸದ ವಿವರಗಳು",
    "basicHealthInfo": "ಮೂಲಭೂತ ಆರೋಗ್ಯ ಮಾಹಿತಿ",
    "healthScore": "ಆರೋಗ್ಯ ಅಂಕ",
    "medicalHistory": "ವೈದ್ಯಕೀಯ ಇತಿಹಾಸ",
    "vaccinationStatus": "ಲಸಿಕೆ ಸ್ಥಿತಿ",
    "nearbyHospitals": "ಹತ್ತಿರದ ಆಸ್ಪತ್ರೆಗಳು",
    "emergencyNumbers": "ತುರ್ತು ಸಂಖ್ಯೆಗಳು",
    "governmentSchemes": "ಸರ್ಕಾರಿ ಯೋಜನೆಗಳು",
    "changePasscode": "ಪಾಸ್‌ಕೋಡ್ ಬದಲಾಯಿಸಿ",
    "updateEmail": "ಇಮೇಲ್ ಅಪ್ಡೇಟ್ ಮಾಡಿ",
    "updateContact": "ಸಂಪರ್ಕ ಅಪ್ಡೇಟ್ ಮಾಡಿ",
    "notificationSettings": "ಅಧಿಸೂಚನೆ ಸೆಟ್ಟಿಂಗ್‌ಗಳು",
    "languagePreferences": "ಭಾಷಾ ಆದ್ಯತೆಗಳು",
    "dashboard": "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
    "totalWorkers": "ಒಟ್ಟು ಕಾರ್ಮಿಕರು",
    "diseaseAlerts": "ರೋಗ ಎಚ್ಚರಿಕೆಗಳು",
    "avgHealthScore": "ಸರಾಸರಿ ಆರೋಗ್ಯ ಅಂಕ",
    "districtsCovered": "ಜಿಲ್ಲೆಗಳು ಆವರಿಸಲಾಗಿದೆ",
    "searchWorker": "ಕಾರ್ಮಿಕ ಹುಡುಕಿ",
    "updateHealthData": "ಆರೋಗ್ಯ ಡೇಟಾ ಅಪ್ಡೇಟ್ ಮಾಡಿ",
    "ambulance": "ಆಂಬುಲೆನ್ಸ್",
    "police": "ಪೊಲೀಸ್",
    "disaster": "ವಿಪತ್ತು ಸಹಾಯವಾಣಿ"
  },
  "ml": {
    "appTitle": "മൈഗ്രാകെയർ",
    "appSubtitle": "കുടിയേറ്റ തൊഴിലാളികൾക്കുള്ള ആരോഗ്യ പരിപാലനം",
    "language": "ഭാഷ",
    "role": "നിങ്ങളുടെ റോൾ",
    "userId": "യൂസർ ഐഡി",
    "passcode": "4-അക്ക പാസ്‌കോഡ്",
    "login": "ലോഗിൻ",
    "forgotPasscode": "പാസ്‌കോഡ് മറന്നോ?",
    "newRegistration": "പുതിയ ഉപയോക്താവിന്റെ രജിസ്‌ട്രേഷൻ",
    "migrantWorker": "കുടിയേറ്റ തൊഴിലാളി",
    "governmentOfficial": "സർക്കാർ ഉദ്യോഗസ്ഥൻ",
    "healthcareWorker": "ആരോഗ്യസേവന തൊഴിലാളി",
    "logout": "ലോഗൗട്ട്",
    "welcome": "സ്വാഗതം",
    "profile": "പ്രൊഫൈൽ",
    "health": "ആരോഗ്യം",
    "healthcare": "ആരോഗ്യസേവനം",
    "schemes": "പദ്ധതികൾ",
    "settings": "സെറ്റിംഗ്സ്",
    "personalDetails": "വ്യക്തിഗത വിവരങ്ങൾ",
    "workDetails": "ജോലി വിവരങ്ങൾ",
    "basicHealthInfo": "അടിസ്ഥാന ആരോഗ്യ വിവരങ്ങൾ",
    "healthScore": "ആരോഗ്യ സ്കോർ",
    "medicalHistory": "മെഡിക്കൽ ഹിസ്റ്ററി",
    "vaccinationStatus": "വാക്സിനേഷൻ നില",
    "nearbyHospitals": "സമീപത്തെ ആശുപത്രികൾ",
    "emergencyNumbers": "എമർജൻസി നമ്പറുകൾ",
    "governmentSchemes": "സർക്കാർ പദ്ധതികൾ",
    "changePasscode": "പാസ്‌കോഡ് മാറ്റുക",
    "updateEmail": "ഇമെയിൽ അപ്ഡേറ്റ് ചെയ്യുക",
    "updateContact": "കോൺടാക്റ്റ് അപ്ഡേറ്റ് ചെയ്യുക",
    "notificationSettings": "നോട്ടിഫിക്കേഷൻ സെറ്റിംഗ്സ്",
    "languagePreferences": "ഭാഷാ മുൻഗണനകൾ",
    "dashboard": "ഡാഷ്ബോർഡ്",
    "totalWorkers": "ആകെ തൊഴിലാളികൾ",
    "diseaseAlerts": "രോഗ അലേർട്ടുകൾ",
    "avgHealthScore": "ശരാശരി ആരോഗ്യ സ്കോർ",
    "districtsCovered": "ജില്ലകൾ കവർ ചെയ്തു",
    "searchWorker": "തൊഴിലാളിയെ തിരയുക",
    "updateHealthData": "ആരോഗ്യ ഡാറ്റ അപ്ഡേറ്റ് ചെയ്യുക",
    "ambulance": "ആംബുലൻസ്",
    "police": "പൊലീസ്",
    "disaster": "ദുരന്ത ഹെൽപ്പ്‌ലൈൻ"
  }
};

// Global state
let currentLanguage = 'en';
let currentRole = 'migrant';
let currentUser = null;
let chartInstances = {};

// Text-to-Speech Function
function speakText(text) {
    if ('speechSynthesis' in window) {
        // Cancel any ongoing speech
        window.speechSynthesis.cancel();
        
        // Create utterance
        const utterance = new SpeechSynthesisUtterance(text);
        
        // Set language based on current selection
        const languageVoices = {
            'en': 'en-US',
            'hi': 'hi-IN',
            'kn': 'kn-IN',
            'ml': 'ml-IN'
        };
        
        utterance.lang = languageVoices[currentLanguage] || 'en-US';
        utterance.rate = 0.8;
        utterance.pitch = 1;
        
        window.speechSynthesis.speak(utterance);
        console.log('Speaking:', text);
    } else {
        console.log('Speech synthesis not supported');
    }
}

// Language Translation Function
function translateInterface(language) {
    console.log('Translating interface to:', language);
    
    const elements = document.querySelectorAll('[data-translate]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[language] && translations[language][key]) {
            element.textContent = translations[language][key];
        }
    });
    
    // Update all language selectors
    updateLanguageSelectors(language);
    
    console.log('Interface translated to:', language);
}

// Update Language Selectors
function updateLanguageSelectors(language) {
    const selectors = [
        'languageSelect',
        'settingsLanguageSelect', 
        'govLanguageSelect',
        'hcLanguageSelect'
    ];
    
    selectors.forEach(id => {
        const selector = document.getElementById(id);
        if (selector) {
            selector.value = language;
        }
    });
}

// Main initialization function
function initializeApp() {
    console.log('Starting MigraCare initialization...');
    
    // Use DOMContentLoaded to ensure DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', startApp);
    } else {
        startApp();
    }
}

function startApp() {
    console.log('DOM ready, initializing app components...');
    
    try {
        setupLoginSystem();
        setupPasscodeInputs();
        setupTabNavigation();
        setupLogoutHandler();
        setupLanguageHandlers();
        setupSearchHandler();
        console.log('App initialization complete');
    } catch (error) {
        console.error('Error during app initialization:', error);
    }
}

// Setup Language Handlers
function setupLanguageHandlers() {
    console.log('Setting up language handlers...');
    
    // Main language selector
    const languageSelect = document.getElementById('languageSelect');
    if (languageSelect) {
        languageSelect.addEventListener('change', function() {
            currentLanguage = this.value;
            translateInterface(currentLanguage);
            console.log('Language changed to:', currentLanguage);
        });
    }
    
    // Settings language selectors with setTimeout to ensure they exist
    setTimeout(() => {
        const settingsSelectors = [
            'settingsLanguageSelect',
            'govLanguageSelect', 
            'hcLanguageSelect'
        ];
        
        settingsSelectors.forEach(id => {
            const selector = document.getElementById(id);
            if (selector) {
                selector.addEventListener('change', function() {
                    currentLanguage = this.value;
                    translateInterface(currentLanguage);
                    updateLanguageSelectors(currentLanguage);
                    console.log('Language changed from settings to:', currentLanguage);
                });
            }
        });
    }, 500);
}

// Login System Setup
function setupLoginSystem() {
    console.log('Setting up login system...');
    
    const loginBtn = document.getElementById('loginBtn');
    const roleSelect = document.getElementById('roleSelect');
    const languageSelect = document.getElementById('languageSelect');
    const userIdInput = document.getElementById('userIdInput');
    
    // Setup login button with addEventListener
    if (loginBtn) {
        loginBtn.addEventListener('click', function(event) {
            event.preventDefault();
            handleLogin();
        });
        console.log('Login button event attached');
    }
    
    // Setup role selector
    if (roleSelect) {
        roleSelect.addEventListener('change', function() {
            currentRole = this.value;
            updateUserIdForRole();
            console.log('Role changed to:', currentRole);
        });
    }
    
    // Setup initial language selector
    if (languageSelect) {
        languageSelect.addEventListener('change', function() {
            currentLanguage = this.value;
            translateInterface(currentLanguage);
            console.log('Language changed to:', currentLanguage);
        });
    }
}

function updateUserIdForRole() {
    const userIdInput = document.getElementById('userIdInput');
    if (userIdInput) {
        const roleIds = {
            'migrant': 'MW-1001',
            'government': 'GOV-001',
            'healthcare': 'HC-001'
        };
        userIdInput.value = roleIds[currentRole] || 'MW-1001';
    }
}

// Handle Login Process
function handleLogin() {
    console.log('Processing login...');
    
    const userIdInput = document.getElementById('userIdInput');
    const passcodeInputs = document.querySelectorAll('.passcode-digit');
    
    if (!userIdInput) {
        alert('User ID input not found');
        return;
    }
    
    const userId = userIdInput.value.trim();
    let passcode = '';
    
    passcodeInputs.forEach(input => {
        passcode += input.value || '';
    });
    
    if (!userId) {
        alert('Please enter a User ID');
        return;
    }
    
    if (passcode.length !== 4) {
        alert('Please enter a complete 4-digit passcode');
        return;
    }
    
    if (passcode === '1234') {
        currentUser = { id: userId, role: currentRole };
        showMainApplication();
    } else {
        alert('Invalid passcode. Please use: 1234');
    }
}

// Show Main Application
function showMainApplication() {
    console.log('Showing main application for role:', currentRole);
    
    const loginScreen = document.getElementById('loginScreen');
    const mainApp = document.getElementById('mainApp');
    
    if (!loginScreen || !mainApp) {
        console.error('Required screens not found');
        return;
    }
    
    // Hide login, show main app
    loginScreen.style.display = 'none';
    mainApp.style.display = 'flex';
    mainApp.classList.remove('hidden');
    
    // Apply current language to main app
    translateInterface(currentLanguage);
    
    // Show correct interface 
    showRoleInterface(currentRole);
    
    // Initialize charts after delay
    setTimeout(() => {
        if (currentRole === 'migrant') {
            initializeMigrantCharts();
        } else if (currentRole === 'government') {
            initializeGovernmentCharts();
        }
    }, 500);
}

function showRoleInterface(role) {
    console.log('Showing interface for role:', role);
    
    // Hide all interfaces
    const interfaces = document.querySelectorAll('.interface');
    const tabContainers = document.querySelectorAll('.tab-container');
    
    interfaces.forEach(el => {
        el.classList.add('hidden');
        el.style.display = 'none';
    });
    
    tabContainers.forEach(el => {
        el.classList.add('hidden');
        el.style.display = 'none';
    });
    
    // Show appropriate interface
    const interfaceMap = {
        'migrant': { interface: 'migrantInterface', tabs: 'migrantTabs' },
        'government': { interface: 'governmentInterface', tabs: 'governmentTabs' },
        'healthcare': { interface: 'healthcareInterface', tabs: 'healthcareTabs' }
    };
    
    const config = interfaceMap[role];
    if (config) {
        const interfaceEl = document.getElementById(config.interface);
        const tabsEl = document.getElementById(config.tabs);
        
        if (interfaceEl) {
            interfaceEl.classList.remove('hidden');
            interfaceEl.style.display = 'block';
        }
        
        if (tabsEl) {
            tabsEl.classList.remove('hidden');
            tabsEl.style.display = 'flex';
        }
    }
}

// Setup Passcode Inputs
function setupPasscodeInputs() {
    const inputs = document.querySelectorAll('.passcode-digit');
    
    inputs.forEach((input, index) => {
        input.addEventListener('input', function() {
            this.value = this.value.replace(/[^0-9]/g, '');
            
            if (this.value.length === 1 && index < inputs.length - 1) {
                inputs[index + 1].focus();
            }
        });
        
        input.addEventListener('keydown', function(e) {
            if (e.key === 'Backspace' && this.value === '' && index > 0) {
                inputs[index - 1].focus();
            }
        });
    });
}

// Setup Tab Navigation
function setupTabNavigation() {
    document.addEventListener('click', function(event) {
        const target = event.target;
        
        if (target.classList.contains('tab-btn')) {
            event.preventDefault();
            handleTabSwitch(target);
        }
    });
}

function handleTabSwitch(tabButton) {
    const tabName = tabButton.getAttribute('data-tab');
    const tabContainer = tabButton.closest('.tab-container');
    if (!tabContainer) return;
    
    // Update active tab button
    const allTabBtns = tabContainer.querySelectorAll('.tab-btn');
    allTabBtns.forEach(btn => btn.classList.remove('active'));
    tabButton.classList.add('active');
    
    // Update active tab content
    const currentInterface = document.querySelector('.interface:not(.hidden)');
    if (currentInterface) {
        const allTabContents = currentInterface.querySelectorAll('.tab-content');
        allTabContents.forEach(content => content.classList.remove('active'));
        
        // Handle special settings tab names
        let targetTabId = tabName + 'Tab';
        if (tabName === 'settings') {
            if (currentRole === 'government') {
                targetTabId = 'govSettingsTab';
            } else if (currentRole === 'healthcare') {
                targetTabId = 'hcSettingsTab';
            } else {
                targetTabId = 'settingsTab';
            }
        }
        
        const targetContent = currentInterface.querySelector('#' + targetTabId);
        if (targetContent) {
            targetContent.classList.add('active');
        }
    }
}

// Setup Search Handler
function setupSearchHandler() {
    setTimeout(() => {
        const searchBtn = document.getElementById('searchWorkerBtn');
        if (searchBtn) {
            searchBtn.addEventListener('click', function() {
                const searchInput = document.getElementById('searchWorkerId');
                const resultsDiv = document.getElementById('searchResults');
                
                if (searchInput && resultsDiv) {
                    const workerId = searchInput.value.trim();
                    if (workerId === 'MW-1001') {
                        // Show sample worker data
                        document.getElementById('workerName').textContent = appData.sample_worker.name;
                        document.getElementById('workerAge').textContent = appData.sample_worker.age + ' years';
                        document.getElementById('workerOrigin').textContent = appData.sample_worker.origin;
                        document.getElementById('workerStatus').textContent = appData.sample_worker.workStatus;
                        document.getElementById('workerHealth').textContent = appData.sample_worker.healthScore + '%';
                        
                        resultsDiv.classList.remove('hidden');
                    } else {
                        alert('Worker not found. Try: MW-1001');
                    }
                }
            });
        }
    }, 500);
}

// Setup Logout Handler
function setupLogoutHandler() {
    setTimeout(() => {
        const logoutBtn = document.getElementById('logoutBtn');
        if (logoutBtn) {
            logoutBtn.addEventListener('click', function(event) {
                event.preventDefault();
                performLogout();
            });
        }
    }, 500);
}

function performLogout() {
    // Clean up charts
    Object.keys(chartInstances).forEach(key => {
        if (chartInstances[key] && chartInstances[key].destroy) {
            chartInstances[key].destroy();
            delete chartInstances[key];
        }
    });
    
    // Reset form
    document.querySelectorAll('.passcode-digit').forEach(input => {
        input.value = '';
    });
    
    // Reset state
    currentUser = null;
    currentRole = 'migrant';
    
    // Show login screen
    const loginScreen = document.getElementById('loginScreen');
    const mainApp = document.getElementById('mainApp');
    
    if (loginScreen) {
        loginScreen.style.display = 'flex';
        loginScreen.classList.remove('hidden');
    }
    
    if (mainApp) {
        mainApp.style.display = 'none';
        mainApp.classList.add('hidden');
    }
    
    // Reset role selector
    const roleSelect = document.getElementById('roleSelect');
    if (roleSelect) {
        roleSelect.value = 'migrant';
        updateUserIdForRole();
    }
    
    // Reset language
    const languageSelect = document.getElementById('languageSelect');
    if (languageSelect) {
        languageSelect.value = 'en';
        currentLanguage = 'en';
        translateInterface('en');
    }
}

// Chart Functions
function initializeMigrantCharts() {
    console.log('Initializing migrant worker charts...');
    
    try {
        createHealthScoreChart();
        createHealthHistoryChart();
    } catch (error) {
        console.error('Error creating migrant charts:', error);
    }
}

function createHealthScoreChart() {
    const canvas = document.getElementById('healthScoreChart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const healthScore = 78;
    
    if (chartInstances.healthScoreChart) {
        chartInstances.healthScoreChart.destroy();
    }
    
    chartInstances.healthScoreChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            datasets: [{
                data: [healthScore, 100 - healthScore],
                backgroundColor: ['#1FB8CD', '#ECEBD5'],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '70%',
            plugins: {
                legend: { display: false }
            }
        },
        plugins: [{
            afterDraw: function(chart) {
                const ctx = chart.ctx;
                ctx.save();
                const centerX = (chart.chartArea.left + chart.chartArea.right) / 2;
                const centerY = (chart.chartArea.top + chart.chartArea.bottom) / 2;
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.font = 'bold 24px Arial';
                ctx.fillStyle = '#1FB8CD';
                ctx.fillText(healthScore + '%', centerX, centerY - 10);
                ctx.font = '12px Arial';
                ctx.fillStyle = '#666';
                ctx.fillText('Health Score', centerX, centerY + 15);
                ctx.restore();
            }
        }]
    });
}

function createHealthHistoryChart() {
    const canvas = document.getElementById('healthHistoryChart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    if (chartInstances.healthHistoryChart) {
        chartInstances.healthHistoryChart.destroy();
    }
    
    chartInstances.healthHistoryChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: appData.health_incidents_chart.map(h => h.month),
            datasets: [{
                label: 'Health Incidents',
                data: appData.health_incidents_chart.map(h => h.incidents),
                backgroundColor: '#FFC185',
                borderColor: '#FFC185',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 5
                }
            }
        }
    });
}

function initializeGovernmentCharts() {
    console.log('Initializing government charts...');
    
    try {
        createDistrictChart();
        createOriginChart();
        createDemographicsChart();
        createDiseaseTrendsChart();
    } catch (error) {
        console.error('Error creating government charts:', error);
    }
}

function createDistrictChart() {
    const canvas = document.getElementById('districtChart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    if (chartInstances.districtChart) {
        chartInstances.districtChart.destroy();
    }
    
    chartInstances.districtChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: appData.kerala_districts.map(d => d.name),
            datasets: [{
                label: 'Number of Workers',
                data: appData.kerala_districts.map(d => d.workers),
                backgroundColor: '#1FB8CD'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: { y: { beginAtZero: true } }
        }
    });
}

function createOriginChart() {
    const canvas = document.getElementById('originChart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const colors = ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F', '#DB4545'];
    
    if (chartInstances.originChart) {
        chartInstances.originChart.destroy();
    }
    
    chartInstances.originChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: appData.origin_states.map(s => s.state),
            datasets: [{
                data: appData.origin_states.map(s => s.percentage),
                backgroundColor: colors,
                borderWidth: 2,
                borderColor: '#fff'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { position: 'bottom' }
            }
        }
    });
}

function createDemographicsChart() {
    const canvas = document.getElementById('demographicsChart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    if (chartInstances.demographicsChart) {
        chartInstances.demographicsChart.destroy();
    }
    
    chartInstances.demographicsChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: appData.demographics.age_groups.map(g => g.age),
            datasets: [
                {
                    label: 'Male',
                    data: appData.demographics.age_groups.map(g => g.male),
                    backgroundColor: '#1FB8CD'
                },
                {
                    label: 'Female',
                    data: appData.demographics.age_groups.map(g => g.female),
                    backgroundColor: '#FFC185'
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: { y: { beginAtZero: true } }
        }
    });
}

function createDiseaseTrendsChart() {
    const canvas = document.getElementById('diseaseTrendsChart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    if (chartInstances.diseaseTrendsChart) {
        chartInstances.diseaseTrendsChart.destroy();
    }
    
    chartInstances.diseaseTrendsChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: appData.disease_trends.map(d => d.month),
            datasets: [
                {
                    label: 'Skin Diseases',
                    data: appData.disease_trends.map(d => d.skinDiseases),
                    borderColor: '#B4413C',
                    backgroundColor: '#B4413C',
                    fill: false,
                    tension: 0.4
                },
                {
                    label: 'Respiratory Issues',
                    data: appData.disease_trends.map(d => d.respiratory),
                    borderColor: '#5D878F',
                    backgroundColor: '#5D878F',
                    fill: false,
                    tension: 0.4
                },
                {
                    label: 'Injuries',
                    data: appData.disease_trends.map(d => d.injuries),
                    borderColor: '#D2BA4C',
                    backgroundColor: '#D2BA4C',
                    fill: false,
                    tension: 0.4
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: { y: { beginAtZero: true } }
        }
    });
}

// Start the application
console.log('MigraCare script loaded, initializing...');
initializeApp();