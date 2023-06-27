export const convertTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    const convertedTime = `${hours} jam ${minutes} menit ${remainingSeconds} detik`;
    return convertedTime;
};