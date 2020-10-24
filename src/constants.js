//add your token here
const TOKEN = '';

export const HEADER = {
    method: 'GET',
    headers: { 'Authorization': TOKEN + 'OAUTH-TOKEN' }
}

export const URL = 'https://api.github.com';

export const REPO = '/repos/facebook/create-react-app/issues?';