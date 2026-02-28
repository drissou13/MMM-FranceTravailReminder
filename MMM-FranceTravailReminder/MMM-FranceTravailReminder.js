Module.register("MMM-FranceTravailReminder", {

    defaults: {
        message: "Pense à actualiser ta situation France Travail",
        displayDuration: 2 * 60 * 1000,
        checkInterval: 60 * 1000,
        startDate: 28,
        endDate: 15,
        earliestHour: 8,
        latestHour: 20
    },

    start: function () {
        this.showReminder = false;
        this.randomHour = null;
        this.randomMinute = null;
        this.lastTriggerDate = null;

        this.scheduleRandomTime();
        setInterval(() => {
            this.checkTime();
        }, this.config.checkInterval);
    },

    scheduleRandomTime: function () {
        this.randomHour = Math.floor(
            Math.random() * (this.config.latestHour - this.config.earliestHour + 1)
        ) + this.config.earliestHour;

        this.randomMinute = Math.floor(Math.random() * 60);
    },

    isInPeriod: function () {
        const today = new Date();
        const day = today.getDate();
        return (day >= this.config.startDate || day <= this.config.endDate);
    },

    checkTime: function () {
        const now = new Date();
        const todayStr = now.toDateString();

        if (!this.isInPeriod()) return;

        if (
            now.getHours() === this.randomHour &&
            now.getMinutes() === this.randomMinute &&
            this.lastTriggerDate !== todayStr
        ) {
            this.lastTriggerDate = todayStr;
            this.showReminder = true;
            this.updateDom(1000);

            setTimeout(() => {
                this.showReminder = false;
                this.updateDom(1000);
                this.scheduleRandomTime();
            }, this.config.displayDuration);
        }
    },

    getDom: function () {
        const wrapper = document.createElement("div");

        if (this.showReminder) {
            wrapper.className = "fade-in";
            wrapper.innerHTML = `
                <div style="text-align:center;">
                    <img src="modules/MMM-FranceTravailReminder/public/logo.png"
                         style="width:120px; margin-bottom:10px;">
                    <div style="font-size:28px; font-weight:bold;">
                        ${this.config.message}
                    </div>
                </div>
            `;
        }

        return wrapper;
    },

    getStyles: function () {
        return ["MMM-FranceTravailReminder.css"];
    }
});
