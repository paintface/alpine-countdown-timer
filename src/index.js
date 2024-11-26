export default function (Alpine) {
    if (!Alpine.store('countdown')) {
        Alpine.store('countdown', {
            isActive: true, // Use a more explicit active state
            days: '00',
            hours: '00',
            minutes: '00',
            seconds: '00',
        });
    }

    Alpine.directive('countdown', (el, { expression }, { evaluateLater }) => {
        let evaluate = evaluateLater(expression);

        evaluate((unixDeadline) => {
            let timerInterval;
            let deadline = Number(unixDeadline) * 1000;

            const calculateTimeRemaining = (endtime) => {
                let diff = endtime - Date.now();
                return {
                    total: diff,
                    days: Math.max(Math.floor(diff / (1000 * 60 * 60 * 24)), 0),
                    hours: Math.max(Math.floor((diff / (1000 * 60 * 60)) % 24), 0),
                    minutes: Math.max(Math.floor((diff / (1000 * 60)) % 60), 0),
                    seconds: Math.max(Math.floor((diff / 1000) % 60), 0),
                };
            };

            const updateCountdown = () => {
                let time = calculateTimeRemaining(deadline);
                Alpine.store('countdown', {
                    isActive: time.total > 0, // Use isActive instead of hidden
                    days: String(time.days).padStart(2, '0'),
                    hours: String(time.hours).padStart(2, '0'),
                    minutes: String(time.minutes).padStart(2, '0'),
                    seconds: String(time.seconds).padStart(2, '0'),
                });

                if (time.total <= 0) {
                    clearInterval(timerInterval);
                }
            };

            updateCountdown();
            timerInterval = setInterval(updateCountdown, 1000);
        });
    });
}
