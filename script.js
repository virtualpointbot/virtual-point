let points = 10000000;
let pointsPerClick = 1;
let upgradeCost = 100;

let batteryLimit = 500;
let currentBattery = batteryLimit;
let rechargeTime = 700; // in seconds
let batteryUpgradeCost = 1000;
let rechargeTimeUpgradeCost = 1000;
let batteryLevel = 1;
let rechargeSpeedLevel = 1;


const pointsDisplay = document.getElementById('points');// point display
const ppcDisplay = document.getElementById('ppc');// point per click display
const clickButton = document.getElementById('click-button');// middle click
const clickSound = document.getElementById('click-sound');// middle click sound
const upgradeSound = document.getElementById('upgrade-sound');// upgrade sound

const upgradeCostDisplay = document.getElementById('upgrade-cost');// battry display 


const UpgradeSection = document.getElementById('upgrade-section');// upgrade page
// this 6 elements must be hide and use in upgrade page
const upgradeButton = document.getElementById('upgrade-button');
const batteryUpgradeButton = document.getElementById('battery-upgrade-button');
const batteryUpgradeCostDisplay = document.getElementById('battery-upgrade-cost');
const rechargeTimeUpgradeButton = document.getElementById('recharge-time-upgrade-button');
const rechargeTimeUpgradeCostDisplay = document.getElementById('recharge-time-upgrade-cost');
const backButton2 = document.getElementById('back-button-2');// back button for upgrade page

const TopSection = document.getElementById('top-section');
const upgradeScreenButton = document.getElementById('upgrade-screen-button');
const freePointsButton = document.getElementById('free-points-button');
const gameSection = document.getElementById('game-section');
const freePointsSection = document.getElementById('free-points-section');
const backButton = document.getElementById('back-button');


const youtubeLink = document.getElementById('youtube-link');
const instagramLink = document.getElementById('instagram-link');
const twitterLink = document.getElementById('twitter-link');

const batteryDisplay = document.getElementById('battery');



function updateDisplay() {
    pointsDisplay.textContent = points;
    ppcDisplay.textContent = pointsPerClick;
    upgradeCostDisplay.textContent = upgradeCost;
    batteryDisplay.textContent = `${currentBattery}/${batteryLimit}`;
    batteryUpgradeCostDisplay.textContent = batteryLevel < 5 ? batteryUpgradeCost : 'MAX';
    rechargeTimeUpgradeCostDisplay.textContent = rechargeSpeedLevel < 5 ? rechargeTimeUpgradeCost : 'MAX';
}

let linkUsed = {
    youtube: false,
    instagram: false,
    twitter: false
};

function rechargeBattery() {
    if (currentBattery < batteryLimit) {
        currentBattery += 1;
        updateDisplay();
    }
}

// Clear existing intervals to prevent multiple intervals running at once
let rechargeInterval = setInterval(rechargeBattery, (rechargeTime / batteryLimit) * 1000);

function updateRechargeSpeed() {
    clearInterval(rechargeInterval);
    rechargeInterval = setInterval(rechargeBattery, (rechargeTime / batteryLimit) * 1000);
}

youtubeLink.addEventListener('click', (e) => {
    e.preventDefault();
    handleLinkClick('youtube', youtubeLink, 'https://www.youtube.com');
});

instagramLink.addEventListener('click', (e) => {
    e.preventDefault();
    handleLinkClick('instagram', instagramLink, 'https://www.instagram.com');
});

twitterLink.addEventListener('click', (e) => {
    e.preventDefault();
    handleLinkClick('twitter', twitterLink, 'https://www.twitter.com');
});

clickButton.addEventListener('click', () => {
    if (currentBattery >= pointsPerClick) {
        points += pointsPerClick;
        currentBattery -= pointsPerClick;
        clickSound.play();
        updateDisplay();
    } else {
        alert('Battery depleted! Wait for recharge.');
    }
});

let maxLevelReached = false;

upgradeButton.addEventListener('click', () => {
    if (!maxLevelReached) {
        switch (pointsPerClick) {
            case 1:
                if (points >= 100) {
                    points -= 100;
                    pointsPerClick = 2;
                    upgradeCost = 500;
                } else {
                    alert('Insufficient points!');
                }
                break;
            case 2:
                if (points >= 500) {
                    points -= 500;
                    pointsPerClick = 3;
                    upgradeCost = 1000;
                } else {
                    alert('Insufficient points!');
                }
                break;
            case 3:
                if (points >= 1000) {
                    points -= 1000;
                    pointsPerClick = 4;
                    upgradeCost = 1500;
                } else {
                    alert('Insufficient points!');
                }
                break;
            case 4:
                if (points >= 1500) {
                    points -= 1500;
                    pointsPerClick = 5;
                    upgradeCost = 2000;
                } else {
                    alert('Insufficient points!');
                }
                break;
            case 5:
                if (points >= 2000) {
                    points -= 2000;
                    pointsPerClick = 6;
                    upgradeCost = 3000;
                } else {
                    alert('Insufficient points!');
                }
                break;
            case 6:
                if (points >= 3000) {
                    points -= 3000;
                    pointsPerClick = 7;
                    upgradeCost = 5000;
                } else {
                    alert('Insufficient points!');
                }
                break;
            case 7:
                if (points >= 5000) {
                    points -= 5000;
                    pointsPerClick = 8;
                    upgradeCost = 7000;
                } else {
                    alert('Insufficient points!');
                }
                break;
            case 8:
                if (points >= 7000) {
                    points -= 7000;
                    pointsPerClick = 9;
                    upgradeCost = 10000;
                } else {
                    alert('Insufficient points!');
                }
                break;
            case 9:
                if (points >= 10000) {
                    points -= 10000;
                    pointsPerClick = 10;
                    upgradeCost = 12000;
                } else {
                    alert('Insufficient points!');
                }
                break;
            case 10:
                if (points >= 12000) {
                    points -= 12000;
                    pointsPerClick = 11;
                    upgradeCost = 15000;
                } else {
                    alert('Insufficient points!');
                }
                break;
            case 11:
                if (points >= 15000) {
                    points -= 15000;
                    pointsPerClick = 12;
                    upgradeCost = 17000;
                } else {
                    alert('Insufficient points!');
                }
                break;
            case 12:
                if (points >= 17000) {
                    points -= 17000;
                    pointsPerClick = 13;
                    upgradeCost = 20000;
                } else {
                    alert('Insufficient points!');
                }
                break;
            case 13:
                if (points >= 20000) {
                    points -= 20000;
                    pointsPerClick = 14;
                    upgradeCost = 25000;
                } else {
                    alert('Insufficient points!');
                }
                break;
            case 14:
                if (points >= 25000) {
                    points -= 25000;
                    pointsPerClick = 15;
                    upgradeCost = 30000;
                } else {
                    alert('Insufficient points!');
                }
                break;
            case 15:
                if (points >= 30000) {
                    points -= 30000;
                    pointsPerClick = 16;
                    upgradeCost = 40000;
                } else {
                    alert('Insufficient points!');
                }
                break;
            case 16:
                if (points >= 40000) {
                    points -= 40000;
                    pointsPerClick = 17;
                    upgradeCost = 60000;
                } else {
                    alert('Insufficient points!');
                }
                break;
            case 17:
                if (points >= 60000) {
                    points -= 60000;
                    pointsPerClick = 18;
                    upgradeCost = 80000;
                } else {
                    alert('Insufficient points!');
                }
                break;
            case 18:
                if (points >= 80000) {
                    points -= 80000;
                    pointsPerClick = 19;
                    upgradeCost = 100000;
                } else {
                    alert('Insufficient points!');
                }
                break;
            case 19:
                if (points >= 100000) {
                    points -= 100000;
                    pointsPerClick = 20;
                    upgradeCost = 120000;
                    maxLevelReached = true;
                    upgradeButton.textContent = 'MAX';
                    upgradeButton.disabled = true;
                } else {
                    alert('Insufficient points!');
                }
                break;
            default:
                alert('Max level reached!');
                break;
        }
        upgradeSound.play();
        updateDisplay();
    } else {
        alert('Max level reached!');
    }
});

batteryUpgradeButton.addEventListener('click', () => {
    if (batteryLevel < 5 && points >= batteryUpgradeCost) { // Change from 5 to 10 here
        points -= batteryUpgradeCost;
        batteryLimit += 1000;
        currentBattery = batteryLimit; // Fully recharge on upgrade
        batteryUpgradeCost *= 4; // Double the cost for next upgrade
        batteryLevel += 1;
        upgradeSound.play();
        updateDisplay();
    }
});

rechargeTimeUpgradeButton.addEventListener('click', () => {
    if (rechargeSpeedLevel < 5 && points >= rechargeTimeUpgradeCost) {
        points -= rechargeTimeUpgradeCost;
        switch (rechargeSpeedLevel) {
            case 1:
                rechargeTime = 650;
                rechargeTimeUpgradeCost = 5000;
                break;
            case 2:
                rechargeTime = 500;
                rechargeTimeUpgradeCost = 10000;
                break;
            case 3:
                rechargeTime = 370;
                rechargeTimeUpgradeCost = 25000;
                break;
            case 4:
                rechargeTime = 260;
                rechargeTimeUpgradeCost = 50000;
                break;
        }
        rechargeSpeedLevel += 1;
        updateRechargeSpeed();
        upgradeSound.play();
        updateDisplay();
    }
});
//hide the upgrade buttons

    upgradeScreenButton.addEventListener('click', () => {
    batteryDisplay.classList.remove('hidden');
    batteryUpgradeButtonclassList.remove('hidden');
    batteryUpgradeCostDisplay.classList.remove('hidden');
    rechargeTimeUpgradeButton.classList.remove('hidden');
    rechargeTimeUpgradeCostDisplay.classList.remove('hidden');
});



freePointsButton.addEventListener('click', () => {
    freePointsButton.classList.add('hidden');
    gameSection.classList.add('hidden');
    freePointsSection.classList.remove('hidden');
    UpgradeSection.classList.add('hidden');
    backButton2.classList.add('hidden');
    batteryUpgradeButtonclassList.add('hidden');
    batteryUpgradeCostDisplay.classList.add('hidden');
    rechargeTimeUpgradeButton.classList.add('hidden');
    rechargeTimeUpgradeCostDisplay.classList.add('hidden');
    upgradeScreenButton.classList.remove('hidden');
});

backButton.addEventListener('click', () => {
    freePointsSection.classList.add('hidden');
    upgradeScreenButton.classList.remove('hidden');
    gameSection.classList.remove('hidden');
    freePointsButton.classList.remove('hidden');
});

upgradeScreenButton.addEventListener('click', () => {
    gameSection.classList.add('hidden');
    upgradeScreenButton.classList.add('hidden');
    freePointsSection.classList.add('hidden');
    UpgradeSection.classList.remove('hidden');
    backButton2.classList.remove('hidden');
    batteryDisplay.classList.remove('hidden');
    batteryUpgradeButtonclassList.remove('hidden');
    batteryUpgradeCostDisplay.classList.remove('hidden');
    rechargeTimeUpgradeButton.classList.remove('hidden');
    rechargeTimeUpgradeCostDisplay.classList.remove('hidden');
});

backButton2.addEventListener('click', () => {

    UpgradeSection.classList.add('hidden');
    upgradeScreenButton.classList.remove('hidden');
    gameSection.classList.remove('hidden');
});


function grantPoints(pointsToAdd) {
    setTimeout(() => {
        points += pointsToAdd;
        updateDisplay();
    }, 10000);
}