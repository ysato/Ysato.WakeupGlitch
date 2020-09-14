const isScheduled = (): boolean => {
    const triggers = ScriptApp.getProjectTriggers()
        .filter(trigger => trigger.getHandlerFunction() === 'wakeup');

    return triggers.length > 0;
};

const schedule = (): void => {
    ScriptApp.newTrigger('wakeup')
        .timeBased()
        .everyMinutes(1)
        .create();
};

const wakeup = (): void => {
    const urls = [];

    urls.forEach(url => {
        const res = UrlFetchApp.fetch(url, {
            muteHttpExceptions: true
        });

        console.log(res);
    });
};

function doSchedule() {
    if (! isScheduled()) {
        schedule();
    }
}
