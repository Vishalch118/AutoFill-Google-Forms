# Google Forms AutoFiller Chrome Extension

A powerful Chrome extension that automatically fills Google Forms with your pre-saved personal and academic information, saving you time and effort when filling out repetitive forms.

## 🚀 Features

- **Smart Field Detection**: Automatically detects and fills common form fields based on question text and input attributes
- **Comprehensive Data Storage**: Store all your personal, contact, and academic information
- **One-Click Form Filling**: Fill entire forms with a single click
- **Secure Local Storage**: All data is stored locally using Chrome's secure storage API
- **Academic Field Support**: Specialized support for academic forms including CGPA, grades, and educational details

## 📋 Supported Fields

### Personal Information
- Full Name
- Email Address
- Phone Number

### Academic Information  
- Registration/Roll Number
- Passout Batch/Year
- Branch/Department
- CGPA/GPA
- 10th Grade Percentage/GPA
- 12th Grade Percentage
- Resume/CV Link
- Gender

## 🛠️ Installation

### Method 1: From Source (Recommended)

1. **Clone or Download this repository**
   ```bash
   git clone https://github.com/Vishalch118/AutoFill-Google-Forms.git
   ```

2. **Open Chrome Extensions page**
   - Go to `chrome://extensions/`
   - Enable "Developer mode" (toggle in top right corner)

3. **Load the extension**
   - Click "Load unpacked"
   - Select the downloaded/cloned folder

4. **Pin the extension** (Optional)
   - Click the puzzle piece icon in Chrome toolbar
   - Pin the "Google Forms AutoFiller" extension for easy access

## 🎯 How to Use

### 1. Setup Your Data
1. Click the extension icon in your Chrome toolbar
2. Fill in your personal and academic information
3. Click "Save Data" to store your information

### 2. Fill Forms Automatically  
1. Navigate to any Google Form
2. Click the extension icon
3. Click "Fill Current Form"
4. Watch as your information is automatically filled in!

## 📁 Project Structure

```
google-forms-autofiller/
├── manifest.json          
├── popup.html             
├── popup.js               
├── content.js             
├── background.js          
└── README.md              
```

## 🔧 Technical Details

### Built With
- **Manifest V3**: Latest Chrome extension standard
- **Chrome Storage API**: Secure local data storage
- **Content Scripts**: DOM manipulation for form filling

### Field Detection Algorithm
The extension uses intelligent keyword matching to identify form fields:

- **Name Fields**: "name", "full name", "first name", "last name"
- **Email Fields**: "email", "e-mail", "email address"
- **Phone Fields**: "phone", "mobile", "telephone", "contact"
- **Academic Fields**: "cgpa", "gpa", "10th", "12th", "branch", "registration", etc.

### Privacy & Security
- ✅ **No data collection**: Your information never leaves your device
- ✅ **Local storage only**: Uses Chrome's secure storage API
- ✅ **No external servers**: No data is sent to any external servers
- ✅ **Minimal permissions**: Only requests necessary permissions

## 🛡️ Permissions Explained

- **`storage`**: To save your form data locally
- **`activeTab`**: To access the current Google Form tab
- **`host_permissions`**: Limited to Google Forms domains only

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Make your changes**
4. **Test thoroughly**
5. **Commit your changes** (`git commit -m 'Add amazing feature'`)
6. **Push to branch** (`git push origin feature/amazing-feature`)
7. **Open a Pull Request**

### Development Setup

1. Clone the repository
2. Make your changes
3. Load the extension in Chrome (Developer mode)
4. Test on various Google Forms
5. Submit your PR!
   

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## ⭐ Support

If this extension helped you, please consider:
- ⭐ Starring this repository
- 🐛 Reporting bugs


---

**Made with ❤️ to save your time and make form filling effortless!**
