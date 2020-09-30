export default function swDev()
{
    const url = './sw.js';
    navigator.serviceWorker.register(url).then( ( response ) => {
        console.log('Response ::',response);
    });
}