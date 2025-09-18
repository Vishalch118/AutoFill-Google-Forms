document.addEventListener('DOMContentLoaded', function() {
    loadSavedData();
    
    document.getElementById('saveData').addEventListener('click', saveData);
    document.getElementById('fillForm').addEventListener('click', fillCurrentForm);
});

function loadSavedData() {
    chrome.storage.sync.get(['autoFillData'], function(result) {
        if (result.autoFillData) {
            const data = result.autoFillData;
            document.getElementById('name').value = data.name || '';
            document.getElementById('email').value = data.email || '';
            document.getElementById('phone').value = data.phone || '';
            document.getElementById('registrationNumber').value = data.registrationNumber || '';
            document.getElementById('passoutBatch').value = data.passoutBatch || '';
            document.getElementById('branch').value = data.branch || '';
            document.getElementById('specialization').value = data.specialization || '';
            document.getElementById('cgpa').value = data.cgpa || '';
            document.getElementById('tenthMarks').value = data.tenthMarks || '';
            document.getElementById('twelfthMarks').value = data.twelfthMarks || '';
            document.getElementById('resumeLink').value = data.resumeLink || '';
            document.getElementById('gender').value = data.gender || '';
        }
    });
}

function saveData() {
    const data = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        registrationNumber: document.getElementById('registrationNumber').value,
        passoutBatch: document.getElementById('passoutBatch').value,
        branch: document.getElementById('branch').value,
        specialization: document.getElementById('specialization').value,
        cgpa: document.getElementById('cgpa').value,
        tenthMarks: document.getElementById('tenthMarks').value,
        twelfthMarks: document.getElementById('twelfthMarks').value,
        resumeLink: document.getElementById('resumeLink').value,
        gender: document.getElementById('gender').value
    };
    
    chrome.storage.sync.set({autoFillData: data}, function() {
        showStatus('Data saved successfully!', 'success');
    });
}

function fillCurrentForm() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        const tab = tabs[0];
        
        if (!tab.url.includes('docs.google.com/forms')) {
            showStatus('Please navigate to a Google Form first', 'error');
            return;
        }
        
        chrome.storage.sync.get(['autoFillData'], function(result) {
            if (!result.autoFillData) {
                showStatus('No data saved. Please save your data first.', 'error');
                return;
            }
            
            chrome.tabs.sendMessage(tab.id, {
                action: 'fillForm',
                data: result.autoFillData
            }, function(response) {
                if (chrome.runtime.lastError) {
                    showStatus('Error: Please refresh the page and try again', 'error');
                } else if (response && response.success) {
                    showStatus('Form filled successfully!', 'success');
                } else {
                    showStatus('Could not fill form. No matching fields found.', 'error');
                }
            });
        });
    });
}

function showStatus(message, type) {
    const statusDiv = document.getElementById('status');
    statusDiv.textContent = message;
    statusDiv.className = 'status ' + type;
    
    setTimeout(() => {
        statusDiv.textContent = '';
        statusDiv.className = '';
    }, 3000);
}
