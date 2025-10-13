let element = 0;

process.on('message', (data) => {
    console.log('Message from parent:', data);

    for (let i = 0; i < 5e7; i++) {
        element += i;
    }

    console.log('Computation done:', element);
    process.send({ reply: "Child replied" });
    process.exit(0)
});
