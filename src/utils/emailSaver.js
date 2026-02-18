
/**
 * A simple utility to handle saving emails in the browser environment.
 * In a real application, this would send data to a backend server.
 * Here, we use localStorage to persist data and provide a download function.
 */

const STORAGE_KEY = 'sadharan_emails';

export const saveEmail = (email) => {
    if (!email) return false;

    try {
        const existingEmails = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');

        // Check for duplicates
        if (!existingEmails.includes(email)) {
            const newEmails = [...existingEmails, { email, timestamp: new Date().toISOString() }];
            localStorage.setItem(STORAGE_KEY, JSON.stringify(newEmails));
            console.log('Email saved:', email);
            return true;
        } else {
            console.log('Email already exists');
            return true; // Return true as "success" even if duplicate
        }
    } catch (error) {
        console.error('Failed to save email:', error);
        return false;
    }
};

export const getEmails = () => {
    try {
        return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    } catch (error) {
        return [];
    }
};

export const downloadEmails = () => {
    const emails = getEmails();
    if (emails.length === 0) {
        alert('No emails collected yet.');
        return;
    }

    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(emails, null, 2));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "sadharan_emails.json");
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
};
