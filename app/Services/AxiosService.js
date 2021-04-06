export const api = axios.create({
    baseURL: 'https://opentdb.com/api.php?amount=10&difficulty=easy',
    timeout: 5000
})