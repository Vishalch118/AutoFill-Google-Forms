chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === 'fillForm') {
        const success = fillGoogleForm(request.data);
        sendResponse({success: success});
    }
});

function fillGoogleForm(data) {
    let fieldsFound = false;

    const inputs = document.querySelectorAll('input[type="text"], input[type="email"], input[type="tel"], input[type="url"], textarea, select');
    
    inputs.forEach(input => {
        const parentQuestion = input.closest('[data-params]');
        if (!parentQuestion) return;

        const questionElement = parentQuestion.querySelector('[role="heading"]');
        if (!questionElement) return;

        const questionText = questionElement.textContent.toLowerCase();

        if (isNameField(questionText) && data.name) {
            fillInput(input, data.name); fieldsFound = true;
        } else if (isEmailField(questionText) && data.email) {
            fillInput(input, data.email); fieldsFound = true;
        } else if (isPhoneField(questionText) && data.phone) {
            fillInput(input, data.phone); fieldsFound = true;
        } else if (isRegistrationField(questionText) && data.registrationNumber) {
            fillInput(input, data.registrationNumber); fieldsFound = true;
        } else if (isBatchField(questionText) && data.passoutBatch) {
            fillInput(input, data.passoutBatch); fieldsFound = true;
        } else if (isBranchField(questionText) && data.branch) {
            fillInput(input, data.branch); fieldsFound = true;
        } else if (isSpecializationField(questionText) && data.specialization) {
            fillInput(input, data.specialization); fieldsFound = true;
        } else if (isCGPAField(questionText) && data.cgpa) {
            fillInput(input, data.cgpa); fieldsFound = true;
        } else if (isTenthMarksField(questionText) && data.tenthMarks) {
            fillInput(input, data.tenthMarks); fieldsFound = true;
        } else if (isTwelfthMarksField(questionText) && data.twelfthMarks) {
            fillInput(input, data.twelfthMarks); fieldsFound = true;
        } else if (isResumeField(questionText) && data.resumeLink) {
            fillInput(input, data.resumeLink); fieldsFound = true;
        } else if (isGenderField(questionText) && data.gender) {
            fillGenderField(input, data.gender); fieldsFound = true;
        }
    });

    return fieldsFound;
}

function fillInput(input, value) {
    if (input.tagName.toLowerCase() === 'select') {
        const options = input.querySelectorAll('option');
        for (let option of options) {
            if (option.value.toLowerCase() === value.toLowerCase() || 
                option.textContent.toLowerCase() === value.toLowerCase()) {
                input.value = option.value;
                input.dispatchEvent(new Event('change', { bubbles: true }));
                return;
            }
        }
    }
    input.value = '';
    input.focus();
    input.value = value;
    ['input', 'change', 'blur'].forEach(eventType => {
        input.dispatchEvent(new Event(eventType, { bubbles: true }));
    });
}

function fillGenderField(input, gender) {
    const parentQuestion = input.closest('[data-params]');
    if (!parentQuestion) return;
    
    const radioButtons = parentQuestion.querySelectorAll('input[type="radio"]');
    if (radioButtons.length > 0) {
        radioButtons.forEach(radio => {
            const label = radio.closest('[role="radio"]');
            if (label && label.textContent.toLowerCase().includes(gender.toLowerCase())) {
                radio.click();
            }
        });
        return;
    }
    if (input.tagName.toLowerCase() === 'select') {
        fillInput(input, gender);
        return;
    }
    fillInput(input, gender);
}

function isNameField(text) {
    return ['name', 'full name', 'first name', 'last name'].some(k => text.includes(k));
}
function isEmailField(text) {
    return ['email', 'mail'].some(k => text.includes(k));
}
function isPhoneField(text) {
    return ['phone', 'mobile', 'contact'].some(k => text.includes(k));
}
function isRegistrationField(text) {
    return ['registration', 'reg no', 'roll'].some(k => text.includes(k));
}
function isBatchField(text) {
    return ['batch', 'year', 'passout', 'graduation'].some(k => text.includes(k));
}
function isBranchField(text) {
    return ['branch', 'department', 'stream', 'course', 'program', 'major'].some(k => text.includes(k));
}
function isSpecializationField(text) {
    return ['specialization', 'specialisation', 'core', 'ai', 'ml'].some(k => text.includes(k));
}
function isCGPAField(text) {
    return ['cgpa', 'gpa', 'grade'].some(k => text.includes(k));
}
function isTenthMarksField(text) {
    return ['10th', 'tenth', 'class 10'].some(k => text.includes(k));
}
function isTwelfthMarksField(text) {
    return ['12th', 'twelfth', 'class 12', 'intermediate'].some(k => text.includes(k));
}
function isResumeField(text) {
    return ['resume', 'cv', 'portfolio'].some(k => text.includes(k));
}
function isGenderField(text) {
    return ['gender', 'sex'].some(k => text.includes(k));
}

console.log('Google Forms AutoFiller extension with Specialization loaded');
