const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

credentials = {
    username: "",
    password: ""
};

readline.question('User Name: ', uname => {
    credentials.username = uname;
    //readline.close();
    readline.question('Password: ', passw => {
        credentials.password = passw;
        readline.close();
    });
});

// listen for close event
readline.on('close', () => {
    console.log(`👋   Welcome ${credentials.username}.`);
    console.log(`The password is: ${credentials.password}`);

    // exit the process
    process.exit(0);
});
