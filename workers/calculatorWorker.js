self.addEventListener('message', ({ data: { operation, value1, value2 } }) => {
    switch (operation) {
        case '-':
            return self.postMessage({ result: Number(value1) - Number(value2) });
        case '+':
            return self.postMessage({ result: Number(value1) + Number(value2) });
        case '/':
            return self.postMessage({ result: Number(value1) / Number(value2) });
        case '*':
            return self.postMessage({ result: Number(value1) * Number(value2) });
        default:
    }
});
