"use strict";

var fireballSize = 22;

var getFireballSpeed = function (isLeft) {
  return isLeft ? 2 : 5;
}

var wizardSpeed = 3;

var wizardWidth = 70;

var getWizardHeight = function (wizardHeight) {
  return 1.337 * wizardWidth;
}

var getWizardX = function (gameWizardX) {
  return (gameWizardX-wizardWidth) / 2;
}

var getWizardY = function (gameWizardy) {
  return gameWizardy / 3;
}
