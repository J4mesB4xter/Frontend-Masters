export function parsnip (req, res, next) {
    let body = ''
    res.body = new Promise((res, rej) => {
        req.on('data', chunk => body += chunk);
        // req.on('close', () => req.body = body);
        req.on('close', () => res(body));
    })
    
    next();
}
