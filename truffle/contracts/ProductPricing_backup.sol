// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract ProductPricing {
    struct ParticipantData {
        string name;
        string email;
        bool gender;
    }

    address private owner;
    uint8 private indexOfParticipant;
    uint8 private maxOfParticipant;

    mapping(address => uint8) public addressToIndex;
    ParticipantData[] private participants;

    constructor(uint8 _maxOfParticipant) {
        owner = msg.sender;
        indexOfParticipant = 1;
        maxOfParticipant = _maxOfParticipant;
    }

    function getOwner() public view returns (address) {
        return owner;
    }

    function getParticipant(
        address _addr
    ) public view returns (ParticipantData memory) {
        require(addressToIndex[_addr] != 0, "Account doesn't exists.");

        return participants[addressToIndex[_addr] - 1];
    }

    function getParticipants()
        public
        view
        onlyOwner
        returns (ParticipantData[] memory)
    {
        return participants;
    }

    function addParticipant(
        ParticipantData memory _par
    ) public notOwner checkLimitUserRegister checkDuplicateAccount {
        participants.push(_par);
        addressToIndex[msg.sender] = indexOfParticipant;

        indexOfParticipant++;
    }

    modifier notOwner() {
        require(
            msg.sender != owner,
            "This function is not allowed for the owner."
        );
        _;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "This function is allowed for the owner.");
        _;
    }

    modifier checkLimitUserRegister() {
        require(
            indexOfParticipant <= maxOfParticipant,
            "Out of limit participant."
        );
        _;
    }

    modifier checkDuplicateAccount() {
        require(addressToIndex[msg.sender] == 0, "Duplicate account.");
        _;
    }
}
