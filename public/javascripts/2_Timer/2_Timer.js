

    const displayTime = document.querySelector(".display-Time");
    function stoperTime() {
        this.houers = 0;
        this.minuts = 0;
        this.seconds = 0;
        this.toStop = true;
        this.timmerIsWorking = true;
        this.countSetTimeout = 0;
        this.start = function () {
            if (this.timmerIsWorking) {
                this.timmerIsWorking = false;
                this.toStop = true;
                this.runningTime();
            }
        }
        this.stop = function () {
            this.toStop = false;
            this.timmerIsWorking = true;
        }

        this.reset = function () {
            this.houers = 0;
            this.minuts = 0;
            this.seconds = 0;
            this.toStop = false;
            this.timmerIsWorking = true;
            this.countSetTimeout = 0;
            displayTime.textContent = "00:00:00";
        }
        this.duration = function () {
            return this.stopdTime;
        }
        this.runningTime = function () {

            if (this.toStop) {
                let timeToDisplay = [this.houers, this.minuts, this.seconds];
                if (time.seconds > 59) {
                    time.seconds = 0;
                    time.minuts++;
                } else if (time.minuts > 59) {
                    time.minuts = 0;
                    time.houers++;
                }
                this.seconds++;
                for (let i = 0; i < timeToDisplay.length; i++) {
                    if (timeToDisplay[i] < 10) {
                        timeToDisplay[i] = "0" + timeToDisplay[i];
                    }
                }
                displayTime.textContent = timeToDisplay.join(":");
                console.log(timeToDisplay);
                this.countSetTimeout++;
                console.log(this.countSetTimeout);

                if (this.countSetTimeout == 1) {
                    setTimeout(function () {
                        time.countSetTimeout--;
                        time.runningTime();
                        console.log("countSetTimeout --> " + time.countSetTimeout);

                    }
                        , 1000)
                }
            }
        }
    }

    const time = new stoperTime();


    document.querySelector(".my-timer").addEventListener("click", function (event) {
        if (event.target.classList.contains('start')) {
            time.start();
        }
        if (event.target.classList.contains('stop')) {
            time.stop();
        }
        if (event.target.classList.contains('reset')) {
            time.reset();
        }
        if (event.target.classList.contains('duration')) {
        }

    }, false);


