const MeetWayToken = artifacts.require("MeetWayToken");

module.exports = function (deployer) {
  deployer.deploy(MeetWayToken);
};
