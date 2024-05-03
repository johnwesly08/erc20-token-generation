const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("Token", (m) => {
    const tokenGenerate = m.contract("MyToken");
    return { tokenGenerate };
});
