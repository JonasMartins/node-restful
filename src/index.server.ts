import Application from "./application";

const main = async () => {
    const application = new Application();
    await application.connect();
    await application.init();
    application.routes();
};
main().catch((err) => {
    console.error(err);
});
