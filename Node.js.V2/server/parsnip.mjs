export function parsnip (req, res, next) {
    let body = ''
    req.on('data', chunk => body += chunk);
    req.on('end', () => {req.text = body; next()});
    req.json = () => {
        try { return JSON.parse(req.text) }
        catch (e) { return }
    }
}
